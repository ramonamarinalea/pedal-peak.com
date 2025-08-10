import type { LatLng } from '../types';

// Calculate distance between two points using Haversine formula
export function calculateDistance(point1: LatLng, point2: LatLng): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(point2.lat - point1.lat);
  const dLng = toRadians(point2.lng - point1.lng);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Calculate bearing between two points
export function calculateBearing(point1: LatLng, point2: LatLng): number {
  const dLng = toRadians(point2.lng - point1.lng);
  const lat1 = toRadians(point1.lat);
  const lat2 = toRadians(point2.lat);
  
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  
  const bearing = toDegrees(Math.atan2(y, x));
  return (bearing + 360) % 360;
}

// Calculate total distance of a path
export function calculatePathDistance(path: LatLng[]): number {
  if (path.length < 2) return 0;
  
  let totalDistance = 0;
  for (let i = 1; i < path.length; i++) {
    totalDistance += calculateDistance(path[i - 1], path[i]);
  }
  
  return totalDistance;
}

// Find the center point of a set of coordinates
export function calculateCenter(points: LatLng[]): LatLng {
  if (points.length === 0) {
    return { lat: 0, lng: 0 };
  }
  
  const sum = points.reduce(
    (acc, point) => ({
      lat: acc.lat + point.lat,
      lng: acc.lng + point.lng
    }),
    { lat: 0, lng: 0 }
  );
  
  return {
    lat: sum.lat / points.length,
    lng: sum.lng / points.length
  };
}

// Calculate bounding box for a set of points
export function calculateBounds(points: LatLng[]): {
  north: number;
  south: number;
  east: number;
  west: number;
} {
  if (points.length === 0) {
    return { north: 0, south: 0, east: 0, west: 0 };
  }
  
  let north = points[0].lat;
  let south = points[0].lat;
  let east = points[0].lng;
  let west = points[0].lng;
  
  points.forEach(point => {
    north = Math.max(north, point.lat);
    south = Math.min(south, point.lat);
    east = Math.max(east, point.lng);
    west = Math.min(west, point.lng);
  });
  
  return { north, south, east, west };
}

// Helper functions
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

function toDegrees(radians: number): number {
  return radians * (180 / Math.PI);
}