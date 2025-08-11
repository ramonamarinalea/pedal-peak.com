"use client";

import { Mountain, Route, Search } from "lucide-react";
import { useMemo, useState } from "react";

import {
  getCitiesFromRoutes,
  searchRoutes,
  SwissRoute,
} from "@/lib/swiss-routes-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const getTypeColorBadge = (type?: string) => {
    switch (type) {
      case "road":
        return <span className="inline-block h-3 w-3 rounded-full bg-black"></span>;
      case "gravel":
        return <span className="inline-block h-3 w-3 rounded-full bg-[#8B8680]"></span>;
      case "mtb":
        return <span className="inline-block h-3 w-3 rounded-full bg-[#E5E7EB]"></span>;
      default:
        return <span className="inline-block h-3 w-3 rounded-full bg-gray-600"></span>;
    }
  };

  const getDifficultyColorBadge = (difficulty?: string) => {
    switch (difficulty) {
      case "easy":
        return <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>;
      case "medium":
        return <span className="inline-block h-3 w-3 rounded-full bg-yellow-500"></span>;
      case "hard":
        return <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>;
      default:
        return <span className="inline-block h-3 w-3 rounded-full bg-gray-400"></span>;
    }
  };

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
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger>
            <SelectValue placeholder="All Cities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                📍 {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Difficulty Filter */}
        <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
          <SelectTrigger>
            <SelectValue placeholder="All Levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              <span className="flex items-center gap-2">
                {getDifficultyColorBadge()} All Levels
              </span>
            </SelectItem>
            <SelectItem value="easy">
              <span className="flex items-center gap-2">
                {getDifficultyColorBadge("easy")} Easy
              </span>
            </SelectItem>
            <SelectItem value="medium">
              <span className="flex items-center gap-2">
                {getDifficultyColorBadge("medium")} Medium
              </span>
            </SelectItem>
            <SelectItem value="hard">
              <span className="flex items-center gap-2">
                {getDifficultyColorBadge("hard")} Hard
              </span>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Type Filter */}
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              <span className="flex items-center gap-2">
                {getTypeColorBadge()} All Types
              </span>
            </SelectItem>
            <SelectItem value="road">
              <span className="flex items-center gap-2">
                {getTypeColorBadge("road")} Road
              </span>
            </SelectItem>
            <SelectItem value="gravel">
              <span className="flex items-center gap-2">
                {getTypeColorBadge("gravel")} Gravel
              </span>
            </SelectItem>
            <SelectItem value="mtb">
              <span className="flex items-center gap-2">
                {getTypeColorBadge("mtb")} MTB
              </span>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Sort Options */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by Distance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="distance">📏 Sort by Distance</SelectItem>
            <SelectItem value="elevation">⛰️ Sort by Elevation</SelectItem>
            <SelectItem value="difficulty">💪 Sort by Difficulty</SelectItem>
            <SelectItem value="city">📍 Sort by City</SelectItem>
            <SelectItem value="recent">📅 Recently Added</SelectItem>
          </SelectContent>
        </Select>

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
