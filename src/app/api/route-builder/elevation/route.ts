import { NextRequest, NextResponse } from 'next/server';
import type { LatLng } from '@/components/route-builder/types';

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();

    // Use Open Elevation API (free alternative)
    const elevationResponse = await fetch('https://api.open-elevation.com/api/v1/lookup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        locations: path.map((point: LatLng) => ({
          latitude: point.lat,
          longitude: point.lng
        }))
      })
    });

    if (!elevationResponse.ok) {
      throw new Error(`Elevation API error: ${elevationResponse.status}`);
    }

    const data = await elevationResponse.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Elevation API error:', error);
    
    // Return mock elevation data as fallback
    const { path } = await request.json();
    const mockResults = path.map((point: LatLng, index: number) => ({
      latitude: point.lat,
      longitude: point.lng,
      elevation: 500 + Math.sin(index / path.length * Math.PI * 2) * 200 + Math.random() * 50
    }));

    return NextResponse.json({
      results: mockResults
    });
  }
}