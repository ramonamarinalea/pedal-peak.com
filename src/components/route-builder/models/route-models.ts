import { pgTable, text, integer, real, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";
import { users } from "@/lib/schema";
import type { 
  GeneratedRoute, 
  RouteParams, 
  POILocation, 
  SurfaceBreakdown,
  RouteMetadata,
  LatLng 
} from '../types';

// Database schema for saved routes
export const savedRoutes = pgTable("saved_routes", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("userId").references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description"),
  path: jsonb("path").$type<LatLng[]>().notNull(),
  distance: real("distance").notNull(), // km
  elevationGain: integer("elevationGain").notNull(), // m
  elevationLoss: integer("elevationLoss").notNull(), // m
  estimatedTime: integer("estimatedTime").notNull(), // minutes
  surfaceTypes: jsonb("surfaceTypes").$type<SurfaceBreakdown>().notNull(),
  pointsOfInterest: jsonb("pointsOfInterest").$type<POILocation[]>().notNull(),
  difficulty: text("difficulty").$type<'easy' | 'moderate' | 'hard'>().notNull(),
  rideType: text("rideType").$type<'road' | 'gravel'>().notNull(),
  metadata: jsonb("metadata").$type<RouteMetadata>().notNull(),
  isPublic: boolean("isPublic").default(false).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
});

// Database schema for route generation cache
export const routeCache = pgTable("route_cache", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  paramsHash: text("paramsHash").notNull().unique(), // Hash of route parameters
  route: jsonb("route").$type<GeneratedRoute>().notNull(),
  expiresAt: timestamp("expiresAt", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
});

// Database schema for user route preferences
export const userRoutePreferences = pgTable("user_route_preferences", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("userId").references(() => users.id, { onDelete: "cascade" }).notNull().unique(),
  defaultRideType: text("defaultRideType").$type<'road' | 'gravel'>().default('road').notNull(),
  preferredDistance: integer("preferredDistance").default(50).notNull(), // km
  elevationPreference: text("elevationPreference").$type<'flat' | 'moderate' | 'challenging'>().default('moderate').notNull(),
  favoritePOITypes: jsonb("favoritePOITypes").$type<string[]>().default([]).notNull(),
  avoidHighways: boolean("avoidHighways").default(true).notNull(),
  preferScenicRoutes: boolean("preferScenicRoutes").default(true).notNull(),
  savedLocations: jsonb("savedLocations").$type<Array<{id: string, name: string, location: LatLng, type: 'home' | 'work' | 'favorite'}>>().default([]).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
});

// Model classes for better data handling
export class RouteModel {
  constructor(private data: GeneratedRoute) {}

  static create(params: Omit<GeneratedRoute, 'id' | 'createdAt'>): RouteModel {
    return new RouteModel({
      ...params,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    });
  }

  get id(): string {
    return this.data.id;
  }

  get name(): string {
    return this.data.name;
  }

  get distance(): number {
    return this.data.distance;
  }

  get elevationGain(): number {
    return this.data.elevationGain;
  }

  get difficulty(): 'easy' | 'moderate' | 'hard' {
    return this.data.difficulty;
  }

  get path(): LatLng[] {
    return this.data.path;
  }

  get pointsOfInterest(): POILocation[] {
    return this.data.pointsOfInterest;
  }

  toJSON(): GeneratedRoute {
    return { ...this.data };
  }

  // Calculate route statistics
  getStats() {
    return {
      totalDistance: this.data.distance,
      elevationGain: this.data.elevationGain,
      elevationLoss: this.data.elevationLoss,
      estimatedTime: this.data.estimatedTime,
      averageGradient: this.data.elevationGain / (this.data.distance * 1000) * 100,
      poiCount: this.data.pointsOfInterest.length,
      surfaceBreakdown: this.data.surfaceTypes,
    };
  }

  // Check if route meets certain criteria
  meetsCriteria(criteria: {
    maxDistance?: number;
    maxElevation?: number;
    requiredPOITypes?: string[];
  }): boolean {
    if (criteria.maxDistance && this.data.distance > criteria.maxDistance) {
      return false;
    }

    if (criteria.maxElevation && this.data.elevationGain > criteria.maxElevation) {
      return false;
    }

    if (criteria.requiredPOITypes) {
      const routePOITypes = this.data.pointsOfInterest.map(poi => poi.type);
      const hasAllRequired = criteria.requiredPOITypes.every(type => 
        routePOITypes.includes(type as any)
      );
      if (!hasAllRequired) {
        return false;
      }
    }

    return true;
  }
}

export class RouteParamsModel {
  constructor(private params: RouteParams) {}

  static fromUserInput(input: any): RouteParamsModel {
    // Sanitize and normalize user input
    const sanitized: RouteParams = {
      startLocation: String(input.startLocation || '').trim(),
      endLocation: String(input.endLocation || '').trim(),
      rideType: input.rideType === 'gravel' ? 'gravel' : 'road',
      distance: {
        min: Math.max(0, Number(input.distance?.min) || 10),
        max: Math.min(500, Number(input.distance?.max) || 50),
      },
      elevation: ['flat', 'moderate', 'challenging'].includes(input.elevation) 
        ? input.elevation 
        : 'moderate',
      pointsOfInterest: Array.isArray(input.pointsOfInterest) 
        ? input.pointsOfInterest.filter((poi: any) => poi && typeof poi === 'object')
        : [],
    };

    return new RouteParamsModel(sanitized);
  }

  get startLocation(): string {
    return this.params.startLocation;
  }

  get endLocation(): string {
    return this.params.endLocation;
  }

  get rideType(): 'road' | 'gravel' {
    return this.params.rideType;
  }

  get distance(): { min: number; max: number } {
    return this.params.distance;
  }

  get elevation(): 'flat' | 'moderate' | 'challenging' {
    return this.params.elevation;
  }

  get pointsOfInterest() {
    return this.params.pointsOfInterest;
  }

  toJSON(): RouteParams {
    return { ...this.params };
  }

  // Generate a hash for caching purposes
  generateHash(): string {
    const hashData = JSON.stringify({
      start: this.params.startLocation.toLowerCase(),
      end: this.params.endLocation.toLowerCase(),
      type: this.params.rideType,
      distance: this.params.distance,
      elevation: this.params.elevation,
      pois: this.params.pointsOfInterest.sort((a, b) => a.type.localeCompare(b.type)),
    });

    // Simple hash function (in production, use a proper hash library)
    let hash = 0;
    for (let i = 0; i < hashData.length; i++) {
      const char = hashData.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }
}