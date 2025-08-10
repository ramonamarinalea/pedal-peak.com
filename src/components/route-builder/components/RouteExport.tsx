'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { RouteExportProps } from './types';
import { GPXService } from '../services/gpx-service';
import { formatDistance, formatElevation, formatDuration } from '../utils/formatting';

const RouteExport: React.FC<RouteExportProps> = ({
  route,
  onDownload,
  onShare,
  isDownloading = false,
  className
}) => {
  const [exportFormat, setExportFormat] = useState<'gpx' | 'tcx' | 'kml'>('gpx');
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const gpxService = new GPXService();

  const handleDownload = async () => {
    try {
      if (exportFormat === 'gpx') {
        gpxService.downloadGPX(route);
      } else {
        // For now, only GPX is implemented
        // TCX and KML would be similar implementations
        console.warn(`${exportFormat.toUpperCase()} export not yet implemented`);
        gpxService.downloadGPX(route);
      }
      
      onDownload();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const gpxContent = gpxService.generateGPX(route);
        const blob = gpxService.createDownloadBlob(gpxContent);
        const file = new File([blob], gpxService.generateFilename(route), {
          type: 'application/gpx+xml'
        });

        await navigator.share({
          title: route.name,
          text: `Check out this cycling route: ${route.name}`,
          files: [file]
        });
      } catch (error) {
        console.error('Share failed:', error);
        setShowShareOptions(true);
      }
    } else {
      setShowShareOptions(true);
    }
  };

  const copyRouteLink = async () => {
    try {
      // In a real implementation, this would generate a shareable link
      const routeUrl = `${window.location.origin}/routes/${route.id}`;
      await navigator.clipboard.writeText(routeUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const exportFormats = [
    {
      value: 'gpx' as const,
      label: 'GPX',
      description: 'GPS Exchange Format - Compatible with most GPS devices and apps',
      icon: '📍',
      recommended: true
    },
    {
      value: 'tcx' as const,
      label: 'TCX',
      description: 'Training Center XML - Garmin format with training data',
      icon: '⌚',
      recommended: false
    },
    {
      value: 'kml' as const,
      label: 'KML',
      description: 'Keyhole Markup Language - Google Earth compatible',
      icon: '🌍',
      recommended: false
    }
  ];

  return (
    <div className={cn("space-y-6", className)}>
      {/* Route Summary */}
      <div className="card border border-gray-200">
        <div className="card-header">
          <h3 className="heading-4">Export Your Route</h3>
          <p className="body-small text-gray-600">
            Download your route for use with GPS devices and cycling apps
          </p>
        </div>
        
        <div className="card-content">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                {formatDistance(route.distance)}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Distance</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                {formatElevation(route.elevationGain)}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Elevation</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900">
                {formatDuration(route.estimatedTime)}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
            </div>
          </div>

          {/* Export Format Selection */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Choose Export Format</h4>
            <div className="space-y-2">
              {exportFormats.map((format) => (
                <label
                  key={format.value}
                  className={cn(
                    "flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all",
                    exportFormat === format.value
                      ? "border-primary-500 bg-primary-50"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <input
                    type="radio"
                    name="exportFormat"
                    value={format.value}
                    checked={exportFormat === format.value}
                    onChange={(e) => setExportFormat(e.target.value as typeof exportFormat)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{format.icon}</span>
                      <span className="font-medium text-sm">{format.label}</span>
                      {format.recommended && (
                        <span className="badge badge-success text-xs">Recommended</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600">{format.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div className="flex gap-3">
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              size="lg"
              className="flex-1"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Preparing Download...
                </>
              ) : (
                <>
                  📥 Download {exportFormat.toUpperCase()}
                </>
              )}
            </Button>
            
            {onShare && (
              <Button
                onClick={handleShare}
                variant="outline"
                size="lg"
              >
                📤 Share
              </Button>
            )}
          </div>

          {/* File Info */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-lg">💡</span>
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">File Information</p>
                <ul className="space-y-1 text-xs">
                  <li>• Filename: {gpxService.generateFilename(route)}</li>
                  <li>• Includes waypoints for all {route.pointsOfInterest.length} planned stops</li>
                  <li>• Compatible with Garmin, Wahoo, and most cycling computers</li>
                  <li>• Can be imported into Strava, Komoot, and other cycling apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Options Modal */}
      {showShareOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="heading-4 mb-4">Share Your Route</h3>
            
            <div className="space-y-3 mb-6">
              <button
                onClick={copyRouteLink}
                className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">🔗</span>
                <div className="flex-1 text-left">
                  <p className="font-medium text-sm">Copy Route Link</p>
                  <p className="text-xs text-gray-500">Share a link to view this route online</p>
                </div>
                {copySuccess && (
                  <span className="text-green-600 text-sm">✓ Copied!</span>
                )}
              </button>

              <button
                onClick={() => {
                  const text = `Check out this ${route.rideType} cycling route: ${route.name} - ${formatDistance(route.distance)}, ${formatElevation(route.elevationGain)} elevation gain`;
                  const url = `${window.location.origin}/routes/${route.id}`;
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                }}
                className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">🐦</span>
                <div className="flex-1 text-left">
                  <p className="font-medium text-sm">Share on Twitter</p>
                  <p className="text-xs text-gray-500">Tweet about your route</p>
                </div>
              </button>

              <button
                onClick={() => {
                  const text = `Check out this cycling route I created: ${route.name}`;
                  const url = `${window.location.origin}/routes/${route.id}`;
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
                }}
                className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">📘</span>
                <div className="flex-1 text-left">
                  <p className="font-medium text-sm">Share on Facebook</p>
                  <p className="text-xs text-gray-500">Post to your Facebook timeline</p>
                </div>
              </button>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowShareOptions(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="card border border-gray-200">
        <div className="card-header">
          <h4 className="text-sm font-medium text-gray-700">How to Use Your Downloaded Route</h4>
        </div>
        <div className="card-content">
          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <h5 className="font-medium text-gray-900 mb-1">GPS Devices (Garmin, Wahoo, etc.)</h5>
              <p>Transfer the GPX file to your device's "Courses" or "Routes" folder via USB or your device's companion app.</p>
            </div>
            
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Cycling Apps (Strava, Komoot, etc.)</h5>
              <p>Import the GPX file through the app's route creation or import feature. Most apps support GPX import.</p>
            </div>
            
            <div>
              <h5 className="font-medium text-gray-900 mb-1">Smartphone Navigation</h5>
              <p>Open the GPX file with your preferred navigation app or import it into apps like Ride with GPS or Komoot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteExport;