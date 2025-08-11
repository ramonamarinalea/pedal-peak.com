"use client";

import { Calendar, ExternalLink, MapPin, Mountain, Route } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { SwissRoute } from "@/lib/swiss-routes-data";

interface RouteCardProps {
  route: SwissRoute;
}

export function RouteCard({ route }: RouteCardProps) {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-gray-100 text-gray-900";
      case "medium":
        return "bg-gray-200 text-gray-900";
      case "hard":
        return "bg-black text-white";
      default:
        return "bg-gray-100 text-gray-900";
    }
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case "road":
        return "bg-black";
      case "gravel":
        return "bg-gray-800";
      case "mtb":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
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
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
      {/* Route Header with City */}
      <div className="border-b bg-gray-50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-1 text-sm text-gray-500">Starting in</div>
            <div className="text-2xl font-bold text-gray-900">
              {route.city || "Switzerland"}
            </div>
          </div>
          <div className="flex gap-2">
            {route.difficulty && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getDifficultyColor(route.difficulty)}`}
              >
                {route.difficulty}
              </span>
            )}
            {route.type && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getTypeColor(route.type)}`}
              >
                {route.type}
              </span>
            )}
          </div>
        </div>
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
