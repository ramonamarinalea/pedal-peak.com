"use client";

import { Filter, MapPin, Menu, Search, X } from "lucide-react";
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
  {
    id: "3375029400452300035",
    name: "Swiss Alpine Challenge",
    distance: 200,
    elevation: 3500,
    duration: "8-10 hours",
    difficulty: "hard",
    type: "road",
    location: "Swiss Alps",
    description: "Epic 200km alpine adventure through multiple mountain passes",
    highlights: ["Furka Pass", "Grimsel Pass", "Susten Pass"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300035",
  },
  {
    id: "3375029400452300036",
    name: "Century Classic",
    distance: 160,
    elevation: 1800,
    duration: "6-7 hours",
    difficulty: "medium",
    type: "road",
    location: "Zurich",
    description: "Classic century ride through rolling countryside",
    highlights: ["Rolling hills", "Vineyard views", "Lake shores"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300036",
  },
  {
    id: "3375029400452300037",
    name: "Gravel Epic 200",
    distance: 200,
    elevation: 2800,
    duration: "9-11 hours",
    difficulty: "hard",
    type: "gravel",
    location: "Graubünden",
    description: "Ultimate gravel challenge through remote mountain trails",
    highlights: ["Remote valleys", "Mountain passes", "Alpine meadows"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300037",
  },
  {
    id: "3375029400452300038",
    name: "Lake to Lake 200",
    distance: 205,
    elevation: 2200,
    duration: "8-9 hours",
    difficulty: "hard",
    type: "road",
    location: "Central Switzerland",
    description: "Scenic route connecting major Swiss lakes",
    highlights: ["Lake Zurich", "Lake Lucerne", "Lake Zug"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300038",
  },
  {
    id: "3375029400452300039",
    name: "Endurance 250",
    distance: 250,
    elevation: 4000,
    duration: "10-12 hours",
    difficulty: "hard",
    type: "road",
    location: "Eastern Switzerland",
    description: "Ultimate endurance challenge for experienced riders",
    highlights: ["Multiple climbs", "Scenic valleys", "Mountain views"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300039",
  },
  {
    id: "3375029400452300040",
    name: "Morning Loop",
    distance: 60,
    elevation: 500,
    duration: "2-3 hours",
    difficulty: "easy",
    type: "road",
    location: "Zurich",
    description: "Popular morning training loop",
    highlights: ["Quiet roads", "Coffee stop", "Lake views"],
    stravaUrl: "https://www.strava.com/routes/3375029400452300040",
  },
  // Add more routes as needed - this is a sample set
];

const RoutesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("distance");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter and sort routes
  const filteredRoutes = useMemo(() => {
    console.log('Filter state:', { searchTerm, selectedType, selectedDifficulty, sortBy });
    let filtered = routesData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (route) =>
          route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${route.distance}km`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${route.distance}`.includes(searchTerm) ||
          route.duration.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.difficulty.toLowerCase().includes(searchTerm.toLowerCase()),
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

    console.log('Filtered routes:', filtered.length);
    return filtered;
  }, [searchTerm, selectedType, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight md:gap-3 md:text-2xl"
          >
            <Logo className="h-6 w-6 text-black md:h-8 md:w-8" />
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
              className:
                "hidden bg-black text-white transition-all hover:bg-gray-800 md:inline-flex",
            })}
          >
            join strava club
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 md:hidden">
          <nav className="flex flex-col gap-4 p-6">
            <Link
              href="/routes"
              className="text-lg font-semibold text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              routes
            </Link>
            <Link
              href="/#rides"
              className="text-lg text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              rides
            </Link>
            <Link
              href="/bikebox"
              className="text-lg text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              bike box
            </Link>
            <Link
              href="/#community"
              className="text-lg text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              community
            </Link>
            <Link
              href="https://www.strava.com/clubs/pedal-peak"
              target="_blank"
              className={buttonVariants({
                className: "mt-4 bg-black text-white hover:bg-gray-800",
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              join strava club
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative mt-16 flex h-[30vh] items-center justify-center md:mt-20 md:h-[40vh]">
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
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Our Routes
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-base text-white/90 sm:text-lg md:text-xl">
            Discover {routesData.length}+ curated cycling routes around Zurich
            and beyond
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-30 border-b border-gray-200 bg-white md:top-20">
        <div className="container py-3 md:py-4">
          {/* Mobile filter layout */}
          <div className="flex flex-col gap-3 md:hidden">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search routes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm transition-colors focus:border-black focus:outline-none"
                />
              </div>
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>

            {/* Mobile filters dropdown */}
            {mobileFiltersOpen && (
              <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3">
                <select
                  value={selectedType}
                  onChange={(e) => {
                    console.log('Type filter changed:', e.target.value);
                    setSelectedType(e.target.value);
                  }}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm transition-colors focus:border-black focus:outline-none"
                >
                  <option value="all">All Types</option>
                  <option value="road">Road</option>
                  <option value="gravel">Gravel</option>
                  <option value="mtb">Mountain</option>
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm transition-colors focus:border-black focus:outline-none"
                >
                  <option value="all">All Levels</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm transition-colors focus:border-black focus:outline-none"
                >
                  <option value="distance">Sort by Distance</option>
                  <option value="elevation">Sort by Elevation</option>
                  <option value="difficulty">Sort by Difficulty</option>
                </select>
              </div>
            )}
          </div>

          {/* Desktop filter layout */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search routes by name, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 transition-colors focus:border-black focus:outline-none"
              />
            </div>

            <div className="flex gap-4">
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

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredRoutes.map((route) => (
            <div
              key={route.id}
              className="group touch-manipulation overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg"
            >
              <div className="relative h-40 overflow-hidden sm:h-48">
                <Image
                  src={`/images/${route.type === "road" ? "tarmac" : route.type === "gravel" ? "gravel" : "bikepacking"}.jpeg`}
                  alt={route.name}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute left-4 top-4">
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
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    {route.type}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="mb-2 text-lg font-bold sm:text-xl">
                  {route.name}
                </h3>
                <p className="mb-3 text-sm text-gray-600 sm:mb-4">
                  {route.description}
                </p>

                <div className="mb-3 grid grid-cols-3 gap-2 text-sm sm:mb-4 sm:gap-4">
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

                <div className="mb-3 flex items-center gap-2 sm:mb-4">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {route.location}
                  </span>
                </div>

                <div className="mb-3 flex flex-wrap gap-1 sm:mb-4 sm:gap-2">
                  {route.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-gray-100 px-2 py-0.5 text-xs sm:py-1"
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
      <section className="bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
            Featured Route
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white p-4 shadow-lg sm:p-6 md:p-8">
              <iframe
                title="Featured Strava Route"
                src="https://www.strava.com/routes/3375029400452300034/embed"
                width="100%"
                height="400"
                className="rounded md:h-[600px]"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="rounded-lg bg-black p-8 text-center text-white sm:p-10 md:p-12">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Want to suggest a route?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
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
