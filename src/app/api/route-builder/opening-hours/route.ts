import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { placeId } = await request.json();

    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!GOOGLE_PLACES_API_KEY) {
      // Return mock opening hours if no API key
      return NextResponse.json({
        result: {
          opening_hours: {
            periods: [
              { open: { day: 1, time: '0800' }, close: { day: 1, time: '1800' } },
              { open: { day: 2, time: '0800' }, close: { day: 2, time: '1800' } },
              { open: { day: 3, time: '0800' }, close: { day: 3, time: '1800' } },
              { open: { day: 4, time: '0800' }, close: { day: 4, time: '1800' } },
              { open: { day: 5, time: '0800' }, close: { day: 5, time: '1800' } },
              { open: { day: 6, time: '0900' }, close: { day: 6, time: '1700' } },
            ]
          }
        }
      });
    }

    const placesResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=opening_hours&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!placesResponse.ok) {
      throw new Error(`Google Places API error: ${placesResponse.status}`);
    }

    const data = await placesResponse.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Opening hours API error:', error);
    
    // Return mock opening hours as fallback
    return NextResponse.json({
      result: {
        opening_hours: {
          periods: [
            { open: { day: 1, time: '0800' }, close: { day: 1, time: '1800' } },
            { open: { day: 2, time: '0800' }, close: { day: 2, time: '1800' } },
            { open: { day: 3, time: '0800' }, close: { day: 3, time: '1800' } },
            { open: { day: 4, time: '0800' }, close: { day: 4, time: '1800' } },
            { open: { day: 5, time: '0800' }, close: { day: 5, time: '1800' } },
            { open: { day: 6, time: '0900' }, close: { day: 6, time: '1700' } },
          ]
        }
      }
    });
  }
}