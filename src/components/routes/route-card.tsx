"use client";

import {
  Calendar,
  Car,
  ExternalLink,
  MapPin,
  Mountain,
  Route,
  TreePine,
} from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { SwissRoute } from "@/lib/swiss-routes-data";

interface RouteCardProps {
  route: SwissRoute;
}

export function RouteCard({ route }: RouteCardProps) {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "road":
        return "bg-blue-500";
      case "gravel":
        return "bg-orange-500";
      case "mtb":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRouteImageUrl = (route: SwissRoute) => {
    // For now, use type-based images while we work on Strava integration
    // TODO: Implement proper Strava route preview integration
    switch (route.type) {
      case "gravel":
        return "/images/gravel.jpeg";
      case "mtb":
        return "/images/bikepacking.jpeg";
      default:
        return "/images/tarmac.jpeg";
    }
  };

  const getTypeIcon = (type?: string) => {
    switch (type) {
      case "road":
        return <Car className="mr-1 h-3 w-3" />;
      case "gravel":
        return <Mountain className="mr-1 h-3 w-3" />;
      case "mtb":
        return <TreePine className="mr-1 h-3 w-3" />;
      default:
        return <Route className="mr-1 h-3 w-3" />;
    }
  };

  const getEstimatedDuration = (distance: number, elevation: number) => {
    // Rough estimate: 25km/h average speed + 10 minutes per 100m elevation
    const baseTime = distance / 25; // hours
    const elevationTime = (elevation / 100) * (10 / 60); // convert to hours
    const totalHours = baseTime + elevationTime;

    if (totalHours < 1.5) return "1-2 hours";
    if (totalHours < 3) return "2-3 hours";
    if (totalHours < 4.5) return "3-5 hours";
    if (totalHours < 6) return "5-6 hours";
    if (totalHours < 8) return "6-8 hours";
    return "8+ hours";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg">
      {/* Route Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getRouteImageUrl(route)}
          alt={`${route.name} - ${route.type} route`}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />

        {/* Overlays */}
        <div className="absolute left-4 top-4 flex gap-2">
          {route.difficulty && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getDifficultyColor(route.difficulty)}`}
            >
              {route.difficulty}
            </span>
          )}
        </div>

        <div className="absolute right-4 top-4">
          {route.type && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getTypeColor(route.type)} flex items-center`}
            >
              {getTypeIcon(route.type)}
              {route.type}
            </span>
          )}
        </div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Route Details */}
      <div className="p-6">
        {/* Route Name */}
        <h3 className="mb-3 text-xl font-bold leading-tight">{route.name}</h3>

        {/* Location */}
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span>{route.city}</span>
          {route.region && route.region !== route.city && (
            <span className="text-gray-400">• {route.region}</span>
          )}
        </div>

        {/* Key Stats */}
        <div className="mb-4 grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 font-semibold">
              <Route className="h-3 w-3" />
              {Math.round(route.distance)}km
            </div>
            <div className="text-xs text-gray-500">Distance</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 font-semibold">
              <Mountain className="h-3 w-3" />
              {route.elevation.toLocaleString()}m
            </div>
            <div className="text-xs text-gray-500">Elevation</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 font-semibold">
              <Calendar className="h-3 w-3" />
              {getEstimatedDuration(route.distance, route.elevation)}
            </div>
            <div className="text-xs text-gray-500">Duration</div>
          </div>
        </div>

        {/* Coordinates (for technical users) */}
        <div className="mb-4 rounded bg-gray-50 px-3 py-2 text-xs text-gray-600">
          <strong>Start:</strong> {route.startLat.toFixed(4)},{" "}
          {route.startLng.toFixed(4)}
        </div>

        {/* Creation Date */}
        <div className="mb-4 text-xs text-gray-500">
          Added: {formatDate(route.createdDate)}
        </div>

        {/* Action Button */}
        <a
          href={route.stravaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            className: "group w-full bg-black text-white hover:bg-gray-800",
          })}
        >
          <span className="flex items-center justify-center gap-2">
            View on Strava
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </div>
  );
}
