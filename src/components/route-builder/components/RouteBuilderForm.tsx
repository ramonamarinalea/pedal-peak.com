'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { RouteBuilderFormProps, RouteParams, POIPreference } from './types';
import { validateRouteParams } from '../utils/validation';

const RouteBuilderForm: React.FC<RouteBuilderFormProps> = ({
  onRouteGenerate,
  isLoading,
  initialParams
}) => {
  const [formData, setFormData] = useState<RouteParams>({
    startLocation: initialParams?.startLocation || '',
    endLocation: initialParams?.endLocation || '',
    rideType: initialParams?.rideType || 'road',
    distance: initialParams?.distance || { min: 20, max: 50 },
    elevation: initialParams?.elevation || 'moderate',
    pointsOfInterest: initialParams?.pointsOfInterest || []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (field: keyof RouteParams, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field: string) => {
    const validation = validateRouteParams(formData);
    const fieldError = validation.errors.find(error => error.field === field);
    
    if (fieldError) {
      setErrors(prev => ({ ...prev, [field]: fieldError.message }));
    } else {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateRouteParams(formData);
    
    if (!validation.isValid) {
      const errorMap: Record<string, string> = {};
      validation.errors.forEach(error => {
        errorMap[error.field] = error.message;
      });
      setErrors(errorMap);
      
      // Mark all fields as touched to show errors
      const touchedFields: Record<string, boolean> = {};
      validation.errors.forEach(error => {
        touchedFields[error.field] = true;
      });
      setTouched(touchedFields);
      
      return;
    }

    onRouteGenerate(formData);
  };

  const addPOI = () => {
    const newPOI: POIPreference = {
      type: 'cafe',
      intervalDistance: 25
    };
    
    setFormData(prev => ({
      ...prev,
      pointsOfInterest: [...prev.pointsOfInterest, newPOI]
    }));
  };

  const removePOI = (index: number) => {
    setFormData(prev => ({
      ...prev,
      pointsOfInterest: prev.pointsOfInterest.filter((_, i) => i !== index)
    }));
  };

  const updatePOI = (index: number, field: keyof POIPreference, value: any) => {
    setFormData(prev => ({
      ...prev,
      pointsOfInterest: prev.pointsOfInterest.map((poi, i) => 
        i === index ? { ...poi, [field]: value } : poi
      )
    }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">Create Your Route</h2>
        <p className="text-gray-600 mt-2">
          Generate an optimized cycling route based on your preferences
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
        {/* Location Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startLocation" className="block text-sm font-medium text-gray-700 mb-2">
              Start Location
            </label>
            <input
              id="startLocation"
              type="text"
              value={formData.startLocation}
              onChange={(e) => handleInputChange('startLocation', e.target.value)}
              onBlur={() => handleBlur('startLocation')}
              onKeyDown={handleKeyDown}
              placeholder="Enter starting point (e.g., Zurich, Switzerland)..."
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all",
                errors.startLocation && touched.startLocation 
                  ? "border-red-500" 
                  : "border-gray-300 hover:border-gray-400"
              )}
              disabled={isLoading}
            />
            {errors.startLocation && touched.startLocation && (
              <p className="text-red-500 text-sm mt-1">{errors.startLocation}</p>
            )}
          </div>

          <div>
            <label htmlFor="endLocation" className="block text-sm font-medium text-gray-700 mb-2">
              End Location
            </label>
            <input
              id="endLocation"
              type="text"
              value={formData.endLocation}
              onChange={(e) => handleInputChange('endLocation', e.target.value)}
              onBlur={() => handleBlur('endLocation')}
              onKeyDown={handleKeyDown}
              placeholder="Enter destination (e.g., Geneva, Switzerland)..."
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all",
                errors.endLocation && touched.endLocation 
                  ? "border-red-500" 
                  : "border-gray-300 hover:border-gray-400"
              )}
              disabled={isLoading}
            />
            {errors.endLocation && touched.endLocation && (
              <p className="text-red-500 text-sm mt-1">{errors.endLocation}</p>
            )}
          </div>
        </div>

        {/* Ride Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Ride Type
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => handleInputChange('rideType', 'road')}
              className={cn(
                "flex-1 px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium",
                formData.rideType === 'road'
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              )}
              disabled={isLoading}
            >
              🚴 Road Cycling
            </button>
            <button
              type="button"
              onClick={() => handleInputChange('rideType', 'gravel')}
              className={cn(
                "flex-1 px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium",
                formData.rideType === 'gravel'
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              )}
              disabled={isLoading}
            >
              🚵 Gravel Cycling
            </button>
          </div>
        </div>

        {/* Distance Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Distance Range (km)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="minDistance" className="block text-xs text-gray-500 mb-1">
                Minimum
              </label>
              <input
                id="minDistance"
                type="number"
                min="1"
                max="500"
                value={formData.distance.min}
                onChange={(e) => handleInputChange('distance', {
                  ...formData.distance,
                  min: parseInt(e.target.value) || 0
                })}
                onKeyDown={handleKeyDown}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black hover:border-gray-400 transition-all"
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="maxDistance" className="block text-xs text-gray-500 mb-1">
                Maximum
              </label>
              <input
                id="maxDistance"
                type="number"
                min="1"
                max="500"
                value={formData.distance.max}
                onChange={(e) => handleInputChange('distance', {
                  ...formData.distance,
                  max: parseInt(e.target.value) || 0
                })}
                onKeyDown={handleKeyDown}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black hover:border-gray-400 transition-all"
                disabled={isLoading}
              />
            </div>
          </div>
          {(errors['distance.min'] || errors['distance.max']) && (
            <p className="text-red-500 text-sm mt-1">
              {errors['distance.min'] || errors['distance.max']}
            </p>
          )}
        </div>

        {/* Elevation Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Elevation Profile
          </label>
          <select
            value={formData.elevation}
            onChange={(e) => handleInputChange('elevation', e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black hover:border-gray-400 transition-all cursor-pointer"
            disabled={isLoading}
          >
            <option value="flat">Flat - Minimal elevation changes</option>
            <option value="moderate">Moderate - Some hills and climbs</option>
            <option value="challenging">Challenging - Significant elevation gain</option>
          </select>
        </div>

        {/* Points of Interest */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Points of Interest
              <span className="text-xs text-gray-500 block font-normal mt-1">
                Add stops like cafes, restaurants, or viewpoints along your route
              </span>
            </label>
            <button
              type="button"
              onClick={addPOI}
              disabled={isLoading}
              className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              + Add Stop
            </button>
          </div>
          
          {formData.pointsOfInterest.length === 0 ? (
            <p className="text-gray-500 text-sm italic">
              No stops added. Click "Add Stop" to include cafes, restaurants, or other points of interest.
            </p>
          ) : (
            <div className="space-y-3">
              {formData.pointsOfInterest.map((poi, index) => (
                <div key={index} className="flex gap-3 items-end p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">
                      Type
                    </label>
                    <select
                      value={poi.type}
                      onChange={(e) => updatePOI(index, 'type', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      disabled={isLoading}
                    >
                      <option value="cafe">Cafe</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="bakery">Bakery</option>
                      <option value="bike_shop">Bike Shop</option>
                      <option value="viewpoint">Viewpoint</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">
                      Every (km)
                    </label>
                    <input
                      type="number"
                      min="5"
                      max="100"
                      value={poi.intervalDistance}
                      onChange={(e) => updatePOI(index, 'intervalDistance', parseInt(e.target.value) || 25)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removePOI(index)}
                    disabled={isLoading}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                  <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating Route...
              </span>
            ) : (
              'Generate Route 🚀'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RouteBuilderForm;