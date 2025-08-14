import routesJson from './swiss-routes.json';

export interface SwissRoute {
  id: string;
  name: string;
  distance: number;
  elevation: number;
  startLat: number;
  startLng: number;
  createdDate: string;
  stravaUrl: string;
  city?: string;
  region?: string;
  difficulty?: "easy" | "medium" | "hard";
  type?: "road" | "gravel" | "mtb";
}

function extractCoordinatesFromPolyline(polyline: string): { lat: number; lng: number } | null {
  if (!polyline || polyline.length < 10) return null;
  
  // Simple approach: decode first few characters to get approximate start position
  // This is a simplified version - in production you'd use a proper polyline decoder
  // For now, we'll use default coordinates for Zurich area
  return { lat: 47.37, lng: 8.54 };
}

function calculateDifficulty(distance: number, elevation: number): "easy" | "medium" | "hard" {
  const climbRate = elevation / distance; // meters per km
  
  if (distance > 200 || elevation > 3000 || climbRate > 20) return "hard";
  if (distance > 100 || elevation > 1500 || climbRate > 15) return "medium";
  return "easy";
}

function determineType(route: any): "road" | "gravel" | "mtb" {
  const nameLower = route.name?.toLowerCase() || '';
  
  if (nameLower.includes('gravel') || nameLower.includes('off-road') || nameLower.includes('trail')) {
    return "gravel";
  }
  if (nameLower.includes('mtb') || nameLower.includes('mountain')) {
    return "mtb";
  }
  return "road";
}

function extractCityFromRoute(route: any): string {
  // Try to extract city from athlete data or route name
  if (route.athlete?.city) return route.athlete.city;
  
  // Common Swiss cities to check in route names
  const cities = ['Zurich', 'Geneva', 'Basel', 'Bern', 'Lausanne', 'Lucerne', 'Lugano', 'St. Gallen', 'Winterthur'];
  const nameLower = route.name?.toLowerCase() || '';
  
  for (const city of cities) {
    if (nameLower.includes(city.toLowerCase())) {
      return city;
    }
  }
  
  return route.athlete?.city || 'Switzerland';
}

// Convert the JSON data to our SwissRoute format
export const swissRoutesData: SwissRoute[] = routesJson.map((route: any) => {
  const distanceKm = route.distance ? route.distance / 1000 : 0;
  const elevationM = route.elevation_gain || 0;
  
  // Extract coordinates from map data if available
  let startCoords = { lat: 47.37, lng: 8.54 }; // Default to Zurich
  if (route.map?.summary_polyline) {
    const coords = extractCoordinatesFromPolyline(route.map.summary_polyline);
    if (coords) startCoords = coords;
  }
  
  return {
    id: route.id_str || route.id?.toString() || Math.random().toString(36).substr(2, 9),
    name: route.name || 'Unnamed Route',
    distance: parseFloat(distanceKm.toFixed(2)),
    elevation: Math.round(elevationM),
    startLat: startCoords.lat,
    startLng: startCoords.lng,
    createdDate: route.created_at ? route.created_at.split('T')[0] : new Date().toISOString().split('T')[0],
    stravaUrl: `https://www.strava.com/routes/${route.id_str || route.id}`,
    city: extractCityFromRoute(route),
    region: route.athlete?.state || 'Switzerland',
    difficulty: calculateDifficulty(distanceKm, elevationM),
    type: determineType(route),
  };
});