import type {
  LatLng,
  POILocation,
  POIPreference,
  OpeningHours,
  ContactInfo
} from '../types';
import { ExternalAPIService } from './external-api';
import { calculateDistance } from '../utils/geo';

export class POIService {
  private externalAPI: ExternalAPIService;

  constructor() {
    this.externalAPI = new ExternalAPIService();
  }

  async findPOIsAlongRoute(
    routePath: LatLng[],
    poiPreferences: POIPreference[]
  ): Promise<POILocation[]> {
    const allPOIs: POILocation[] = [];

    for (const preference of poiPreferences) {
      try {
        const poisForType = await this.findPOIsForType(routePath, preference);
        allPOIs.push(...poisForType);
      } catch (error) {
        console.warn(`Failed to find POIs for type ${preference.type}:`, error);
      }
    }

    // Sort POIs by distance from start
    return allPOIs.sort((a, b) => a.distanceFromStart - b.distanceFromStart);
  }

  async findPOIsNearRoute(route: LatLng[], poiTypes: string[], maxDistance: number): Promise<POILocation[]> {
    // Convert string types to POIPreference format
    const preferences: POIPreference[] = poiTypes.map(type => ({
      type: type as POIPreference['type'],
      distanceKm: maxDistance
    }));

    return this.findPOIsAlongRoute(route, preferences);
  }

  private async findPOIsForType(
    routePath: LatLng[],
    preference: POIPreference
  ): Promise<POILocation[]> {
    const pois: POILocation[] = [];
    const routeDistance = this.calculateRouteDistance(routePath);
    const targetDistance = preference.distanceKm;
    
    // Only add POI if the target distance is within the route
    if (targetDistance > 0 && targetDistance < routeDistance) {
      const targetPoint = this.getPointAtDistance(routePath, targetDistance);
      
      if (targetPoint) {
        try {
          const poi = await this.findNearestPOI(targetPoint, preference.type, targetDistance, preference.name);
          if (poi) {
            pois.push(poi);
          }
        } catch (error) {
          console.warn(`Failed to find POI at distance ${targetDistance}km:`, error);
        }
      }
    }

    return pois;
  }

  private async findNearestPOI(
    location: LatLng,
    poiType: POIPreference['type'],
    distanceFromStart: number,
    customName?: string
  ): Promise<POILocation | null> {
    try {
      // Use Overpass API (OpenStreetMap) to find POIs
      const query = this.buildOverpassQuery(location, poiType);
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: query
      });

      if (!response.ok) {
        throw new Error(`Overpass API error: ${response.status}`);
      }

      const data = await response.json();
      const elements = data.elements || [];

      if (elements.length === 0) {
        // Return mock POI if no real data found
        return this.createMockPOI(location, poiType, distanceFromStart, customName);
      }

      // Find the closest POI
      const closestElement = elements.reduce((closest: any, current: any) => {
        const currentDistance = calculateDistance(location, { lat: current.lat, lng: current.lon });
        const closestDistance = calculateDistance(location, { lat: closest.lat, lng: closest.lon });
        return currentDistance < closestDistance ? current : closest;
      });

      // Get opening hours for the POI
      const openingHours = await this.getOpeningHoursForPOI(closestElement);
      
      // Calculate estimated arrival time
      const estimatedArrivalTime = this.calculateArrivalTime(distanceFromStart);
      const isOpen = this.checkIfOpen(openingHours, estimatedArrivalTime);

      return {
        id: closestElement.id?.toString() || `mock_${Date.now()}`,
        name: closestElement.tags?.name || this.getDefaultPOIName(poiType),
        type: poiType,
        location: { lat: closestElement.lat, lng: closestElement.lon },
        openingHours,
        distanceFromStart,
        estimatedArrivalTime,
        isOpen,
        contact: this.extractContactInfo(closestElement.tags)
      };

    } catch (error) {
      console.warn('Failed to find POI via Overpass API, using mock data:', error);
      return this.createMockPOI(location, poiType, distanceFromStart, customName);
    }
  }

  private buildOverpassQuery(location: LatLng, poiType: POIPreference['type']): string {
    const radius = 2000; // 2km search radius
    const bbox = `${location.lat - 0.02},${location.lng - 0.02},${location.lat + 0.02},${location.lng + 0.02}`;
    
    const amenityMap: Record<POIPreference['type'], string> = {
      'cafe': 'cafe',
      'restaurant': 'restaurant',
      'bakery': 'bakery',
      'bike_shop': 'bicycle',
      'viewpoint': 'viewpoint'
    };

    const amenity = amenityMap[poiType] || 'cafe';
    
    return `[out:json][timeout:25];
(
  node["amenity"="${amenity}"](${bbox});
  way["amenity"="${amenity}"](${bbox});
  relation["amenity"="${amenity}"](${bbox});
);
out center meta;`;
  }

  private async getOpeningHoursForPOI(element: any): Promise<OpeningHours> {
    const openingHoursString = element.tags?.opening_hours;
    
    if (openingHoursString) {
      return this.parseOpeningHours(openingHoursString);
    }

    // Try to get opening hours from Google Places API if available
    if (element.tags?.name) {
      try {
        // This would require a place search first to get place_id
        // For now, return default opening hours
        return this.getDefaultOpeningHours();
      } catch (error) {
        console.warn('Failed to get opening hours from Google Places:', error);
      }
    }

    return this.getDefaultOpeningHours();
  }

  private parseOpeningHours(openingHoursString: string): OpeningHours {
    // Simple parser for common opening hours formats
    // This is a basic implementation - a full parser would be more complex
    
    if (openingHoursString === '24/7') {
      return { isOpen24Hours: true };
    }

    if (openingHoursString.toLowerCase().includes('closed')) {
      return { isClosed: true };
    }

    // Default parsing for "Mo-Fr 08:00-18:00" format
    const dayRangeRegex = /([A-Za-z]{2})-([A-Za-z]{2})\s+(\d{2}:\d{2})-(\d{2}:\d{2})/;
    const match = openingHoursString.match(dayRangeRegex);
    
    if (match) {
      const [, startDay, endDay, openTime, closeTime] = match;
      const dayMap: Record<string, keyof OpeningHours> = {
        'Mo': 'monday', 'Tu': 'tuesday', 'We': 'wednesday', 
        'Th': 'thursday', 'Fr': 'friday', 'Sa': 'saturday', 'Su': 'sunday'
      };

      const openingHours: OpeningHours = {};
      const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      const startIndex = days.indexOf(startDay);
      const endIndex = days.indexOf(endDay);

      if (startIndex !== -1 && endIndex !== -1) {
        for (let i = startIndex; i <= endIndex; i++) {
          const dayKey = dayMap[days[i]];
          if (dayKey && dayKey !== 'isOpen24Hours' && dayKey !== 'isClosed') {
            (openingHours as any)[dayKey] = { open: openTime, close: closeTime };
          }
        }
      }

      return openingHours;
    }

    return this.getDefaultOpeningHours();
  }

  private getDefaultOpeningHours(): OpeningHours {
    const defaultHours = { open: '08:00', close: '18:00' };
    
    return {
      monday: defaultHours,
      tuesday: defaultHours,
      wednesday: defaultHours,
      thursday: defaultHours,
      friday: defaultHours,
      saturday: { open: '09:00', close: '17:00' },
      sunday: { open: '10:00', close: '16:00' }
    };
  }

  private calculateArrivalTime(distanceFromStartKm: number): Date {
    const averageSpeedKmh = 20; // Assume 20 km/h average cycling speed
    const hoursToReach = distanceFromStartKm / averageSpeedKmh;
    const millisecondsToReach = hoursToReach * 60 * 60 * 1000;
    
    // Assume ride starts at current time
    return new Date(Date.now() + millisecondsToReach);
  }

  private checkIfOpen(openingHours: OpeningHours, arrivalTime: Date): boolean {
    if (openingHours.isOpen24Hours) return true;
    if (openingHours.isClosed) return false;

    const dayNames: (keyof OpeningHours)[] = [
      'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
    ];
    
    const dayOfWeek = arrivalTime.getDay();
    const dayName = dayNames[dayOfWeek];
    const dayHours = openingHours[dayName];

    if (!dayHours || typeof dayHours === 'boolean') return false;

    const arrivalTimeString = arrivalTime.toTimeString().slice(0, 5); // HH:MM format
    
    return arrivalTimeString >= dayHours.open && arrivalTimeString <= dayHours.close;
  }

  private extractContactInfo(tags: any): ContactInfo | undefined {
    if (!tags) return undefined;

    const contact: ContactInfo = {};
    
    if (tags.phone) contact.phone = tags.phone;
    if (tags.website) contact.website = tags.website;
    if (tags['addr:full'] || tags['addr:street']) {
      contact.address = tags['addr:full'] || 
        `${tags['addr:street']} ${tags['addr:housenumber']}, ${tags['addr:city']}`.trim();
    }

    return Object.keys(contact).length > 0 ? contact : undefined;
  }

  private createMockPOI(
    location: LatLng,
    poiType: POIPreference['type'],
    distanceFromStart: number,
    customName?: string
  ): POILocation {
    const mockNames: Record<POIPreference['type'], string[]> = {
      'cafe': ['Mountain View Cafe', 'Cyclist\'s Rest', 'Peak Coffee', 'Trail Side Cafe'],
      'restaurant': ['Alpine Bistro', 'Rider\'s Table', 'Mountain Kitchen', 'Scenic Eatery'],
      'bakery': ['Fresh Bread Bakery', 'Morning Glory Bakery', 'Artisan Breads', 'Village Bakery'],
      'bike_shop': ['Cycle Pro Shop', 'Mountain Bike Center', 'Pedal Power', 'Bike Repair Hub'],
      'viewpoint': ['Scenic Overlook', 'Mountain Vista', 'Valley View', 'Panorama Point']
    };

    const names = mockNames[poiType];
    const randomName = customName || names[Math.floor(Math.random() * names.length)];
    const estimatedArrivalTime = this.calculateArrivalTime(distanceFromStart);
    const openingHours = this.getDefaultOpeningHours();

    // Add small random offset to location
    const offsetLat = (Math.random() - 0.5) * 0.01;
    const offsetLng = (Math.random() - 0.5) * 0.01;

    return {
      id: `mock_${poiType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: randomName,
      type: poiType,
      location: {
        lat: location.lat + offsetLat,
        lng: location.lng + offsetLng
      },
      openingHours,
      distanceFromStart,
      estimatedArrivalTime,
      isOpen: this.checkIfOpen(openingHours, estimatedArrivalTime),
      contact: {
        phone: '+41 XX XXX XX XX',
        address: 'Mock Address, Switzerland'
      }
    };
  }

  private getDefaultPOIName(poiType: POIPreference['type']): string {
    const defaultNames: Record<POIPreference['type'], string> = {
      'cafe': 'Local Cafe',
      'restaurant': 'Local Restaurant',
      'bakery': 'Local Bakery',
      'bike_shop': 'Bike Shop',
      'viewpoint': 'Scenic Viewpoint'
    };

    return defaultNames[poiType];
  }

  private calculateRouteDistance(routePath: LatLng[]): number {
    let totalDistance = 0;
    for (let i = 1; i < routePath.length; i++) {
      totalDistance += calculateDistance(routePath[i - 1], routePath[i]);
    }
    return totalDistance;
  }

  private getPointAtDistance(routePath: LatLng[], targetDistance: number): LatLng | null {
    let accumulatedDistance = 0;
    
    for (let i = 1; i < routePath.length; i++) {
      const segmentDistance = calculateDistance(routePath[i - 1], routePath[i]);
      
      if (accumulatedDistance + segmentDistance >= targetDistance) {
        // Interpolate between the two points
        const remainingDistance = targetDistance - accumulatedDistance;
        const ratio = remainingDistance / segmentDistance;
        
        const lat = routePath[i - 1].lat + (routePath[i].lat - routePath[i - 1].lat) * ratio;
        const lng = routePath[i - 1].lng + (routePath[i].lng - routePath[i - 1].lng) * ratio;
        
        return { lat, lng };
      }
      
      accumulatedDistance += segmentDistance;
    }
    
    return null;
  }

  async checkOpeningHours(poi: POILocation, arrivalTime: Date): Promise<boolean> {
    return this.checkIfOpen(poi.openingHours, arrivalTime);
  }

  async filterAvailablePOIs(pois: POILocation[], arrivalTimes: Date[]): Promise<POILocation[]> {
    const availablePOIs: POILocation[] = [];
    
    for (let i = 0; i < pois.length && i < arrivalTimes.length; i++) {
      const poi = pois[i];
      const arrivalTime = arrivalTimes[i];
      
      if (await this.checkOpeningHours(poi, arrivalTime)) {
        availablePOIs.push({
          ...poi,
          estimatedArrivalTime: arrivalTime,
          isOpen: true
        });
      }
    }
    
    return availablePOIs;
  }
}