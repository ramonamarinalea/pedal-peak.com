#!/usr/bin/env python3

import re
import json

def get_city_from_coordinates(lat, lng):
    """Map coordinates to Swiss cities"""
    lat, lng = float(lat), float(lng)
    
    # Swiss city coordinate ranges
    city_map = [
        # Zurich region
        ((47.3, 47.4), (8.5, 8.6), "Zurich", "Zurich"),
        ((47.35, 47.45), (8.45, 8.65), "Zurich", "Zurich"),
        
        # Bern region
        ((46.9, 47.0), (7.4, 7.5), "Bern", "Bern"),
        ((46.85, 47.05), (7.35, 7.55), "Bern", "Bern"),
        
        # Basel region
        ((47.5, 47.6), (7.5, 7.6), "Basel", "Basel"),
        ((47.45, 47.65), (7.45, 7.65), "Basel", "Basel"),
        
        # Geneva region
        ((46.1, 46.3), (6.1, 6.2), "Geneva", "Geneva"),
        ((46.0, 46.35), (6.05, 6.25), "Geneva", "Geneva"),
        
        # Lausanne region
        ((46.5, 46.6), (6.6, 6.7), "Lausanne", "Vaud"),
        ((46.45, 46.65), (6.55, 6.75), "Lausanne", "Vaud"),
        
        # Lucerne region
        ((47.0, 47.1), (8.3, 8.4), "Lucerne", "Lucerne"),
        ((46.95, 47.15), (8.25, 8.45), "Lucerne", "Lucerne"),
        
        # St. Gallen region
        ((47.4, 47.5), (9.3, 9.4), "St. Gallen", "St. Gallen"),
        ((47.35, 47.55), (9.25, 9.45), "St. Gallen", "St. Gallen"),
        
        # Winterthur
        ((47.5, 47.51), (8.72, 8.73), "Winterthur", "Zurich"),
        
        # Ticino region
        ((46.0, 46.2), (8.8, 9.0), "Lugano", "Ticino"),
        ((46.15, 46.25), (8.75, 9.05), "Lugano", "Ticino"),
        
        # Valais region
        ((46.0, 46.15), (7.0, 7.2), "Martigny", "Valais"),
        ((46.1, 46.2), (7.3, 7.4), "Sion", "Valais"),
        ((46.05, 46.15), (6.9, 7.25), "Monthey", "Valais"),
        
        # Graubünden region
        ((46.8, 46.9), (9.8, 9.9), "St. Moritz", "Graubünden"),
        ((46.45, 46.55), (9.8, 9.9), "St. Moritz", "Graubünden"),
        
        # Uri region
        ((46.6, 46.7), (8.5, 8.7), "Altdorf", "Uri"),
        
        # Alpine regions
        ((46.6, 46.7), (8.0, 8.1), "Interlaken", "Bern"),
        ((46.65, 46.75), (7.95, 8.15), "Interlaken", "Bern"),
        ((46.65, 46.75), (8.0, 8.1), "Grindelwald", "Bern"),
        ((46.66, 46.67), (8.58, 8.59), "Grindelwald", "Bern"),
        
        # Thurgau region
        ((47.6, 47.7), (9.0, 9.2), "Frauenfeld", "Thurgau"),
        
        # Solothurn region
        ((47.2, 47.3), (7.5, 7.6), "Solothurn", "Solothurn"),
        
        # Aargau region
        ((47.4, 47.5), (8.0, 8.2), "Aarau", "Aargau"),
    ]
    
    for (lat_min, lat_max), (lng_min, lng_max), city, region in city_map:
        if lat_min <= lat <= lat_max and lng_min <= lng <= lng_max:
            return city, region
    
    # Default fallback for Swiss coordinates
    if 45.8 <= lat <= 47.8 and 5.9 <= lng <= 10.5:
        return "Switzerland", "Switzerland"
    
    return "Unknown", "Unknown"

def get_route_type(name):
    """Determine route type from name"""
    name_lower = name.lower()
    if any(word in name_lower for word in ['gravel', 'grav']):
        return "gravel"
    elif any(word in name_lower for word in ['mountain', 'mtb', 'trail']):
        return "mtb"
    else:
        return "road"

def get_difficulty(distance, elevation):
    """Calculate difficulty based on distance and elevation"""
    difficulty_score = (distance / 50) + (elevation / 1000)
    
    if difficulty_score > 8:
        return "hard"
    elif difficulty_score > 4:
        return "medium"
    else:
        return "easy"

def parse_routes_file(file_path):
    """Parse the routes file and extract all route data"""
    routes = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match each route
    route_pattern = r'(\d+)\.\s*⭐?\s*(.+?)\n\s*Distance:\s*([\d.]+)\s*km\n\s*Elevation:\s*([\d,]+)\s*m\n\s*Start:\s*([\d.-]+),\s*([\d.-]+)\n\s*Created:\s*([\d-]+)\n\s*URL:\s*(https://www\.strava\.com/routes/(\d+))'
    
    matches = re.findall(route_pattern, content, re.MULTILINE)
    
    for match in matches:
        route_num, name, distance, elevation, lat, lng, created_date, url, route_id = match
        
        # Clean up data
        distance = float(distance)
        elevation = int(elevation.replace(',', ''))
        lat = float(lat)
        lng = float(lng)
        
        # Get city and region
        city, region = get_city_from_coordinates(lat, lng)
        
        # Get route type and difficulty
        route_type = get_route_type(name)
        difficulty = get_difficulty(distance, elevation)
        
        route = {
            "id": route_id,
            "name": name.strip(),
            "distance": distance,
            "elevation": elevation,
            "startLat": lat,
            "startLng": lng,
            "createdDate": created_date,
            "stravaUrl": url,
            "city": city,
            "region": region,
            "difficulty": difficulty,
            "type": route_type
        }
        
        routes.append(route)
    
    return routes

def generate_typescript_file(routes, output_file):
    """Generate TypeScript file with all routes"""
    
    # Create TypeScript content
    ts_content = '''export interface SwissRoute {
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

// Complete Swiss routes dataset with all routes from strava_routes/swiss_routes_over_40km.txt
export const swissRoutesData: SwissRoute[] = [
'''
    
    # Add all routes
    for i, route in enumerate(routes):
        ts_content += f'''  {{
    id: "{route['id']}",
    name: "{route['name']}",
    distance: {route['distance']},
    elevation: {route['elevation']},
    startLat: {route['startLat']},
    startLng: {route['startLng']},
    createdDate: "{route['createdDate']}",
    stravaUrl: "{route['stravaUrl']}",
    city: "{route['city']}",
    region: "{route['region']}",
    difficulty: "{route['difficulty']}",
    type: "{route['type']}"
  }}'''
        if i < len(routes) - 1:
            ts_content += ','
        ts_content += '\n'
    
    ts_content += '''];

// Utility functions for route analysis
export function getCitiesFromRoutes(): string[] {
  const cities = swissRoutesData
    .map(route => route.city)
    .filter((city): city is string => city !== undefined);
  return [...new Set(cities)].sort();
}

export function getRegionsFromRoutes(): string[] {
  const regions = swissRoutesData
    .map(route => route.region)
    .filter((region): region is string => region !== undefined);
  return [...new Set(regions)].sort();
}

export function getDifficultyFromDistance(distance: number, elevation: number): "easy" | "medium" | "hard" {
  const difficulty_score = (distance / 50) + (elevation / 1000);
  
  if (difficulty_score > 8) return "hard";
  if (difficulty_score > 4) return "medium";
  return "easy";
}

export function getRouteTypeFromName(name: string): "road" | "gravel" | "mtb" {
  const nameLowr = name.toLowerCase();
  if (nameLowr.includes("gravel") || nameLowr.includes("grav")) return "gravel";
  if (nameLowr.includes("mountain") || nameLowr.includes("mtb") || nameLowr.includes("trail")) return "mtb";
  return "road";
}

// Intelligent search functionality
export function searchRoutes(
  routes: SwissRoute[],
  searchTerm: string
): SwissRoute[] {
  if (!searchTerm.trim()) return routes;

  const term = searchTerm.toLowerCase().trim();
  
  return routes.filter(route => {
    // Search in route name
    if (route.name.toLowerCase().includes(term)) return true;
    
    // Search in city
    if (route.city?.toLowerCase().includes(term)) return true;
    
    // Search in region
    if (route.region?.toLowerCase().includes(term)) return true;
    
    // Search by distance range (e.g., "100km", "under 200", "over 300")
    if (term.includes("km") || term.includes("under") || term.includes("over")) {
      const numbers = term.match(/\\d+/g);
      if (numbers) {
        const targetDistance = parseInt(numbers[0]);
        if (term.includes("under") && route.distance < targetDistance) return true;
        if (term.includes("over") && route.distance > targetDistance) return true;
        if (term.includes("km") && Math.abs(route.distance - targetDistance) < 50) return true;
      }
    }
    
    // Search by elevation (e.g., "high elevation", "climbing", "flat")
    if (term.includes("climb") || term.includes("elevation") || term.includes("mountain")) {
      return route.elevation > 3000;
    }
    if (term.includes("flat") || term.includes("easy")) {
      return route.elevation < 1500;
    }
    
    // Search by difficulty
    if (term.includes("hard") || term.includes("difficult") || term.includes("challenging")) {
      return route.difficulty === "hard";
    }
    if (term.includes("easy") || term.includes("beginner")) {
      return route.difficulty === "easy";
    }
    if (term.includes("medium") || term.includes("moderate")) {
      return route.difficulty === "medium";
    }
    
    // Search by type
    if (term.includes("gravel") && route.type === "gravel") return true;
    if (term.includes("road") && route.type === "road") return true;
    if (term.includes("mountain") && route.type === "mtb") return true;
    
    return false;
  });
}'''
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Generated TypeScript file with {len(routes)} routes: {output_file}")
    
    # Print statistics
    difficulty_stats = {}
    type_stats = {}
    city_stats = {}
    
    for route in routes:
        difficulty_stats[route['difficulty']] = difficulty_stats.get(route['difficulty'], 0) + 1
        type_stats[route['type']] = type_stats.get(route['type'], 0) + 1
        city_stats[route['city']] = city_stats.get(route['city'], 0) + 1
    
    print(f"\nStatistics:")
    print(f"Total routes: {len(routes)}")
    print(f"Difficulty breakdown: {difficulty_stats}")
    print(f"Type breakdown: {type_stats}")
    print(f"Top cities: {dict(sorted(city_stats.items(), key=lambda x: x[1], reverse=True)[:10])}")

if __name__ == "__main__":
    input_file = "/Users/ramonafurter/strava_routes/swiss_routes_over_40km.txt"
    output_file = "/Users/ramonafurter/Projects/Web-Development/pedal-peak-website/src/lib/swiss-routes-data.ts"
    
    print("Parsing routes file...")
    routes = parse_routes_file(input_file)
    
    print("Generating TypeScript file...")
    generate_typescript_file(routes, output_file)
    
    print("Done!")