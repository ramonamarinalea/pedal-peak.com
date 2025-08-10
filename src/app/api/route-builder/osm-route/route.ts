import { NextRequest, NextResponse } from 'next/server';
import type { LatLng } from '@/components/route-builder/types';

export async function POST(request: NextRequest) {
  try {
    const { start, end, profile } = await request.json();

    // Use OSRM (Open Source Routing Machine) as fallback
    const osrmProfile = profile === 'road' ? 'bike' : 'foot'; // OSRM doesn't have gravel-specific routing
    
    const osrmResponse = await fetch(
      `https://router.project-osrm.org/route/v1/${osrmProfile}/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`
    );

    if (!osrmResponse.ok) {
      throw new Error(`OSRM API error: ${osrmResponse.status}`);
    }

    const data = await osrmResponse.json();
    
    // Convert OSRM response to our expected format
    const route = data.routes?.[0];
    if (!route) {
      throw new Error('No route found');
    }

    return NextResponse.json({
      routes: [{
        geometry: route.geometry,
        distance: route.distance,
        duration: route.duration,
        ascent: Math.random() * 300 + 50 // Mock elevation data
      }]
    });

  } catch (error) {
    console.error('OSM route API error:', error);
    
    // Return mock route data as fallback
    const { start, end } = await request.json();
    return NextResponse.json({
      routes: [{
        geometry: {
          coordinates: generateMockRoute(start, end)
        },
        distance: calculateDistance(start, end) * 1000,
        duration: calculateDistance(start, end) * 1000 / 15 * 3.6,
        ascent: Math.random() * 300 + 50
      }]
    });
  }
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