'use client';

import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import RouteBuilderForm from './components/RouteBuilderForm';
import RouteMapPreview from './components/RouteMapPreview';
import RouteMetrics from './components/RouteMetrics';
import RouteExport from './components/RouteExport';
import type { RouteParams, GeneratedRoute, RouteBuilderError } from './types';
import { RouteGenerationService } from './services/route-generation';

interface RouteBuilderProps {
  className?: string;
}

const RouteBuilder: React.FC<RouteBuilderProps> = ({ className }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRoute, setGeneratedRoute] = useState<GeneratedRoute | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'metrics' | 'export'>('preview');

  const routeGenerationService = new RouteGenerationService();

  const handleRouteGenerate = useCallback(async (params: RouteParams) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const route = await routeGenerationService.generateRoute(params);
      setGeneratedRoute(route);
      setActiveTab('preview');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate route';
      setError(errorMessage);
      console.error('Route generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const handleDownload = useCallback(() => {
    // Track download event (analytics)
    console.log('Route downloaded:', generatedRoute?.id);
  }, [generatedRoute]);

  const handleShare = useCallback(() => {
    // Track share event (analytics)
    console.log('Route shared:', generatedRoute?.id);
  }, [generatedRoute]);

  const tabs = [
    { id: 'preview' as const, label: 'Map Preview', icon: '🗺️' },
    { id: 'metrics' as const, label: 'Route Details', icon: '📊' },
    { id: 'export' as const, label: 'Download', icon: '📥' }
  ];

  return (
    <div className={cn("max-w-7xl mx-auto p-4 space-y-6", className)}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="heading-1 mb-4">Route Builder</h1>
        <p className="body-large text-gray-600 max-w-2xl mx-auto">
          Create intelligent cycling routes with automatic POI discovery, elevation analysis, 
          and GPX export. Powered by Strava, Komoot, and RideWithGPS data.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Route Form */}
        <div className="lg:col-span-1">
          <RouteBuilderForm
            onRouteGenerate={handleRouteGenerate}
            isLoading={isGenerating}
          />
          
          {/* Error Display */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <span className="text-red-600 text-lg">⚠️</span>
                <div>
                  <h4 className="font-medium text-red-900 mb-1">Route Generation Failed</h4>
                  <p className="text-sm text-red-700">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="text-xs text-red-600 hover:text-red-800 mt-2 underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Route Display */}
        <div className="lg:col-span-2">
          {/* Tab Navigation */}
          {generatedRoute && (
            <div className="mb-4">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all",
                      activeTab === tab.id
                        ? "bg-white text-primary-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    <span>{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {activeTab === 'preview' && (
              <RouteMapPreview
                route={generatedRoute}
                isLoading={isGenerating}
                className="h-full"
              />
            )}

            {activeTab === 'metrics' && generatedRoute && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <RouteMetrics route={generatedRoute} />
              </div>
            )}

            {activeTab === 'export' && generatedRoute && (
              <RouteExport
                route={generatedRoute}
                onDownload={handleDownload}
                onShare={handleShare}
              />
            )}

            {/* Empty State */}
            {!generatedRoute && !isGenerating && (
              <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="text-gray-400 text-6xl mb-4">🚴‍♂️</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Build Your Route?</h3>
                  <p className="text-gray-600 mb-4 max-w-sm">
                    Fill out the form on the left with your preferences and we'll generate 
                    an optimized cycling route for you.
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <span>🗺️</span>
                      <span>Interactive Map</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span>POI Discovery</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📥</span>
                      <span>GPX Export</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="heading-3 text-center mb-8">Powered by the Best Cycling Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="font-semibold mb-2">Strava Heatmaps</h3>
            <p className="text-sm text-gray-600">
              Routes follow popular cycling segments used by millions of cyclists worldwide
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="font-semibold mb-2">Komoot Integration</h3>
            <p className="text-sm text-gray-600">
              Surface-specific routing for road and gravel cycling with detailed terrain analysis
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-semibold mb-2">RideWithGPS Data</h3>
            <p className="text-sm text-gray-600">
              Accurate elevation profiles and route quality metrics from experienced cyclists
            </p>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">💡 Pro Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-1">For Best Results:</h4>
            <ul className="space-y-1">
              <li>• Use specific addresses or landmarks as start/end points</li>
              <li>• Set realistic distance ranges based on your fitness level</li>
              <li>• Consider weather and daylight when planning POI stops</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-1">Route Optimization:</h4>
            <ul className="space-y-1">
              <li>• Road routes prioritize paved surfaces and bike paths</li>
              <li>• Gravel routes include scenic off-road sections</li>
              <li>• POI opening hours are checked automatically</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteBuilder;