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

// Complete Swiss routes dataset with all routes from strava_routes/swiss_routes_over_40km.txt
export const swissRoutesData: SwissRoute[] = [
  {
    id: "3300825769620724428",
    name: "Zurich to Nice",
    distance: 683.35,
    elevation: 9724,
    startLat: 47.37575,
    startLng: 8.53922,
    createdDate: "2024-12-08",
    stravaUrl: "https://www.strava.com/routes/3300825769620724428",
    city: "Zurich",
    region: "Zurich",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3331653713884000076",
    name: "Monthey - Mare - Chiasso",
    distance: 647.47,
    elevation: 7148,
    startLat: 46.10589,
    startLng: 7.07345,
    createdDate: "2025-03-03",
    stravaUrl: "https://www.strava.com/routes/3331653713884000076",
    city: "Martigny",
    region: "Valais",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3260622741118945078",
    name: "Glacier Bike Tour",
    distance: 375.43,
    elevation: 9506,
    startLat: 46.49797,
    startLng: 9.84547,
    createdDate: "2024-08-19",
    stravaUrl: "https://www.strava.com/routes/3260622741118945078",
    city: "St. Moritz",
    region: "Graubünden",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3374716216129609472",
    name: "shorter but on target",
    distance: 309.96,
    elevation: 8771,
    startLat: 47.31045,
    startLng: 8.55276,
    createdDate: "2025-06-30",
    stravaUrl: "https://www.strava.com/routes/3374716216129609472",
    city: "Zurich",
    region: "Zurich",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3275893280956161484",
    name: "Léman gravel Challenge",
    distance: 309.11,
    elevation: 6801,
    startLat: 46.51771,
    startLng: 6.51676,
    createdDate: "2024-09-30",
    stravaUrl: "https://www.strava.com/routes/3275893280956161484",
    city: "Switzerland",
    region: "Switzerland",
    difficulty: "hard",
    type: "gravel"
  },
  {
    id: "3345663984554316650",
    name: "Meet Jur(a)maker - Edition 300k",
    distance: 307.95,
    elevation: 6627,
    startLat: 47.52962,
    startLng: 8.58366,
    createdDate: "2025-04-11",
    stravaUrl: "https://www.strava.com/routes/3345663984554316650",
    city: "Switzerland",
    region: "Switzerland",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3275892656068620748",
    name: "Tour du Mont Blanc gravel",
    distance: 293.66,
    elevation: 9173,
    startLat: 46.08209,
    startLng: 7.09454,
    createdDate: "2024-09-30",
    stravaUrl: "https://www.strava.com/routes/3275892656068620748",
    city: "Martigny",
    region: "Valais",
    difficulty: "hard",
    type: "gravel"
  },
  {
    id: "3186354322864722518",
    name: "Vertical brevet",
    distance: 274.19,
    elevation: 5964,
    startLat: 47.3677,
    startLng: 8.49506,
    createdDate: "2024-01-27",
    stravaUrl: "https://www.strava.com/routes/3186354322864722518",
    city: "Zurich",
    region: "Zurich",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3137095796615431386",
    name: "Grindelwald ✅",
    distance: 250.07,
    elevation: 4417,
    startLat: 46.66685,
    startLng: 8.58867,
    createdDate: "2023-07-09",
    stravaUrl: "https://www.strava.com/routes/3137095796615431386",
    city: "Altdorf",
    region: "Uri",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3277002541230848556",
    name: "Ey, ich kenn da diese Abkürzung",
    distance: 221.96,
    elevation: 5164,
    startLat: 47.38159,
    startLng: 8.55459,
    createdDate: "2024-10-03",
    stravaUrl: "https://www.strava.com/routes/3277002541230848556",
    city: "Zurich",
    region: "Zurich",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3267061539004306598",
    name: "Mörlialp",
    distance: 218.18,
    elevation: 2854,
    startLat: 47.38999,
    startLng: 8.53798,
    createdDate: "2024-09-06",
    stravaUrl: "https://www.strava.com/routes/3267061539004306598",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "road"
  },
  {
    id: "3132647677321886226",
    name: "Schwägalp ab Züri",
    distance: 211.69,
    elevation: 3012,
    startLat: 47.35962,
    startLng: 8.56683,
    createdDate: "2023-09-01",
    stravaUrl: "https://www.strava.com/routes/3132647677321886226",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "road"
  },
  {
    id: "3250496908781429318",
    name: "Alpenbrevet Gold",
    distance: 210.99,
    elevation: 5108,
    startLat: 46.63827,
    startLng: 8.59247,
    createdDate: "2024-07-22",
    stravaUrl: "https://www.strava.com/routes/3250496908781429318",
    city: "Altdorf",
    region: "Uri",
    difficulty: "hard",
    type: "road"
  },
  {
    id: "3100732820566650402",
    name: "Midsummer Ride: Bern, Switzerland",
    distance: 203.52,
    elevation: 3183,
    startLat: 46.94705,
    startLng: 7.4194,
    createdDate: "2023-06-05",
    stravaUrl: "https://www.strava.com/routes/3100732820566650402",
    city: "Bern",
    region: "Bern",
    difficulty: "medium",
    type: "road"
  },
  {
    id: "3260278101097863084",
    name: "Klausen from Glarus",
    distance: 202.22,
    elevation: 2740,
    startLat: 47.36377,
    startLng: 8.5466,
    createdDate: "2024-08-18",
    stravaUrl: "https://www.strava.com/routes/3260278101097863084",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "road"
  },
  {
    id: "3222610356159480946",
    name: "200km gravel",
    distance: 201.08,
    elevation: 2390,
    startLat: 46.49308,
    startLng: 7.55952,
    createdDate: "2024-05-06",
    stravaUrl: "https://www.strava.com/routes/3222610356159480946",
    city: "Switzerland",
    region: "Switzerland",
    difficulty: "medium",
    type: "gravel"
  },
  {
    id: "3096792057215366704",
    name: "PNS x CSZ Midsummer 17/06/23",
    distance: 199.82,
    elevation: 2446,
    startLat: 47.37515,
    startLng: 8.54041,
    createdDate: "2023-05-25",
    stravaUrl: "https://www.strava.com/routes/3096792057215366704",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "road"
  },
  {
    id: "3106574182454531780",
    name: "199 / 2390",
    distance: 199.34,
    elevation: 2390,
    startLat: 47.37515,
    startLng: 8.54041,
    createdDate: "2023-05-25",
    stravaUrl: "https://www.strava.com/routes/3106574182454531780",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "road"
  },
  {
    id: "3234623477874171720",
    name: "192km gravel ZRH",
    distance: 192.54,
    elevation: 2107,
    startLat: 47.38917,
    startLng: 8.53907,
    createdDate: "2024-06-08",
    stravaUrl: "https://www.strava.com/routes/3234623477874171720",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "gravel"
  },
  {
    id: "3260332537310893996",
    name: "Glaubenberg",
    distance: 188.96,
    elevation: 2245,
    startLat: 47.38917,
    startLng: 8.53907,
    createdDate: "2024-08-18",
    stravaUrl: "https://www.strava.com/routes/3260332537310893996",
    city: "Zurich",
    region: "Zurich",
    difficulty: "medium",
    type: "road"
  }
];

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
      const numbers = term.match(/\d+/g);
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
}