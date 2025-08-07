"use client";

import { MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";

// Sample route data structure - in production, this would come from an API
const routesData = [
  {
    id: "3375029400452300034",
    name: "Zurich Alpine Classic",
    distance: 120,
    elevation: 2200,
    duration: "5-6 hours",
    difficulty: "hard",
    type: "road",
    location: "Zurich",
    description: "Challenging alpine route with stunning mountain views",
    highlights: ["Col passes", "Alpine lakes", "Mountain views"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300034",
  },
  {
    id: "3273618254151158950",
    name: "Lake Loop Adventure",
    distance: 85,
    elevation: 800,
    duration: "3-4 hours",
    difficulty: "medium",
    type: "gravel",
    location: "Zurich",
    description: "Scenic gravel route around local lakes",
    highlights: ["Lake views", "Forest trails", "Quiet roads"],
    stravaUrl: "https://www.strava.com/routes/3273618254151158950",
  },
  {
    id: "3374710894042626816",
    name: "City Escape Route",
    distance: 45,
    elevation: 400,
    duration: "2 hours",
    difficulty: "easy",
    type: "road",
    location: "Zurich",
    description: "Perfect morning ride to escape the city",
    highlights: ["River path", "City views", "Coffee stops"],
    stravaUrl: "https://www.strava.com/routes/3374710894042626816",
  },
  // Add more routes as needed - this is a sample set
];

const RoutesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("distance");

  // Filter and sort routes
  const filteredRoutes = useMemo(() => {
    let filtered = routesData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (route) =>
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Type filter
    if (selectedType !== "all") {
      filtered = filtered.filter((route) => route.type === selectedType);
    }

    // Difficulty filter
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (route) => route.difficulty === selectedDifficulty,
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "distance":
          return a.distance - b.distance;
        case "elevation":
          return b.elevation - a.elevation;
        case "difficulty":
          const diffOrder: Record<string, number> = {
            easy: 1,
            medium: 2,
            hard: 3,
          };
          return diffOrder[a.difficulty] - diffOrder[b.difficulty];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedType, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold tracking-tight"
          >
            <Logo className="h-8 w-8 text-black" />
            <span className="lowercase">pedal peak</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/routes"
              className="text-sm font-semibold text-black transition-colors"
            >
              routes
            </Link>
            <Link
              href="/#rides"
              className="text-sm text-gray-900 transition-colors hover:text-black"
            >
              rides
            </Link>
            <Link
              href="/bikebox"
              className="text-sm text-gray-900 transition-colors hover:text-black"
            >
              bike box
            </Link>
            <Link
              href="/#community"
              className="text-sm text-gray-900 transition-colors hover:text-black"
            >
              community
            </Link>
          </nav>
          <Link
            href="https://www.strava.com/clubs/pedal-peak"
            target="_blank"
            className={buttonVariants({
              size: "sm",
              className: "bg-black text-white transition-all hover:bg-gray-800",
            })}
          >
            join strava club
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mt-20 flex h-[40vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tarmac.jpeg"
            alt="Cycling routes"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-7xl">
            Our Routes
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Discover 380+ curated cycling routes around Zurich and beyond
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-40 border-b border-gray-200 bg-white">
        <div className="container py-4">
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative w-full flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search routes by name, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2 pr-4 pl-10 transition-colors focus:border-black focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex w-full gap-4 lg:w-auto">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="rounded-lg border border-gray-200 px-4 py-2 transition-colors focus:border-black focus:outline-none"
              >
                <option value="all">All Types</option>
                <option value="road">Road</option>
                <option value="gravel">Gravel</option>
                <option value="mtb">Mountain</option>
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="rounded-lg border border-gray-200 px-4 py-2 transition-colors focus:border-black focus:outline-none"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-gray-200 px-4 py-2 transition-colors focus:border-black focus:outline-none"
              >
                <option value="distance">Sort by Distance</option>
                <option value="elevation">Sort by Elevation</option>
                <option value="difficulty">Sort by Difficulty</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="container py-12">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-600">
            Showing {filteredRoutes.length} of {routesData.length} routes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/images/${route.type === "road" ? "tarmac" : route.type === "gravel" ? "gravel" : "bikepacking"}.jpeg`}
                  alt={route.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      route.difficulty === "easy"
                        ? "bg-green-100 text-green-800"
                        : route.difficulty === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {route.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    {route.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{route.name}</h3>
                <p className="mb-4 text-sm text-gray-600">
                  {route.description}
                </p>

                <div className="mb-4 grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{route.distance}km</div>
                    <div className="text-xs text-gray-500">Distance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{route.elevation}m</div>
                    <div className="text-xs text-gray-500">Elevation</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{route.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {route.location}
                  </span>
                </div>

                <div className="mb-4 flex gap-2">
                  {route.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-gray-100 px-2 py-1 text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <a
                  href={route.stravaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    className: "w-full bg-black text-white hover:bg-gray-800",
                  })}
                >
                  View on Strava
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="py-24 text-center">
            <p className="mb-4 text-gray-500">
              No routes found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedDifficulty("all");
              }}
              className="font-semibold text-black hover:text-gray-600"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Strava Embed Section */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight md:text-5xl">
            Featured Route
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <iframe
                title="Featured Strava Route"
                src="https://www.strava.com/routes/3375029400452300034/embed"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="rounded-lg bg-black p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Want to suggest a route?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Join our Strava club to share your favorite routes and discover new
            adventures with the community.
          </p>
          <Link
            href="https://www.strava.com/clubs/pedal-peak"
            target="_blank"
            className={buttonVariants({
              size: "lg",
              className: "bg-white text-black hover:bg-gray-100",
            })}
          >
            Join Strava Club
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Pedal Peak. Built for cyclists, by
              cyclists.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/routes"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Routes
              </Link>
              <Link
                href="/#rides"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Rides
              </Link>
              <Link
                href="/bikebox"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Bike Box
              </Link>
              <Link
                href="https://www.strava.com/clubs/pedal-peak"
                target="_blank"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Strava
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoutesPage;
