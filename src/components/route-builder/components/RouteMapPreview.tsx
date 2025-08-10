'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import type { RouteMapPreviewProps } from './types';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

const RouteMapPreview: React.FC<RouteMapPreviewProps> = ({
  route,
  isLoading,
  onRouteModify,
  className
}) => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    // Fix for default markers in react-leaflet
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  if (isLoading) {
    return (
      <div className={cn("relative h-96 bg-gray-100 rounded-lg overflow-hidden", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Generating your route...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!route) {
    return (
      <div className={cn("relative h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">🗺️</div>
            <p className="text-gray-600 font-medium mb-2">No route generated yet</p>
            <p className="text-gray-500 text-sm">Fill out the form and click "Generate Route" to see your route preview</p>
          </div>
        </div>
      </div>
    );
  }

  // Calculate map bounds from route path
  const bounds = route.path.length > 0 ? [
    [
      Math.min(...route.path.map(p => p.lat)),
      Math.min(...route.path.map(p => p.lng))
    ],
    [
      Math.max(...route.path.map(p => p.lat)),
      Math.max(...route.path.map(p => p.lng))
    ]
  ] as [[number, number], [number, number]] : undefined;

  const center: [number, number] = route.path.length > 0 ? [
    route.path.reduce((sum, p) => sum + p.lat, 0) / route.path.length,
    route.path.reduce((sum, p) => sum + p.lng, 0) / route.path.length
  ] : [47.3769, 8.5417]; // Default to Zurich

  // Color coding for different surface types
  const getRouteColor = (surfaceType: string) => {
    switch (surfaceType) {
      case 'paved': return '#22c55e'; // Primary green
      case 'gravel': return '#f97316'; // Orange
      case 'trail': return '#8b5cf6'; // Purple
      default: return '#6b7280'; // Gray
    }
  };

  // Create custom POI icons
  const createPOIIcon = (poiType: string) => {
    const iconMap: Record<string, string> = {
      'cafe': '☕',
      'restaurant': '🍽️',
      'bakery': '🥖',
      'bike_shop': '🚴',
      'viewpoint': '🏔️'
    };

    return iconMap[poiType] || '📍';
  };

  return (
    <div className={cn("relative rounded-lg overflow-hidden shadow-lg", className)}>
      <div className="h-96 w-full">
        <MapContainer
          ref={mapRef}
          center={center}
          zoom={bounds ? undefined : 10}
          bounds={bounds}
          boundsOptions={{ padding: [20, 20] }}
          className="h-full w-full"
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Route path */}
          {route.path.length > 1 && (
            <Polyline
              positions={route.path.map(p => [p.lat, p.lng])}
              color={getRouteColor('mixed')}
              weight={4}
              opacity={0.8}
            />
          )}

          {/* Start marker */}
          {route.path.length > 0 && (
            <Marker position={[route.path[0].lat, route.path[0].lng]}>
              <Popup>
                <div className="text-center">
                  <div className="text-lg mb-1">🚀</div>
                  <strong>Start</strong>
                  <br />
                  <small>Begin your cycling adventure here</small>
                </div>
              </Popup>
            </Marker>
          )}

          {/* End marker */}
          {route.path.length > 1 && (
            <Marker position={[route.path[route.path.length - 1].lat, route.path[route.path.length - 1].lng]}>
              <Popup>
                <div className="text-center">
                  <div className="text-lg mb-1">🏁</div>
                  <strong>Finish</strong>
                  <br />
                  <small>Your destination</small>
                </div>
              </Popup>
            </Marker>
          )}

          {/* POI markers */}
          {route.pointsOfInterest.map((poi) => (
            <Marker
              key={poi.id}
              position={[poi.location.lat, poi.location.lng]}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{createPOIIcon(poi.type)}</span>
                    <strong className="text-sm">{poi.name}</strong>
                  </div>
                  
                  <div className="space-y-1 text-xs text-gray-600">
                    <div>
                      <strong>Distance:</strong> {poi.distanceFromStart.toFixed(1)}km from start
                    </div>
                    <div>
                      <strong>Arrival:</strong> {poi.estimatedArrivalTime.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <strong>Status:</strong>
                      <span className={cn(
                        "px-1.5 py-0.5 rounded text-xs font-medium",
                        poi.isOpen 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      )}>
                        {poi.isOpen ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    {poi.contact?.phone && (
                      <div>
                        <strong>Phone:</strong> {poi.contact.phone}
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Map overlay with route info */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3 max-w-xs">
        <h3 className="font-semibold text-sm mb-2">{route.name}</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-gray-500">Distance:</span>
            <br />
            <span className="font-medium">{route.distance.toFixed(1)}km</span>
          </div>
          <div>
            <span className="text-gray-500">Time:</span>
            <br />
            <span className="font-medium">
              {Math.floor(route.estimatedTime / 60)}h {route.estimatedTime % 60}m
            </span>
          </div>
          <div>
            <span className="text-gray-500">Elevation:</span>
            <br />
            <span className="font-medium">+{route.elevationGain}m</span>
          </div>
          <div>
            <span className="text-gray-500">Difficulty:</span>
            <br />
            <span className={cn(
              "font-medium capitalize",
              route.difficulty === 'easy' && "text-green-600",
              route.difficulty === 'moderate' && "text-yellow-600",
              route.difficulty === 'hard' && "text-red-600"
            )}>
              {route.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Surface type legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
        <h4 className="font-semibold text-xs mb-2">Surface Types</h4>
        <div className="space-y-1">
          {Object.entries(route.surfaceTypes).map(([surface, percentage]) => (
            percentage > 0 && (
              <div key={surface} className="flex items-center gap-2 text-xs">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getRouteColor(surface) }}
                />
                <span className="capitalize">{surface}: {percentage}%</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* POI count indicator */}
      {route.pointsOfInterest.length > 0 && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
          <div className="flex items-center gap-1 text-xs">
            <span>📍</span>
            <span className="font-medium">{route.pointsOfInterest.length} stops</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteMapPreview;