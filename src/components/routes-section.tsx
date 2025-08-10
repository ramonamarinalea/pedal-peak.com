"use client";

import { useState } from "react";
import { ExternalLink, Mountain, Route, TrendingUp } from "lucide-react";
import Link from "next/link";
import { stravaRoutes } from "@/lib/strava-routes";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RoutesSection() {
  const [filter, setFilter] = useState<"all" | "short" | "medium" | "long" | "epic">("all");
  const [showCount, setShowCount] = useState(12);

  const filterRoutes = () => {
    let filtered = [...stravaRoutes];
    
    switch (filter) {
      case "short":
        filtered = filtered.filter(r => r.distance < 100);
        break;
      case "medium":
        filtered = filtered.filter(r => r.distance >= 100 && r.distance < 200);
        break;
      case "long":
        filtered = filtered.filter(r => r.distance >= 200);
        break;
      default:
        break;
    }
    
    return filtered.slice(0, showCount);
  };

  const displayedRoutes = filterRoutes();
  const totalFiltered = filter === "all" 
    ? stravaRoutes.length 
    : stravaRoutes.filter(r => {
        switch (filter) {
          case "short": return r.distance < 100;
          case "medium": return r.distance >= 100 && r.distance < 200;
          case "long": return r.distance >= 200;
          default: return true;
        }
      }).length;

  const formatDistance = (distance: number) => {
    if (distance >= 1000) {
      return `${(distance / 1000).toFixed(1)}k km`;
    }
    return `${Math.round(distance)} km`;
  };

  const formatElevation = (elevation: number) => {
    if (elevation >= 10000) {
      return `${(elevation / 1000).toFixed(0)}k m`;
    }
    return `${elevation.toLocaleString()} m`;
  };

  return (
    <section id="routes" className="container py-24">
      <h2 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl">
        Curated Routes
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
        Explore our collection of {stravaRoutes.length} hand-picked cycling routes. 
        From weekend adventures to epic multi-day journeys.
      </p>

      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => { setFilter("all"); setShowCount(12); }}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all",
            filter === "all"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          All Routes
        </button>
        <button
          onClick={() => { setFilter("short"); setShowCount(12); }}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all",
            filter === "short"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Short (&lt;100km)
        </button>
        <button
          onClick={() => { setFilter("medium"); setShowCount(12); }}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all",
            filter === "medium"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Medium (100-200km)
        </button>
        <button
          onClick={() => { setFilter("long"); setShowCount(12); }}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all",
            filter === "long"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Long (200km+)
        </button>
      </div>

      {/* Routes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayedRoutes.map((route) => (
          <Link
            key={route.id}
            href={route.url}
            target="_blank"
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-400 hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black">
                {route.name}
              </h3>
              <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-black" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Route className="h-4 w-4" />
                <span className="font-medium">{formatDistance(route.distance)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mountain className="h-4 w-4" />
                <span className="font-medium">{formatElevation(route.elevation)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4" />
                <span>
                  {Math.round(route.elevation / route.distance * 10)} m/10km
                </span>
              </div>
            </div>

            {/* Route difficulty indicator */}
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded-full",
                    i < Math.min(5, Math.ceil(route.elevation / 2000))
                      ? "bg-black"
                      : "bg-gray-200"
                  )}
                />
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {showCount < totalFiltered && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowCount(prev => prev + 12)}
            className={buttonVariants({
              variant: "outline",
              className: "border-black text-black hover:bg-black hover:text-white"
            })}
          >
            Load More Routes ({totalFiltered - showCount} remaining)
          </button>
        </div>
      )}

      {/* View All Routes Link */}
      <div className="mt-12 text-center">
        <Link
          href="/routes"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          View All Routes on Dedicated Page →
        </Link>
      </div>
    </section>
  );
}