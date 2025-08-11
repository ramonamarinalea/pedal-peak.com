import type {
  LatLng,
  LatLngBounds,
  HeatmapData,
  RouteData,
  ElevationData,
  OpeningHours,
  RouteBuilderError
} from '../types';
import { RouteBuilderErrorType } from '../types';

// Rate limiting configuration
interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  retryAfter?: number;
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  constructor(private config: RateLimitConfig) {}

  canMakeRequest(key: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < this.config.windowMs);
    
    this.requests.set(key, validRequests);
    
    return validRequests.length < this.config.maxRequests;
  }

  recordRequest(key: string): void {
    const requests = this.requests.get(key) || [];
    requests.push(Date.now());
    this.requests.set(key, requests);
  }

  getRetryAfter(key: string): number {
    const requests = this.requests.get(key) || [];
    if (requests.length === 0) return 0;
    
    const oldestRequest = Math.min(...requests);
    const retryAfter = this.config.windowMs - (Date.now() - oldestRequest);
    
    return Math.max(0, retryAfter);
  }
}

export class ExternalAPIService {
  private stravaLimiter = new RateLimiter({ maxRequests: 100, windowMs: 15 * 60 * 1000 }); // 100 per 15 min
  private komootLimiter = new RateLimiter({ maxRequests: 1000, windowMs: 60 * 60 * 1000 }); // 1000 per hour
  private ridewithgpsLimiter = new RateLimiter({ maxRequests: 500, windowMs: 60 * 60 * 1000 }); // 500 per hour
  private placesLimiter = new RateLimiter({ maxRequests: 1000, windowMs: 24 * 60 * 60 * 1000 }); // 1000 per day

  async getStravaHeatmap(bounds: LatLngBounds, activity: 'cycling'): Promise<HeatmapData> {
    const key = 'strava-heatmap';
    
    if (!this.stravaLimiter.canMakeRequest(key)) {
      throw this.createRateLimitError('strava', this.stravaLimiter.getRetryAfter(key));
    }

    try {
      this.stravaLimiter.recordRequest(key);
      
      // Mock implementation - in production, use actual Strava API
      // Note: Strava's heatmap data is not directly accessible via API
      // This would typically require web scraping or alternative approaches
      
      const mockHeatmapData: HeatmapData = {
        segments: [
          {
            path: [
              { lat: bounds.south + (bounds.north - bounds.south) * 0.2, lng: bounds.west + (bounds.east - bounds.west) * 0.2 },
              { lat: bounds.south + (bounds.north - bounds.south) * 0.8, lng: bounds.west + (bounds.east - bounds.west) * 0.8 }
            ],
            popularity: 85,
            surface: 'paved'
          }
        ],
        bounds
      };

      return mockHeatmapData;
    } catch (error) {
      throw this.createNetworkError('Failed to fetch Strava heatmap data', error);
    }
  }

  async getKomootRoute(start: LatLng, end: LatLng, profile: 'road' | 'gravel'): Promise<RouteData> {
    const key = 'komoot-route';
    
    if (!this.komootLimiter.canMakeRequest(key)) {
      throw this.createRateLimitError('komoot', this.komootLimiter.getRetryAfter(key));
    }

    try {
      this.komootLimiter.recordRequest(key);
      
      // Use our routing API which tries multiple services
      return await this.getOSMRoute(start, end, profile);
    } catch (error) {
      throw this.createNetworkError('Failed to fetch route data', error);
    }
  }

  async getRideWithGPSElevation(path: LatLng[]): Promise<ElevationData> {
    const key = 'ridewithgps-elevation';
    
    if (!this.ridewithgpsLimiter.canMakeRequest(key)) {
      throw this.createRateLimitError('ridewithgps', this.ridewithgpsLimiter.getRetryAfter(key));
    }

    try {
      this.ridewithgpsLimiter.recordRequest(key);
      
      // For static deployment, generate mock elevation data
      const mockElevationData: ElevationData = {
        points: path.map((point, index) => ({
          location: point,
          elevation: 500 + Math.sin(index / path.length * Math.PI * 2) * 200,
          distance: index * (this.calculatePathDistance(path) / path.length)
        })),
        totalGain: Math.random() * 500 + 100,
        totalLoss: Math.random() * 400 + 80,
        maxElevation: 800,
        minElevation: 300
      };
      
      return mockElevationData;
    } catch (error) {
      throw this.createNetworkError('Failed to fetch elevation data', error);
    }
  }

  async getOpeningHours(placeId: string): Promise<OpeningHours> {
    const key = 'places-opening-hours';
    
    if (!this.placesLimiter.canMakeRequest(key)) {
      throw this.createRateLimitError('places', this.placesLimiter.getRetryAfter(key));
    }

    try {
      this.placesLimiter.recordRequest(key);
      
      // For static deployment, return mock opening hours
      return {
        monday: { open: '08:00', close: '18:00' },
        tuesday: { open: '08:00', close: '18:00' },
        wednesday: { open: '08:00', close: '18:00' },
        thursday: { open: '08:00', close: '18:00' },
        friday: { open: '08:00', close: '18:00' },
        saturday: { open: '09:00', close: '17:00' },
        sunday: { open: '10:00', close: '16:00' }
      };
    } catch (error) {
      throw this.createNetworkError('Failed to fetch opening hours', error);
    }
  }

  // Real routing using multiple services via our API
  async getOSMRoute(start: LatLng, end: LatLng, profile: 'road' | 'gravel'): Promise<RouteData> {
    try {
      const response = await fetch('/api/route-builder/osm-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          start,
          end,
          profile
        }),
        signal: AbortSignal.timeout(15000) // 15 second timeout for routing
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(`Routing API error: ${response.status} - ${errorData.error || 'Failed to generate route'}`);
      }

      const data = await response.json();
      
      // Check if we got an error response
      if (data.error) {
        throw new Error(`Routing service error: ${data.error}`);
      }
      
      return this.parseOSMResponse(data);
    } catch (error) {
      console.error('OSM Route API failed:', error);
      throw this.createNetworkError('Failed to fetch route data from routing services', error);
    }
  }

  private parseKomootResponse(data: any): RouteData {
    // Parse Komoot/OpenRouteService response format
    const coordinates = data.features?.[0]?.geometry?.coordinates || [];
    const path: LatLng[] = coordinates.map((coord: number[]) => ({
      lng: coord[0],
      lat: coord[1]
    }));

    const properties = data.features?.[0]?.properties || {};
    
    return {
      path,
      distance: (properties.segments?.[0]?.distance || 0) / 1000, // Convert to km
      elevationProfile: this.generateElevationProfile(path, properties.ascent || 0),
      surface: 'mixed',
      difficulty: this.calculateDifficultyFromDistance(properties.segments?.[0]?.distance || 0)
    };
  }

  private parseElevationResponse(data: any, path: LatLng[]): ElevationData {
    const elevations = data.results || [];
    const points = elevations.map((result: any, index: number) => ({
      location: path[index] || { lat: 0, lng: 0 },
      elevation: result.elevation || 0,
      distance: index * (this.calculatePathDistance(path) / path.length)
    }));

    const elevationValues = points.map((p: any) => p.elevation);
    const totalGain = this.calculateElevationGain(elevationValues);
    const totalLoss = this.calculateElevationLoss(elevationValues);

    return {
      points,
      totalGain,
      totalLoss,
      maxElevation: Math.max(...elevationValues),
      minElevation: Math.min(...elevationValues)
    };
  }

  private parseOpeningHoursResponse(data: any): OpeningHours {
    const periods = data.result?.opening_hours?.periods || [];
    const openingHours: OpeningHours = {};

    const dayMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    periods.forEach((period: any) => {
      if (period.open && period.close) {
        const dayName = dayMap[period.open.day] as keyof OpeningHours;
        if (dayName && dayName !== 'isOpen24Hours' && dayName !== 'isClosed') {
          (openingHours as any)[dayName] = {
            open: this.formatTime(period.open.time),
            close: this.formatTime(period.close.time)
          };
        }
      }
    });

    return openingHours;
  }

  private parseOSMResponse(data: any): RouteData {
    // Parse OpenStreetMap routing response
    const coordinates = data.routes?.[0]?.geometry?.coordinates || [];
    const path: LatLng[] = coordinates.map((coord: number[]) => ({
      lng: coord[0],
      lat: coord[1]
    }));

    const route = data.routes?.[0] || {};
    
    return {
      path,
      distance: (route.distance || 0) / 1000,
      elevationProfile: this.generateElevationProfile(path, route.ascent || 0),
      surface: 'mixed',
      difficulty: this.calculateDifficultyFromDistance(route.distance || 0)
    };
  }

  private generateElevationProfile(path: LatLng[], totalAscent: number): any[] {
    // Generate a realistic elevation profile
    return path.map((point, index) => ({
      location: point,
      elevation: 500 + Math.sin(index / path.length * Math.PI * 2) * (totalAscent / 4),
      distance: index * (this.calculatePathDistance(path) / path.length)
    }));
  }

  private calculatePathDistance(path: LatLng[]): number {
    let distance = 0;
    for (let i = 1; i < path.length; i++) {
      distance += this.haversineDistance(path[i - 1], path[i]);
    }
    return distance;
  }

  private haversineDistance(point1: LatLng, point2: LatLng): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.toRadians(point2.lat - point1.lat);
    const dLng = this.toRadians(point2.lng - point1.lng);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRadians(point1.lat)) * Math.cos(this.toRadians(point2.lat)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  private calculateElevationGain(elevations: number[]): number {
    let gain = 0;
    for (let i = 1; i < elevations.length; i++) {
      const diff = elevations[i] - elevations[i - 1];
      if (diff > 0) gain += diff;
    }
    return gain;
  }

  private calculateElevationLoss(elevations: number[]): number {
    let loss = 0;
    for (let i = 1; i < elevations.length; i++) {
      const diff = elevations[i - 1] - elevations[i];
      if (diff > 0) loss += diff;
    }
    return loss;
  }

  private calculateDifficultyFromDistance(distanceM: number): number {
    const distanceKm = distanceM / 1000;
    if (distanceKm < 20) return 1;
    if (distanceKm < 50) return 2;
    if (distanceKm < 100) return 3;
    return 4;
  }

  private formatTime(time: string): string {
    // Convert HHMM format to HH:MM
    if (time.length === 4) {
      return `${time.slice(0, 2)}:${time.slice(2)}`;
    }
    return time;
  }

  private createRateLimitError(service: string, retryAfter: number): RouteBuilderError {
    return {
      type: RouteBuilderErrorType.API_RATE_LIMIT,
      message: `Rate limit exceeded for ${service}. Please try again in ${Math.ceil(retryAfter / 1000)} seconds.`,
      details: { service, retryAfter },
      recoverable: true,
      suggestedAction: `Wait ${Math.ceil(retryAfter / 1000)} seconds before retrying`
    };
  }

  private createNetworkError(message: string, originalError: any): RouteBuilderError {
    return {
      type: RouteBuilderErrorType.NETWORK_ERROR,
      message,
      details: originalError,
      recoverable: true,
      suggestedAction: 'Check your internet connection and try again'
    };
  }

  private generateMockRoutePath(start: LatLng, end: LatLng): LatLng[] {
    const path: LatLng[] = [];
    const steps = 20;
    
    for (let i = 0; i <= steps; i++) {
      const ratio = i / steps;
      const lat = start.lat + (end.lat - start.lat) * ratio;
      const lng = start.lng + (end.lng - start.lng) * ratio;
      
      // Add some variation to make it look more realistic
      const variation = 0.002;
      const varLat = lat + (Math.random() - 0.5) * variation;
      const varLng = lng + (Math.random() - 0.5) * variation;
      
      path.push({ lat: varLat, lng: varLng });
    }
    
    return path;
  }

  private calculateDistance(point1: LatLng, point2: LatLng): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.toRadians(point2.lat - point1.lat);
    const dLng = this.toRadians(point2.lng - point1.lng);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRadians(point1.lat)) * Math.cos(this.toRadians(point2.lat)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}