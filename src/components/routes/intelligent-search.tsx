"use client";

import { Mountain, Route, Search } from "lucide-react";
import { useMemo, useState } from "react";

import {
  getCitiesFromRoutes,
  searchRoutes,
  SwissRoute,
} from "@/lib/swiss-routes-data";

interface IntelligentSearchProps {
  routes: SwissRoute[];
  onResults: (filteredRoutes: SwissRoute[]) => void;
}

export function IntelligentSearch({
  routes,
  onResults,
}: IntelligentSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("distance");

  const cities = useMemo(() => getCitiesFromRoutes(), []);

  // Intelligent search with multiple filters
  const filteredRoutes = useMemo(() => {
    let filtered = routes;

    // Apply intelligent text search
    if (searchTerm.trim()) {
      filtered = searchRoutes(filtered, searchTerm);
    }

    // City filter
    if (selectedCity !== "all") {
      filtered = filtered.filter((route) => route.city === selectedCity);
    }

    // Difficulty filter
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (route) => route.difficulty === selectedDifficulty,
      );
    }

    // Type filter
    if (selectedType !== "all") {
      filtered = filtered.filter((route) => route.type === selectedType);
    }

    // Sort routes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "distance":
          return a.distance - b.distance;
        case "elevation":
          return b.elevation - a.elevation;
        case "difficulty":
          const diffOrder = { easy: 1, medium: 2, hard: 3 };
          return (
            diffOrder[a.difficulty || "medium"] -
            diffOrder[b.difficulty || "medium"]
          );
        case "city":
          return (a.city || "").localeCompare(b.city || "");
        case "recent":
          return (
            new Date(b.createdDate).getTime() -
            new Date(a.createdDate).getTime()
          );
        default:
          return 0;
      }
    });

    return filtered;
  }, [
    routes,
    searchTerm,
    selectedCity,
    selectedDifficulty,
    selectedType,
    sortBy,
  ]);

  // Update parent component with filtered results
  useMemo(() => {
    onResults(filteredRoutes);
  }, [filteredRoutes, onResults]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCity("all");
    setSelectedDifficulty("all");
    setSelectedType("all");
    setSortBy("distance");
  };

  return (
    <div className="space-y-4">
      {/* Intelligent Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search routes... Try 'gravel in Zurich', 'under 200km', 'hard climbs', or just a city name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 text-base transition-colors focus:border-black focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Suggestions */}
      {searchTerm === "" && (
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="text-gray-500">Try searching for:</span>
          {[
            "gravel routes",
            "Zurich area",
            "under 100km",
            "hard climbing",
            "Bern region",
            "over 200km",
          ].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setSearchTerm(suggestion)}
              className="rounded bg-gray-100 px-2 py-1 text-gray-700 transition-colors hover:bg-gray-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Filters */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {/* City Filter */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 transition-colors focus:border-black focus:outline-none"
        >
          <option value="all">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              📍 {city}
            </option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 transition-colors focus:border-black focus:outline-none"
        >
          <option value="all">All Levels</option>
          <option value="easy">🟢 Easy</option>
          <option value="medium">🟡 Medium</option>
          <option value="hard">🔴 Hard</option>
        </select>

        {/* Type Filter */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 transition-colors focus:border-black focus:outline-none"
        >
          <option value="all">🚴‍♀️ All Types</option>
          <option value="road">🛣️ Road</option>
          <option value="gravel">🛤️ Gravel</option>
          <option value="mtb">🏔️ Mountain</option>
        </select>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-gray-200 px-3 py-2 transition-colors focus:border-black focus:outline-none"
        >
          <option value="distance">📏 Sort by Distance</option>
          <option value="elevation">⛰️ Sort by Elevation</option>
          <option value="difficulty">💪 Sort by Difficulty</option>
          <option value="city">📍 Sort by City</option>
          <option value="recent">📅 Recently Added</option>
        </select>

        {/* Clear Filters Button */}
        <button
          onClick={clearAllFilters}
          className="rounded-lg border border-gray-200 px-3 py-2 transition-colors hover:bg-gray-50"
        >
          Clear All
        </button>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold">{filteredRoutes.length}</span>{" "}
          of <span className="font-semibold">{routes.length}</span> routes
          {searchTerm && ` for "${searchTerm}"`}
        </p>

        {filteredRoutes.length > 0 && (
          <div className="flex gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Route className="h-3 w-3" />
              Avg:{" "}
              {Math.round(
                filteredRoutes.reduce((sum, r) => sum + r.distance, 0) /
                  filteredRoutes.length,
              )}
              km
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="h-3 w-3" />
              Avg:{" "}
              {Math.round(
                filteredRoutes.reduce((sum, r) => sum + r.elevation, 0) /
                  filteredRoutes.length,
              )}
              m
            </span>
          </div>
        )}
      </div>

      {/* No Results */}
      {filteredRoutes.length === 0 &&
        (searchTerm ||
          selectedCity !== "all" ||
          selectedDifficulty !== "all" ||
          selectedType !== "all") && (
          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <Search className="mx-auto mb-2 h-8 w-8 text-gray-400" />
            <p className="mb-2 text-gray-600">
              No routes found matching your criteria
            </p>
            <p className="mb-4 text-sm text-gray-500">
              Try adjusting your search terms or filters, or{" "}
              <button
                onClick={clearAllFilters}
                className="font-semibold text-black hover:text-gray-600"
              >
                clear all filters
              </button>
            </p>

            {/* Search tips */}
            <div className="text-left text-xs text-gray-500">
              <p className="mb-1 font-medium">Search tips:</p>
              <ul className="space-y-1">
                <li>
                  • Use city names like &quot;Zurich&quot;, &quot;Bern&quot;,
                  &quot;Lausanne&quot;
                </li>
                <li>
                  • Try distance ranges like &quot;under 100km&quot; or
                  &quot;over 200km&quot;
                </li>
                <li>
                  • Search by difficulty: &quot;easy&quot;,
                  &quot;challenging&quot;, &quot;hard climbs&quot;
                </li>
                <li>
                  • Find route types: &quot;gravel&quot;, &quot;road&quot;,
                  &quot;mountain&quot;
                </li>
              </ul>
            </div>
          </div>
        )}
    </div>
  );
}
