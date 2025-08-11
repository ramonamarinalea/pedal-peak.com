#!/usr/bin/env python3

import re
import json
from datetime import datetime

def get_swiss_city_from_coords(lat, lng):
    """Enhanced Swiss city mapping with more comprehensive coverage"""
    lat, lng = float(lat), float(lng)
    
    # Comprehensive Swiss city coordinate ranges
    city_regions = [
        # Major cities - precise ranges
        ((47.35, 47.39), (8.53, 8.57), "Zurich", "Zurich"),
        ((46.94, 46.96), (7.41, 7.45), "Bern", "Bern"),
        ((47.54, 47.58), (7.57, 7.61), "Basel", "Basel"),
        ((46.19, 46.22), (6.13, 6.16), "Geneva", "Geneva"),
        ((46.51, 46.53), (6.62, 6.65), "Lausanne", "Vaud"),
        ((47.03, 47.06), (8.29, 8.32), "Lucerne", "Lucerne"),
        ((47.42, 47.43), (9.37, 9.38), "St. Gallen", "St. Gallen"),
        
        # Broader regional mapping
        ((47.25, 47.45), (8.45, 8.65), "Zurich Area", "Zurich"),
        ((47.45, 47.65), (7.45, 7.65), "Basel Area", "Basel"),
        ((46.85, 47.05), (7.35, 7.55), "Bern Area", "Bern"),
        ((46.0, 46.35), (6.05, 6.25), "Geneva Area", "Geneva"),
        ((46.45, 46.65), (6.55, 6.75), "Lausanne Area", "Vaud"),
        ((46.95, 47.15), (8.25, 8.45), "Lucerne Area", "Lucerne"),
        
        # Alpine regions
        ((46.15, 46.25), (7.2, 7.4), "Sion", "Valais"),
        ((46.05, 46.15), (7.0, 7.2), "Martigny", "Valais"),
        ((46.65, 46.75), (8.0, 8.15), "Interlaken", "Bern"),
        ((46.66, 46.67), (8.58, 8.60), "Grindelwald", "Bern"),
        ((46.8, 46.9), (9.8, 9.9), "St. Moritz", "Graubünden"),
        ((46.45, 46.55), (9.8, 9.9), "Davos", "Graubünden"),
        ((46.6, 46.7), (8.5, 8.7), "Altdorf", "Uri"),
        
        # Ticino
        ((46.0, 46.2), (8.8, 9.0), "Lugano", "Ticino"),
        ((46.15, 46.2), (8.75, 8.85), "Bellinzona", "Ticino"),
        
        # Other regions
        ((47.6, 47.7), (9.0, 9.2), "Frauenfeld", "Thurgau"),
        ((47.2, 47.3), (7.5, 7.6), "Solothurn", "Solothurn"),
        ((47.4, 47.5), (8.0, 8.2), "Aarau", "Aargau"),
        ((46.9, 47.0), (6.9, 7.0), "Neuchâtel", "Neuchâtel"),
        ((46.8, 46.9), (7.1, 7.2), "Fribourg", "Fribourg"),
    ]
    
    for (lat_min, lat_max), (lng_min, lng_max), city, region in city_regions:
        if lat_min <= lat <= lat_max and lng_min <= lng <= lng_max:
            return city, region
    
    # Broad Swiss regions as fallback
    if 47.3 <= lat <= 47.8 and 8.0 <= lng <= 9.0:
        return "Eastern Switzerland", "Eastern Switzerland"
    elif 46.8 <= lat <= 47.3 and 7.0 <= lng <= 8.0:
        return "Central Switzerland", "Central Switzerland"
    elif 46.0 <= lat <= 46.8 and 6.0 <= lng <= 7.5:
        return "Western Switzerland", "Western Switzerland"
    elif 45.8 <= lat <= 46.5 and 8.5 <= lng <= 10.5:
        return "Southern Switzerland", "Ticino"
    elif 45.8 <= lat <= 47.8 and 5.9 <= lng <= 10.5:
        return "Switzerland", "Switzerland"
    
    return "Unknown", "Unknown"

def is_swiss_route(lat, lng):
    """Check if coordinates are within Switzerland"""
    lat, lng = float(lat), float(lng)
    return 45.8 <= lat <= 47.8 and 5.9 <= lng <= 10.5

def get_route_type(name):
    """Determine route type from name with more keywords"""
    name_lower = name.lower()
    gravel_keywords = ['gravel', 'grav', 'cross', 'cx', 'cyclocross', 'unpaved', 'dirt']
    mtb_keywords = ['mountain', 'mtb', 'trail', 'singletrack', 'enduro', 'downhill', 'xc']
    
    if any(word in name_lower for word in gravel_keywords):
        return "gravel"
    elif any(word in name_lower for word in mtb_keywords):
        return "mtb"
    else:
        return "road"

def get_difficulty(distance, elevation):
    """Enhanced difficulty calculation"""
    difficulty_score = (distance / 50) + (elevation / 1000)
    
    if difficulty_score > 10:
        return "hard"
    elif difficulty_score > 5:
        return "medium"
    else:
        return "easy"

def parse_all_routes(file_path):
    """Parse all routes from the complete routes file"""
    routes = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Enhanced pattern to match all route entries - more specific
    route_pattern = r'\n\s*(\d+)\.\s*⭐?\s*🌐?\s*(.+?)\n\s*Distance:\s*([\d.]+)\s*km\n\s*Elevation:\s*([\d,]+)\s*m\n\s*Start:\s*([\d.-]+),\s*([\d.-]+)\n.*?Created:\s*([\d-]+)\n\s*URL:\s*(https://www\.strava\.com/routes/(\d+))'
    
    matches = re.findall(route_pattern, content, re.MULTILINE | re.DOTALL)
    
    for match in matches:
        route_num, name, distance, elevation, lat, lng, created_date, url, route_id = match
        
        # Clean up data
        distance = float(distance)
        elevation = int(elevation.replace(',', ''))
        lat = float(lat)
        lng = float(lng)
        
        # Only include Swiss routes
        if not is_swiss_route(lat, lng):
            continue
            
        # Get city and region
        city, region = get_swiss_city_from_coords(lat, lng)
        
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
    """Generate TypeScript file with all Swiss routes"""
    
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

// Complete Swiss routes dataset with ALL Swiss routes from strava_routes/all_strava_routes_complete.txt
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
    
    # Add utility functions with enhanced search
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
  
  if (difficulty_score > 10) return "hard";
  if (difficulty_score > 5) return "medium";
  return "easy";
}

export function getRouteTypeFromName(name: string): "road" | "gravel" | "mtb" {
  const nameLowr = name.toLowerCase();
  const gravel_keywords = ["gravel", "grav", "cross", "cx", "cyclocross", "unpaved", "dirt"];
  const mtb_keywords = ["mountain", "mtb", "trail", "singletrack", "enduro", "downhill", "xc"];
  
  if (gravel_keywords.some(word => nameLowr.includes(word))) return "gravel";
  if (mtb_keywords.some(word => nameLowr.includes(word))) return "mtb";
  return "road";
}

// Enhanced intelligent search functionality
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
    
    // Search by distance range
    if (term.includes("km") || term.includes("under") || term.includes("over") || term.includes("between")) {
      const numbers = term.match(/\\d+/g);
      if (numbers) {
        const targetDistance = parseInt(numbers[0]);
        if (term.includes("under") && route.distance < targetDistance) return true;
        if (term.includes("over") && route.distance > targetDistance) return true;
        if (term.includes("km") && Math.abs(route.distance - targetDistance) < 25) return true;
        if (term.includes("between") && numbers.length >= 2) {
          const min = parseInt(numbers[0]);
          const max = parseInt(numbers[1]);
          return route.distance >= min && route.distance <= max;
        }
      }
    }
    
    // Search by elevation
    if (term.includes("climb") || term.includes("elevation") || term.includes("mountain") || term.includes("hill")) {
      return route.elevation > 2000;
    }
    if (term.includes("flat") || term.includes("easy")) {
      return route.elevation < 1000;
    }
    
    // Search by difficulty with synonyms
    if (["hard", "difficult", "challenging", "tough", "epic"].some(word => term.includes(word))) {
      return route.difficulty === "hard";
    }
    if (["easy", "beginner", "simple", "flat", "gentle"].some(word => term.includes(word))) {
      return route.difficulty === "easy";
    }
    if (["medium", "moderate", "intermediate"].some(word => term.includes(word))) {
      return route.difficulty === "medium";
    }
    
    // Search by type with synonyms
    if (["gravel", "grav", "cross", "unpaved", "dirt"].some(word => term.includes(word)) && route.type === "gravel") return true;
    if (["road", "tarmac", "asphalt", "paved"].some(word => term.includes(word)) && route.type === "road") return true;
    if (["mountain", "mtb", "trail", "singletrack"].some(word => term.includes(word)) && route.type === "mtb") return true;
    
    // Search by specific route features
    if (term.includes("loop") && route.name.toLowerCase().includes("loop")) return true;
    if (term.includes("tour") && route.name.toLowerCase().includes("tour")) return true;
    if (term.includes("classic") && route.name.toLowerCase().includes("classic")) return true;
    
    return false;
  });
}'''
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    return routes

if __name__ == "__main__":
    input_file = "/Users/ramonafurter/strava_routes/all_strava_routes_complete.txt"
    output_file = "/Users/ramonafurter/Projects/Web-Development/pedal-peak-website/src/lib/swiss-routes-data.ts"
    
    print("Parsing ALL routes file for Swiss routes...")
    routes = parse_all_routes(input_file)
    
    print(f"Found {len(routes)} Swiss routes")
    print("Generating comprehensive TypeScript file...")
    generate_typescript_file(routes, output_file)
    
    # Statistics
    difficulty_stats = {}
    type_stats = {}
    city_stats = {}
    
    for route in routes:
        difficulty_stats[route['difficulty']] = difficulty_stats.get(route['difficulty'], 0) + 1
        type_stats[route['type']] = type_stats.get(route['type'], 0) + 1
        city_stats[route['city']] = city_stats.get(route['city'], 0) + 1
    
    print(f"\n✅ COMPLETE SWISS ROUTES DATASET:")
    print(f"📊 Total Swiss routes: {len(routes)}")
    print(f"🎯 Difficulty: {difficulty_stats}")
    print(f"🚴 Types: {type_stats}")
    print(f"🏙️ Top cities: {dict(sorted(city_stats.items(), key=lambda x: x[1], reverse=True)[:15])}")
    print("\n🚀 Ready to deploy enhanced intelligent search!")