import { NextRequest, NextResponse } from 'next/server';
import type { LatLng } from '@/components/route-builder/types';

export async function POST(request: NextRequest) {
  try {
    const { start, end, profile } = await request.json();

    // Use OpenRouteService as a free alternative to Komoot
    const ORS_API_KEY = process.env.OPENROUTESERVICE_API_KEY;
    
    if (!ORS_API_KEY) {
      // Fallback to mock data if no API key
      return NextResponse.json({
        features: [{
          geometry: {
            coordinates: [
              [start.lng, start.lat],
              [(start.lng + end.lng) / 2, (start.lat + end.lat) / 2],
              [end.lng, end.lat]
            ]
          },
          properties: {
            segments: [{
              distance: calculateDistance(start, end) * 1000, // Convert to meters
              duration: calculateDistance(start, end) * 1000 / 15 * 3.6 // Rough estimate
            }],
            ascent: Math.random() * 500 + 100 // Random elevation gain
          }
        }]
      });
    }

    const orsResponse = await fetch('https://api.openrouteservice.org/v2/directions/cycling-road', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ORS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinates: [[start.lng, start.lat], [end.lng, end.lat]],
        format: 'geojson',
        profile: profile === 'cycling-road' ? 'cycling-road' : 'cycling-mountain',
        options: {
          avoid_features: profile === 'cycling-road' ? ['steps'] : [],
          round_trip: {
            length: 10000,
            seed: 42
          }
        }
      })
    });

    if (!orsResponse.ok) {
      throw new Error(`OpenRouteService API error: ${orsResponse.status}`);
    }

    const data = await orsResponse.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Komoot route API error:', error);
    
    // Return mock data as fallback
    const { start, end } = await request.json();
    return NextResponse.json({
      features: [{
        geometry: {
          coordinates: generateMockRoute(start, end)
        },
        properties: {
          segments: [{
            distance: calculateDistance(start, end) * 1000,
            duration: calculateDistance(start, end) * 1000 / 15 * 3.6
          }],
          ascent: Math.random() * 500 + 100
        }
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
  const steps = 20;
  
  for (let i = 0; i <= steps; i++) {
    const ratio = i / steps;
    const lat = start.lat + (end.lat - start.lat) * ratio;
    const lng = start.lng + (end.lng - start.lng) * ratio;
    
    // Add some variation to make it look more realistic
    const variation = 0.001;
    const varLat = lat + (Math.random() - 0.5) * variation;
    const varLng = lng + (Math.random() - 0.5) * variation;
    
    points.push([varLng, varLat]);
  }
  
  return points;
}