// Core data types for the route builder
export interface LatLng {
  lat: number;
  lng: number;
}

export interface RouteParams {
  startLocation: string;
  endLocation: string;
  rideType: 'road' | 'gravel';
  distance: {
    min: number;
    max: number;
  };
  elevation: 'flat' | 'moderate' | 'challenging';
  pointsOfInterest: POIPreference[];
}

export interface POIPreference {
  type: 'bakery' | 'restaurant' | 'cafe' | 'bike_shop' | 'viewpoint';
  intervalDistance: number; // km
}

export interface GeneratedRoute {
  id: string;
  name: string;
  description?: string;
  path: LatLng[];
  distance: number; // km
  elevationGain: number; // m
  elevationLoss: number; // m
  estimatedTime: number; // minutes
  surfaceTypes: SurfaceBreakdown;
  pointsOfInterest: POILocation[];
  difficulty: 'easy' | 'moderate' | 'hard';
  rideType: 'road' | 'gravel';
  createdAt: Date;
  metadata: RouteMetadata;
}

export interface SurfaceBreakdown {
  paved: number; // percentage
  gravel: number; // percentage
  trail: number; // percentage
  unknown: number; // percentage
}

export interface POILocation {
  id: string;
  name: string;
  type: POIType;
  location: LatLng;
  openingHours: OpeningHours;
  distanceFromStart: number; // km
  estimatedArrivalTime: Date;
  isOpen: boolean;
  contact?: ContactInfo;
}

export type POIType = 'bakery' | 'restaurant' | 'cafe' | 'bike_shop' | 'viewpoint';

export interface OpeningHours {
  monday?: DayHours;
  tuesday?: DayHours;
  wednesday?: DayHours;
  thursday?: DayHours;
  friday?: DayHours;
  saturday?: DayHours;
  sunday?: DayHours;
  isOpen24Hours?: boolean;
  isClosed?: boolean;
}

export interface DayHours {
  open: string; // HH:MM format
  close: string; // HH:MM format
}

export interface ContactInfo {
  phone?: string;
  website?: string;
  address?: string;
}

export interface RouteMetadata {
  generatedBy: 'pedal-peak-route-builder';
  version: string;
  sources: string[]; // APIs used
  generatedAt: Date;
  preferences: RouteParams;
}

export interface UserRoutePreferences {
  userId?: string;
  defaultRideType: 'road' | 'gravel';
  preferredDistance: number;
  elevationPreference: 'flat' | 'moderate' | 'challenging';
  favoritePOITypes: POIType[];
  avoidHighways: boolean;
  preferScenicRoutes: boolean;
  savedLocations: SavedLocation[];
}

export interface SavedLocation {
  id: string;
  name: string;
  location: LatLng;
  type: 'home' | 'work' | 'favorite';
}

// API Response types
export interface HeatmapData {
  segments: HeatmapSegment[];
  bounds: LatLngBounds;
}

export interface HeatmapSegment {
  path: LatLng[];
  popularity: number;
  surface: string;
}

export interface LatLngBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface RouteData {
  path: LatLng[];
  distance: number;
  elevationProfile: ElevationPoint[];
  surface: string;
  difficulty: number;
}

export interface ElevationData {
  points: ElevationPoint[];
  totalGain: number;
  totalLoss: number;
  maxElevation: number;
  minElevation: number;
}

export interface ElevationPoint {
  location: LatLng;
  elevation: number;
  distance: number; // cumulative distance from start
}

// Error handling types
export enum RouteBuilderErrorType {
  INVALID_LOCATION = 'invalid_location',
  API_RATE_LIMIT = 'api_rate_limit',
  NO_ROUTE_FOUND = 'no_route_found',
  POI_UNAVAILABLE = 'poi_unavailable',
  NETWORK_ERROR = 'network_error',
  VALIDATION_ERROR = 'validation_error'
}

export interface RouteBuilderError {
  type: RouteBuilderErrorType;
  message: string;
  details?: any;
  recoverable: boolean;
  suggestedAction?: string;
}

// Validation types
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// Route modification types
export interface RouteModification {
  type: 'add_waypoint' | 'remove_waypoint' | 'move_waypoint';
  waypoint?: LatLng;
  index?: number;
}

// Route preferences for optimization
export interface RoutePreferences {
  avoidHighways: boolean;
  preferScenicRoutes: boolean;
  maxGradient: number;
  surfacePreference: 'paved' | 'mixed' | 'offroad';
}