"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import { ErrorBoundary } from "@/components/error-boundary";
import { MobileNavigation } from "@/components/mobile-navigation";
import { IntelligentSearch } from "@/components/routes/intelligent-search";
import { RouteCard } from "@/components/routes/route-card";
import { buttonVariants } from "@/components/ui/button";
import { SwissRoute, swissRoutesData } from "@/lib/swiss-routes-data";
import { safeLoadRoutes } from "@/lib/validate-routes";

const RoutesPage = () => {
  // Validate routes data on load with error handling
  const validatedRoutes = useMemo(() => {
    try {
      return safeLoadRoutes(swissRoutesData);
    } catch (error) {
      console.error("Error loading routes data:", error);
      return [];
    }
  }, []);

  const [filteredRoutes, setFilteredRoutes] =
    useState<SwissRoute[]>(validatedRoutes);

  const handleSearchResults = useCallback((results: SwissRoute[]) => {
    try {
      setFilteredRoutes(results || []);
    } catch (error) {
      console.error("Error updating filtered routes:", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MobileNavigation />

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
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Our Routes
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-lg text-white/90 sm:text-xl">
            Discover {swissRoutesData.length}+ curated cycling routes around
            Switzerland
          </p>
        </div>
      </section>

      {/* Intelligent Search Section */}
      <section className="sticky top-20 z-40 border-b border-gray-200 bg-white">
        <div className="container py-6">
          <ErrorBoundary>
            <IntelligentSearch
              routes={validatedRoutes}
              onResults={handleSearchResults}
            />
          </ErrorBoundary>
        </div>
      </section>

      {/* Routes Grid */}
      <ErrorBoundary>
        <section className="container py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRoutes && filteredRoutes.length > 0 ? (
              filteredRoutes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-600">
                  No routes found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </ErrorBoundary>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="rounded-lg border-2 border-white bg-black p-12 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Want to suggest a route?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Join our Strava club to share your favorite routes and discover new
            adventures with the community.
          </p>
          <Link
            href="https://www.strava.com/clubs/pedal-peak"
            target="_blank"
            className={buttonVariants({
              size: "lg",
              className:
                "transform border-2 border-white bg-black font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-black",
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
            <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
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
