import type { RouteParams, ValidationResult, ValidationError } from '../types';

export function validateRouteParams(params: RouteParams): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate start location
  if (!params.startLocation || params.startLocation.trim().length === 0) {
    errors.push({
      field: 'startLocation',
      message: 'Start location is required',
      code: 'REQUIRED'
    });
  }

  // Validate end location
  if (!params.endLocation || params.endLocation.trim().length === 0) {
    errors.push({
      field: 'endLocation',
      message: 'End location is required',
      code: 'REQUIRED'
    });
  }

  // Validate distance range
  if (params.distance.min < 0) {
    errors.push({
      field: 'distance.min',
      message: 'Minimum distance must be positive',
      code: 'INVALID_RANGE'
    });
  }

  if (params.distance.max <= params.distance.min) {
    errors.push({
      field: 'distance.max',
      message: 'Maximum distance must be greater than minimum distance',
      code: 'INVALID_RANGE'
    });
  }

  if (params.distance.max > 500) {
    errors.push({
      field: 'distance.max',
      message: 'Maximum distance cannot exceed 500km',
      code: 'INVALID_RANGE'
    });
  }

  // Validate ride type
  if (!['road', 'gravel'].includes(params.rideType)) {
    errors.push({
      field: 'rideType',
      message: 'Ride type must be either "road" or "gravel"',
      code: 'INVALID_VALUE'
    });
  }

  // Validate elevation preference
  if (!['flat', 'moderate', 'challenging'].includes(params.elevation)) {
    errors.push({
      field: 'elevation',
      message: 'Elevation preference must be "flat", "moderate", or "challenging"',
      code: 'INVALID_VALUE'
    });
  }

  // Validate POI preferences
  params.pointsOfInterest.forEach((poi, index) => {
    if (!['bakery', 'restaurant', 'cafe', 'bike_shop', 'viewpoint'].includes(poi.type)) {
      errors.push({
        field: `pointsOfInterest[${index}].type`,
        message: 'Invalid POI type',
        code: 'INVALID_VALUE'
      });
    }

    if (poi.distanceKm <= 0 || poi.distanceKm > 500) {
      errors.push({
        field: `pointsOfInterest[${index}].distanceKm`,
        message: 'POI distance must be between 1 and 500 km',
        code: 'INVALID_RANGE'
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateLocation(location: string): boolean {
  // Basic validation - could be enhanced with geocoding
  return location.trim().length > 0;
}

export function validateCoordinates(lat: number, lng: number): boolean {
  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
}