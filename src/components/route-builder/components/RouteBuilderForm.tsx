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
    <div className="card">
      <div className="card-header">
        <h2 className="heading-3">Create Your Route</h2>
        <p className="body-regular text-gray-600">
          Generate an optimized cycling route based on your preferences
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="card-content space-y-6">
        {/* Location Inputs */}
        <div className="grid-2 gap-4">
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
              placeholder="Enter starting point..."
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                errors.startLocation && touched.startLocation 
                  ? "border-red-500" 
                  : "border-gray-300"
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
              placeholder="Enter destination..."
              className={cn(
                "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                errors.endLocation && touched.endLocation 
                  ? "border-red-500" 
                  : "border-gray-300"
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
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="rideType"
                value="road"
                checked={formData.rideType === 'road'}
                onChange={(e) => handleInputChange('rideType', e.target.value)}
                className="mr-2"
                disabled={isLoading}
              />
              <span className="body-regular">Road Cycling</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="rideType"
                value="gravel"
                checked={formData.rideType === 'gravel'}
                onChange={(e) => handleInputChange('rideType', e.target.value)}
                className="mr-2"
                disabled={isLoading}
              />
              <span className="body-regular">Gravel Cycling</span>
            </label>
          </div>
        </div>

        {/* Distance Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Distance Range (km)
          </label>
          <div className="grid-2 gap-4">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addPOI}
              disabled={isLoading}
            >
              Add Stop
            </Button>
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
        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Generating Route...' : 'Generate Route'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RouteBuilderForm;