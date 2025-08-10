import { Metadata } from 'next';
import RouteBuilder from '@/components/route-builder/RouteBuilder';

export const metadata: Metadata = {
  title: 'Route Builder - Pedal Peak',
  description: 'Create intelligent cycling routes with automatic POI discovery, elevation analysis, and GPX export. Powered by Strava, Komoot, and RideWithGPS data.',
  keywords: [
    'cycling route builder',
    'bike route planner',
    'GPX generator',
    'cycling navigation',
    'bike route creator',
    'Strava routes',
    'Komoot integration',
    'cycling POI',
    'elevation profile',
    'gravel routes',
    'road cycling routes'
  ],
  openGraph: {
    title: 'Route Builder - Pedal Peak',
    description: 'Create intelligent cycling routes with automatic POI discovery and GPX export',
    type: 'website',
    images: [
      {
        url: '/og-route-builder.jpg', // You would add this image
        width: 1200,
        height: 630,
        alt: 'Pedal Peak Route Builder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Route Builder - Pedal Peak',
    description: 'Create intelligent cycling routes with automatic POI discovery and GPX export',
    images: ['/og-route-builder.jpg']
  }
};

export default function RouteBuilderPage() {
  return (
    <main className="min-h-screen bg-white">
      <RouteBuilder />
    </main>
  );
}