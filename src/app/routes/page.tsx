"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Logo } from "@/components/logo";
import { IntelligentSearch } from "@/components/routes/intelligent-search";
import { RouteCard } from "@/components/routes/route-card";
import { buttonVariants } from "@/components/ui/button";
import { SwissRoute, swissRoutesData } from "@/lib/swiss-routes-data";

const RoutesPage = () => {
  const [filteredRoutes, setFilteredRoutes] =
    useState<SwissRoute[]>(swissRoutesData);

  const handleSearchResults = useCallback((results: SwissRoute[]) => {
    setFilteredRoutes(results);
  }, []);

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
        <div className="container relative z-10 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-7xl">
            Our Routes
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Discover {swissRoutesData.length}+ curated cycling routes around
            Switzerland
          </p>
        </div>
      </section>

      {/* Intelligent Search Section */}
      <section className="sticky top-20 z-40 border-b border-gray-200 bg-white">
        <div className="container py-6">
          <IntelligentSearch
            routes={swissRoutesData}
            onResults={handleSearchResults}
          />
        </div>
      </section>

      {/* Routes Grid */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
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
