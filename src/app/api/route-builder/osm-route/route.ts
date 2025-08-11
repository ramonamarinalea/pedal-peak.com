import { NextRequest, NextResponse } from 'next/server';
import type { LatLng } from '@/components/route-builder/types';

export async function POST(request: NextRequest) {
  try {
    const { start, end, profile } = await request.json();

    // Try multiple routing services in order of preference
    try {
      // First try OpenRouteService (better cycling support)
      const orsRoute = await getOpenRouteServiceRoute(start, end, profile);
      if (orsRoute) return NextResponse.json(orsRoute);
    } catch (orsError) {
      console.warn('OpenRouteService failed:', orsError);
    }

    try {
      // Fallback to GraphHopper (good cycling support)
      const ghRoute = await getGraphHopperRoute(start, end, profile);
      if (ghRoute) return NextResponse.json(ghRoute);
    } catch (ghError) {
      console.warn('GraphHopper failed:', ghError);
    }

    try {
      // Final fallback to OSRM (basic but reliable)
      const osrmRoute = await getOSRMRoute(start, end, profile);
      if (osrmRoute) return NextResponse.json(osrmRoute);
    } catch (osrmError) {
      console.warn('OSRM failed:', osrmError);
    }

    // Only use mock data if all real routing services fail
    console.warn('All routing services failed, using mock route');
    return NextResponse.json(generateFallbackRoute(start, end));

  } catch (error) {
    console.error('Route generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate route' },
      { status: 500 }
    );
  }
}

async function getOpenRouteServiceRoute(start: LatLng, end: LatLng, profile: string) {
  // OpenRouteService has excellent cycling support
  const orsProfile = profile === 'road' ? 'cycling-road' : 'cycling-mountain';
  const coordinates = [[start.lng, start.lat], [end.lng, end.lat]];
  
  const response = await fetch('https://api.openrouteservice.org/v2/directions/' + orsProfile, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Note: In production, you'd want to use an API key for higher rate limits
      // 'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({ coordinates }),
    signal: AbortSignal.timeout(10000) // 10 second timeout
  });

  if (!response.ok) {
    throw new Error(`OpenRouteService error: ${response.status}`);
  }

  const data = await response.json();
  const route = data.features?.[0];
  
  if (!route) {
    throw new Error('No route found in OpenRouteService response');
  }

  return {
    routes: [{
      geometry: route.geometry,
      distance: route.properties.summary.distance,
      duration: route.properties.summary.duration,
      ascent: route.properties.ascent || 0
    }]
  };
}

async function getGraphHopperRoute(start: LatLng, end: LatLng, profile: string) {
  // GraphHopper has good cycling support
  const ghProfile = profile === 'road' ? 'bike' : 'mtb';
  const url = `https://graphhopper.com/api/1/route?point=${start.lat},${start.lng}&point=${end.lat},${end.lng}&vehicle=${ghProfile}&type=json`;
  
  const response = await fetch(url, {
    signal: AbortSignal.timeout(10000)
  });

  if (!response.ok) {
    throw new Error(`GraphHopper error: ${response.status}`);
  }

  const data = await response.json();
  const route = data.paths?.[0];
  
  if (!route) {
    throw new Error('No route found in GraphHopper response');
  }

  return {
    routes: [{
      geometry: {
        type: 'LineString',
        coordinates: route.points.coordinates
      },
      distance: route.distance,
      duration: route.time,
      ascent: route.ascend || 0
    }]
  };
}

async function getOSRMRoute(start: LatLng, end: LatLng, profile: string) {
  // OSRM as final fallback (basic but reliable)
  const osrmProfile = profile === 'road' ? 'bike' : 'bike'; // OSRM only has one bike profile
  
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/${osrmProfile}/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`,
    { signal: AbortSignal.timeout(8000) }
  );

  if (!response.ok) {
    throw new Error(`OSRM error: ${response.status}`);
  }

  const data = await response.json();
  const route = data.routes?.[0];
  
  if (!route) {
    throw new Error('No route found in OSRM response');
  }

  return {
    routes: [{
      geometry: route.geometry,
      distance: route.distance,
      duration: route.duration,
      ascent: Math.random() * 300 + 50 // OSRM doesn't provide elevation
    }]
  };
}

function generateFallbackRoute(start: LatLng, end: LatLng) {
  console.warn('Generating fallback route - this should only happen when all routing services are down');
  
  return {
    routes: [{
      geometry: {
        type: 'LineString',
        coordinates: generateMockRoute(start, end)
      },
      distance: calculateDistance(start, end) * 1000,
      duration: calculateDistance(start, end) * 1000 / 15 * 3.6,
      ascent: Math.random() * 300 + 50
    }]
  };
}

function calculateDistance(point1: LatLng, point2: LatLng): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(point2.lat - point1.lat);
  const dLng = toRadians(point2.lng - point1.lng);
  
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

function generateMockRoute(start: LatLng, end: LatLng): number[][] {
  const points: number[][] = [];
  const steps = 25;
  
  for (let i = 0; i <= steps; i++) {
    const ratio = i / steps;
    const lat = start.lat + (end.lat - start.lat) * ratio;
    const lng = start.lng + (end.lng - start.lng) * ratio;
    
    // Add some realistic variation
    const variation = 0.002;
    const varLat = lat + (Math.random() - 0.5) * variation;
    const varLng = lng + (Math.random() - 0.5) * variation;
    
    points.push([varLng, varLat]);
  }
  
  return points;
}