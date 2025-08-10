'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { RouteMetricsProps } from './types';
import { formatDistance, formatElevation, formatDuration, formatDifficulty } from '../utils/formatting';

const RouteMetrics: React.FC<RouteMetricsProps> = ({
  route,
  className
}) => {
  const metrics = [
    {
      label: 'Total Distance',
      value: formatDistance(route.distance),
      icon: '📏',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Elevation Gain',
      value: formatElevation(route.elevationGain),
      icon: '⛰️',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Estimated Time',
      value: formatDuration(route.estimatedTime),
      icon: '⏱️',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Difficulty',
      value: formatDifficulty(route.difficulty),
      icon: route.difficulty === 'easy' ? '🟢' : route.difficulty === 'moderate' ? '🟡' : '🔴',
      color: route.difficulty === 'easy' ? 'text-green-600' : 
             route.difficulty === 'moderate' ? 'text-yellow-600' : 'text-red-600',
      bgColor: route.difficulty === 'easy' ? 'bg-green-50' : 
               route.difficulty === 'moderate' ? 'bg-yellow-50' : 'bg-red-50'
    },
    {
      label: 'Ride Type',
      value: route.rideType === 'road' ? 'Road Cycling' : 'Gravel Cycling',
      icon: route.rideType === 'road' ? '🚴‍♂️' : '🚵‍♂️',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    },
    {
      label: 'Points of Interest',
      value: `${route.pointsOfInterest.length} stops`,
      icon: '📍',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const averageGradient = route.distance > 0 ? (route.elevationGain / (route.distance * 1000)) * 100 : 0;
  const averageSpeed = route.estimatedTime > 0 ? (route.distance / (route.estimatedTime / 60)) : 0;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Main Metrics Grid */}
      <div>
        <h3 className="heading-4 mb-4">Route Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="card border border-gray-200">
              <div className="card-content p-4">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg", metric.bgColor)}>
                    <span className="text-lg">{metric.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      {metric.label}
                    </p>
                    <p className={cn("text-lg font-semibold", metric.color)}>
                      {metric.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Surface Breakdown */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Surface Breakdown</h4>
        <div className="card border border-gray-200">
          <div className="card-content p-4">
            <div className="space-y-3">
              {Object.entries(route.surfaceTypes).map(([surface, percentage]) => (
                percentage > 0 && (
                  <div key={surface} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: surface === 'paved' ? '#22c55e' : 
                                         surface === 'gravel' ? '#f97316' : 
                                         surface === 'trail' ? '#8b5cf6' : '#6b7280'
                        }}
                      />
                      <span className="text-sm capitalize font-medium">{surface}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${percentage}%`,
                            backgroundColor: surface === 'paved' ? '#22c55e' : 
                                           surface === 'gravel' ? '#f97316' : 
                                           surface === 'trail' ? '#8b5cf6' : '#6b7280'
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600 min-w-[40px]">
                        {percentage}%
                      </span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Additional Statistics</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card border border-gray-200">
            <div className="card-content p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Average Gradient
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {averageGradient.toFixed(1)}%
                  </p>
                </div>
                <div className="text-2xl">📈</div>
              </div>
            </div>
          </div>

          <div className="card border border-gray-200">
            <div className="card-content p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Average Speed
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {averageSpeed.toFixed(1)} km/h
                  </p>
                </div>
                <div className="text-2xl">⚡</div>
              </div>
            </div>
          </div>

          <div className="card border border-gray-200">
            <div className="card-content p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Elevation Loss
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {formatElevation(route.elevationLoss)}
                  </p>
                </div>
                <div className="text-2xl">📉</div>
              </div>
            </div>
          </div>

          <div className="card border border-gray-200">
            <div className="card-content p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Created
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {route.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <div className="text-2xl">📅</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Points of Interest Details */}
      {route.pointsOfInterest.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Planned Stops ({route.pointsOfInterest.length})
          </h4>
          <div className="space-y-2">
            {route.pointsOfInterest.map((poi, index) => (
              <div key={poi.id} className="card border border-gray-200">
                <div className="card-content p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{poi.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{poi.type.replace('_', ' ')}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {formatDistance(poi.distanceFromStart)}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          poi.isOpen ? "bg-green-500" : "bg-red-500"
                        )} />
                        <span className="text-xs text-gray-500">
                          {poi.estimatedArrivalTime.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Route Quality Indicators */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Route Quality</h4>
        <div className="card border border-gray-200">
          <div className="card-content p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Cycling Suitability</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: '85%' }}
                    />
                  </div>
                  <span className="text-sm font-medium text-green-600">85%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Scenic Value</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: '70%' }}
                    />
                  </div>
                  <span className="text-sm font-medium text-blue-600">70%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Safety Rating</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-yellow-500 rounded-full"
                      style={{ width: '75%' }}
                    />
                  </div>
                  <span className="text-sm font-medium text-yellow-600">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMetrics;