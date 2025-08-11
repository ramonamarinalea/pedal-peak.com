'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { POISelectorProps, POIPreference } from './types';

const POI_TYPES = [
  { value: 'cafe', label: 'Cafe', icon: '☕', description: 'Coffee shops and cafes' },
  { value: 'restaurant', label: 'Restaurant', icon: '🍽️', description: 'Restaurants and eateries' },
  { value: 'bakery', label: 'Bakery', icon: '🥖', description: 'Bakeries and pastries' },
  { value: 'bike_shop', label: 'Bike Shop', icon: '🚴', description: 'Bike shops and repairs' },
  { value: 'viewpoint', label: 'Viewpoint', icon: '🏔️', description: 'Scenic viewpoints' },
] as const;

const POISelector: React.FC<POISelectorProps> = ({
  selectedPOIs,
  onPOIChange,
  className
}) => {
  const addPOI = (type: POIPreference['type']) => {
    const newPOI: POIPreference = {
      type,
      distanceKm: 25, // Default distance
      name: ''
    };
    
    onPOIChange([...selectedPOIs, newPOI]);
  };

  const removePOI = (index: number) => {
    onPOIChange(selectedPOIs.filter((_, i) => i !== index));
  };

  const updatePOI = (index: number, field: keyof POIPreference, value: any) => {
    const updated = selectedPOIs.map((poi, i) => 
      i === index ? { ...poi, [field]: value } : poi
    );
    onPOIChange(updated);
  };

  const isPOITypeSelected = (type: POIPreference['type']) => {
    return selectedPOIs.some(poi => poi.type === type);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="heading-4 mb-2">Points of Interest</h3>
        <p className="body-small text-gray-600 mb-4">
          Add stops along your route with custom intervals
        </p>
      </div>

      {/* POI Type Selection */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Available Stop Types</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {POI_TYPES.map((poiType) => (
            <button
              key={poiType.value}
              type="button"
              onClick={() => addPOI(poiType.value)}
              disabled={isPOITypeSelected(poiType.value)}
              className={cn(
                "p-3 border rounded-lg text-left transition-all hover:shadow-md",
                isPOITypeSelected(poiType.value)
                  ? "border-primary-500 bg-primary-50 cursor-not-allowed opacity-60"
                  : "border-gray-200 hover:border-primary-300 hover:bg-primary-25"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{poiType.icon}</span>
                <span className="font-medium text-sm">{poiType.label}</span>
              </div>
              <p className="text-xs text-gray-500">{poiType.description}</p>
              {isPOITypeSelected(poiType.value) && (
                <div className="mt-2">
                  <span className="badge badge-success text-xs">Added</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Selected POIs Configuration */}
      {selectedPOIs.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Your Stops ({selectedPOIs.length})
          </h4>
          <div className="space-y-3">
            {selectedPOIs.map((poi, index) => {
              const poiTypeInfo = POI_TYPES.find(type => type.value === poi.type);
              
              return (
                <div key={index} className="card border border-gray-200">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{poiTypeInfo?.icon}</span>
                        <span className="font-medium">{poiTypeInfo?.label}</span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removePOI(index)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Stop Distance
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="1"
                            max="500"
                            step="5"
                            value={poi.distanceKm}
                            onChange={(e) => updatePOI(index, 'distanceKm', parseInt(e.target.value))}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <div className="flex items-center gap-1 min-w-[60px]">
                            <input
                              type="number"
                              min="1"
                              max="500"
                              value={poi.distanceKm}
                              onChange={(e) => updatePOI(index, 'distanceKm', parseInt(e.target.value) || 20)}
                              className="w-12 px-1 py-1 text-xs border border-gray-300 rounded text-center"
                            />
                            <span className="text-xs text-gray-500">km</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Add {poiTypeInfo?.label.toLowerCase()} at {poi.distanceKm}km
                        </p>
                      </div>

                      {/* Opening Hours Consideration */}
                      <div className="bg-gray-50 p-2 rounded text-xs">
                        <div className="flex items-center gap-1 text-gray-600">
                          <span>🕒</span>
                          <span>Opening hours will be checked automatically</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedPOIs.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-gray-400 text-4xl mb-2">🗺️</div>
          <p className="text-gray-600 font-medium mb-1">No stops selected</p>
          <p className="text-gray-500 text-sm">
            Choose from the stop types above to add breaks along your route
          </p>
        </div>
      )}

      {/* POI Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <h5 className="text-sm font-medium text-blue-900 mb-1">💡 Tips</h5>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Shorter intervals (5-15km) are great for leisurely rides</li>
          <li>• Longer intervals (25-50km) work well for training rides</li>
          <li>• We'll check opening hours to ensure stops are available</li>
          <li>• Multiple stop types can be combined for variety</li>
        </ul>
      </div>
    </div>
  );
};

export default POISelector;