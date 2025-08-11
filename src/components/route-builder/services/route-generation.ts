import type {
  RouteParams,
  GeneratedRoute,
  LatLng,
  ValidationResult,
  POILocation,
  SurfaceBreakdown,
  ElevationPoint
} from '../types';
import { ExternalAPIService } from './external-api';
import { POIService } from './poi-service';
import { validateRouteParams } from '../utils/validation';
import { 
  generateRouteId, 
  createRouteMetadata, 
  generateRouteName, 
  generateRouteDescription,
  estimateRideTime,
  calculateDifficulty
} from '../utils/route-helpers';
import { calculatePathDistance } from '../utils/geo';

export interface RoutePreferences {
  avoidHighways: boolean;
  preferScenicRoutes: boolean;
  maxGradient: number;
  surfacePreference: 'paved' | 'mixed' | 'offroad';
}

export class RouteGenerationService {
  private externalAPI: ExternalAPIService;
  private poiService: POIService;

  constructor() {
    this.externalAPI = new ExternalAPIService();
    this.poiService = new POIService();
  }

  async generateRoute(params: RouteParams): Promise<GeneratedRoute> {
    // Validate input parameters
    const validation = this.validateInputs(params);
    if (!validation.isValid) {
      throw new Error(`Invalid route parameters: ${validation.errors.map(e => e.message).join(', ')}`);
    }

    try {
      // Step 1: Geocode start and end locations
      const startCoords = await this.geocodeLocation(params.startLocation);
      const endCoords = await this.geocodeLocation(params.endLocation);

      // Step 2: Get base route from external APIs with fallbacks
      const baseRoute = await this.getBaseRoute(startCoords, endCoords, params.rideType);

      // Step 3: Optimize route based on preferences and constraints
      const optimizedRoute = await this.optimizeRouteForPreferences(baseRoute, params);

      // Step 4: Add elevation data
      const routeWithElevation = await this.addElevationData(optimizedRoute);

      // Step 5: Add points of interest
      const routeWithPOIs = await this.addPointsOfInterest(routeWithElevation, params.pointsOfInterest);

      // Step 6: Calculate final metrics and create route object
      const finalRoute = await this.finalizeRoute(routeWithPOIs, params);

      return finalRoute;

    } catch (error) {
      console.error('Route generation failed:', error);
      throw new Error(`Failed to generate route: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async optimizeRoute(route: GeneratedRoute, preferences: RoutePreferences): Promise<GeneratedRoute> {
    try {
      // Re-route segments that don't meet preferences
      let optimizedPath = [...route.path];

      if (preferences.avoidHighways) {
        optimizedPath = await this.avoidHighways(optimizedPath, route.rideType);
      }

      if (preferences.preferScenicRoutes) {
        optimizedPath = await this.preferScenicRoutes(optimizedPath, route.rideType);
      }

      // Recalculate metrics with optimized path
      const distance = calculatePathDistance(optimizedPath);
      const elevationData = await this.externalAPI.getRideWithGPSElevation(optimizedPath);
      const estimatedTime = estimateRideTime(distance, elevationData.totalGain, route.rideType);
      const difficulty = calculateDifficulty(distance, elevationData.totalGain, route.rideType);

      return {
        ...route,
        path: optimizedPath,
        distance,
        elevationGain: elevationData.totalGain,
        elevationLoss: elevationData.totalLoss,
        estimatedTime,
        difficulty,
        metadata: {
          ...route.metadata,
          generatedAt: new Date()
        }
      };

    } catch (error) {
      console.error('Route optimization failed:', error);
      return route; // Return original route if optimization fails
    }
  }

  validateInputs(params: RouteParams): ValidationResult {
    return validateRouteParams(params);
  }

  private async geocodeLocation(location: string): Promise<LatLng> {
    try {
      // Use a geocoding service (Nominatim is free)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`
      );

      if (!response.ok) {
        throw new Error(`Geocoding failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data || data.length === 0) {
        throw new Error(`Location not found: ${location}`);
      }

      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };

    } catch (error) {
      console.error('Geocoding error:', error);
      // Return mock coordinates for common locations as fallback
      return this.getMockCoordinates(location);
    }
  }

  private getMockCoordinates(location: string): LatLng {
    const mockLocations: Record<string, LatLng> = {
      'zurich': { lat: 47.3769, lng: 8.5417 },
      'bern': { lat: 46.9481, lng: 7.4474 },
      'geneva': { lat: 46.2044, lng: 6.1432 },
      'basel': { lat: 47.5596, lng: 7.5886 },
      'lausanne': { lat: 46.5197, lng: 6.6323 }
    };

    const key = location.toLowerCase();
    for (const [city, coords] of Object.entries(mockLocations)) {
      if (key.includes(city)) {
        return coords;
      }
    }

    // Default to Zurich if no match found
    return mockLocations.zurich;
  }

  private async getBaseRoute(start: LatLng, end: LatLng, rideType: 'road' | 'gravel'): Promise<{
    path: LatLng[];
    distance: number;
    surface: string;
  }> {
    try {
      // Use our improved routing API which tries multiple real routing services
      const osmRoute = await this.externalAPI.getOSMRoute(start, end, rideType);
      return {
        path: osmRoute.path,
        distance: osmRoute.distance,
        surface: osmRoute.surface
      };
    } catch (error) {
      console.error('All real routing services failed:', error);
      
      // Only use simple route as absolute last resort
      throw new Error(
        'Unable to generate route: All routing services are currently unavailable. ' +
        'Please check your internet connection and try again. ' +
        `(Error: ${error instanceof Error ? error.message : 'Unknown error'})`
      );
    }
  }

  private generateSimpleRoute(start: LatLng, end: LatLng): {
    path: LatLng[];
    distance: number;
    surface: string;
  } {
    const path: LatLng[] = [];
    const steps = 10;

    for (let i = 0; i <= steps; i++) {
      const ratio = i / steps;
      path.push({
        lat: start.lat + (end.lat - start.lat) * ratio,
        lng: start.lng + (end.lng - start.lng) * ratio
      });
    }

    return {
      path,
      distance: calculatePathDistance(path),
      surface: 'mixed'
    };
  }

  private async optimizeRouteForPreferences(
    baseRoute: { path: LatLng[]; distance: number; surface: string },
    params: RouteParams
  ): Promise<{ path: LatLng[]; distance: number; surface: string }> {
    let optimizedPath = [...baseRoute.path];

    // Adjust route length to match desired distance range
    const targetDistance = (params.distance.min + params.distance.max) / 2;
    const currentDistance = baseRoute.distance;

    if (currentDistance < params.distance.min) {
      // Route is too short, add detours
      optimizedPath = await this.addDetours(optimizedPath, targetDistance - currentDistance, params.rideType);
    } else if (currentDistance > params.distance.max) {
      // Route is too long, try to find shortcuts
      optimizedPath = await this.findShortcuts(optimizedPath, currentDistance - targetDistance);
    }

    // Apply elevation preferences
    if (params.elevation === 'flat') {
      optimizedPath = await this.preferFlatRoute(optimizedPath);
    } else if (params.elevation === 'challenging') {
      optimizedPath = await this.preferHillyRoute(optimizedPath);
    }

    return {
      path: optimizedPath,
      distance: calculatePathDistance(optimizedPath),
      surface: baseRoute.surface
    };
  }

  private async addDetours(path: LatLng[], additionalDistance: number, _rideType: 'road' | 'gravel'): Promise<LatLng[]> {
    // Simple implementation: add loops at the midpoint
    const midIndex = Math.floor(path.length / 2);
    const midPoint = path[midIndex];
    
    // Create a small loop around the midpoint
    const loopRadius = additionalDistance / (2 * Math.PI * 111); // Rough conversion to degrees
    const loopPoints: LatLng[] = [];
    
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * 2 * Math.PI;
      loopPoints.push({
        lat: midPoint.lat + Math.cos(angle) * loopRadius,
        lng: midPoint.lng + Math.sin(angle) * loopRadius
      });
    }

    // Insert loop into the path
    const newPath = [
      ...path.slice(0, midIndex),
      ...loopPoints,
      ...path.slice(midIndex)
    ];

    return newPath;
  }

  private async findShortcuts(path: LatLng[], _excessDistance: number): Promise<LatLng[]> {
    // Simple implementation: remove some intermediate points
    const targetPoints = Math.max(5, Math.floor(path.length * 0.8));
    const step = Math.floor(path.length / targetPoints);
    
    const shortenedPath: LatLng[] = [];
    for (let i = 0; i < path.length; i += step) {
      shortenedPath.push(path[i]);
    }
    
    // Always include the last point
    if (shortenedPath[shortenedPath.length - 1] !== path[path.length - 1]) {
      shortenedPath.push(path[path.length - 1]);
    }

    return shortenedPath;
  }

  private async preferFlatRoute(path: LatLng[]): Promise<LatLng[]> {
    // In a real implementation, this would use elevation data to find flatter alternatives
    // For now, return the original path
    return path;
  }

  private async preferHillyRoute(path: LatLng[]): Promise<LatLng[]> {
    // In a real implementation, this would seek out hills and climbs
    // For now, return the original path
    return path;
  }

  private async avoidHighways(path: LatLng[], _rideType: 'road' | 'gravel'): Promise<LatLng[]> {
    // This would typically involve re-routing through smaller roads
    // For now, return the original path
    return path;
  }

  private async preferScenicRoutes(path: LatLng[], _rideType: 'road' | 'gravel'): Promise<LatLng[]> {
    // This would involve finding routes through parks, along rivers, etc.
    // For now, return the original path
    return path;
  }

  private async addElevationData(route: { path: LatLng[]; distance: number; surface: string }): Promise<{
    path: LatLng[];
    distance: number;
    surface: string;
    elevationGain: number;
    elevationLoss: number;
    elevationProfile: ElevationPoint[];
  }> {
    try {
      const elevationData = await this.externalAPI.getRideWithGPSElevation(route.path);
      
      return {
        ...route,
        elevationGain: elevationData.totalGain,
        elevationLoss: elevationData.totalLoss,
        elevationProfile: elevationData.points
      };
    } catch (error) {
      console.warn('Failed to get elevation data, using estimates:', error);
      
      // Fallback to estimated elevation data
      const estimatedGain = route.distance * 10; // Rough estimate: 10m gain per km
      return {
        ...route,
        elevationGain: estimatedGain,
        elevationLoss: estimatedGain * 0.9,
        elevationProfile: []
      };
    }
  }

  private async addPointsOfInterest(
    route: {
      path: LatLng[];
      distance: number;
      surface: string;
      elevationGain: number;
      elevationLoss: number;
      elevationProfile: ElevationPoint[];
    },
    poiPreferences: RouteParams['pointsOfInterest']
  ): Promise<{
    path: LatLng[];
    distance: number;
    surface: string;
    elevationGain: number;
    elevationLoss: number;
    elevationProfile: ElevationPoint[];
    pointsOfInterest: POILocation[];
  }> {
    try {
      const pois = await this.poiService.findPOIsAlongRoute(route.path, poiPreferences);
      
      return {
        ...route,
        pointsOfInterest: pois
      };
    } catch (error) {
      console.warn('Failed to add POIs:', error);
      
      return {
        ...route,
        pointsOfInterest: []
      };
    }
  }

  private async finalizeRoute(
    route: {
      path: LatLng[];
      distance: number;
      surface: string;
      elevationGain: number;
      elevationLoss: number;
      elevationProfile: ElevationPoint[];
      pointsOfInterest: POILocation[];
    },
    params: RouteParams
  ): Promise<GeneratedRoute> {
    const estimatedTime = estimateRideTime(route.distance, route.elevationGain, params.rideType);
    const difficulty = calculateDifficulty(route.distance, route.elevationGain, params.rideType);
    const surfaceBreakdown = this.calculateSurfaceBreakdown(route.surface, params.rideType);

    return {
      id: generateRouteId(),
      name: generateRouteName(params),
      description: generateRouteDescription(params),
      path: route.path,
      distance: route.distance,
      elevationGain: route.elevationGain,
      elevationLoss: route.elevationLoss,
      estimatedTime,
      surfaceTypes: surfaceBreakdown,
      pointsOfInterest: route.pointsOfInterest,
      difficulty,
      rideType: params.rideType,
      createdAt: new Date(),
      metadata: createRouteMetadata(params, ['komoot', 'osm', 'elevation-api'])
    };
  }

  private calculateSurfaceBreakdown(surface: string, rideType: 'road' | 'gravel'): SurfaceBreakdown {
    // Simple implementation based on ride type
    if (rideType === 'road') {
      return {
        paved: 85,
        gravel: 10,
        trail: 0,
        unknown: 5
      };
    } else {
      return {
        paved: 30,
        gravel: 50,
        trail: 15,
        unknown: 5
      };
    }
  }
}