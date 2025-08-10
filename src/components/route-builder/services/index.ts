// Service interfaces for the route builder
import type {
  RouteParams,
  GeneratedRoute,
  ValidationResult,
  LatLng,
  LatLngBounds,
  HeatmapData,
  RouteData,
  ElevationData,
  OpeningHours,
  POILocation,
  RouteMetadata
} from '../types';
import type { RoutePreferences } from '../types';

export interface RouteGenerationService {
  generateRoute(params: RouteParams): Promise<GeneratedRoute>;
  optimizeRoute(route: GeneratedRoute, preferences: RoutePreferences): Promise<GeneratedRoute>;
  validateInputs(params: RouteParams): ValidationResult;
}

export interface ExternalAPIService {
  getStravaHeatmap(bounds: LatLngBounds, activity: 'cycling'): Promise<HeatmapData>;
  getKomootRoute(start: LatLng, end: LatLng, profile: 'road' | 'gravel'): Promise<RouteData>;
  getRideWithGPSElevation(path: LatLng[]): Promise<ElevationData>;
  getOpeningHours(placeId: string): Promise<OpeningHours>;
}

export interface GPXService {
  generateGPX(route: GeneratedRoute, metadata: RouteMetadata): string;
  validateGPX(gpxContent: string): boolean;
  addWaypoints(gpx: string, pois: POILocation[]): string;
}

export interface POIService {
  findPOIsNearRoute(route: LatLng[], poiTypes: string[], maxDistance: number): Promise<POILocation[]>;
  checkOpeningHours(poi: POILocation, arrivalTime: Date): Promise<boolean>;
  filterAvailablePOIs(pois: POILocation[], arrivalTimes: Date[]): Promise<POILocation[]>;
}



// Re-export types for convenience
export type {
  RouteParams,
  GeneratedRoute,
  ValidationResult,
  LatLng,
  LatLngBounds,
  HeatmapData,
  RouteData,
  ElevationData,
  OpeningHours,
  POILocation,
  RouteMetadata
} from '../types';