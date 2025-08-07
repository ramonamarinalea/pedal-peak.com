import React from "react";

/**
 * PEDAL PEAK HERO SECTION
 * Copy this into Framer as a Code Component
 */

export default function HeroSection() {
  return (
    <section className="section-large bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container">
        <div className="grid-2 items-center gap-12">
          {/* Content Side */}
          <div className="animate-slide-in-left space-y-8">
            <div className="space-y-6">
              <h1 className="heading-1">
                Find Your Next
                <span className="block text-green-500">Adventure</span>
              </h1>
              <p className="body-large max-w-md text-gray-600">
                From chill loops to epic escapes. Join a community of cyclists
                who ride for the love of it. No egos, just good vibes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="btn btn-primary btn-large">
                <span className="mr-2">🔍</span>
                Find Rides
              </button>
              <button className="btn btn-secondary btn-large">
                <span className="mr-2">✈️</span>
                Plan Trip
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="heading-3 text-green-500">1,247</div>
                <div className="caption text-gray-500">Active Riders</div>
              </div>
              <div className="text-center">
                <div className="heading-3 text-green-500">23</div>
                <div className="caption text-gray-500">Cities</div>
              </div>
              <div className="text-center">
                <div className="heading-3 text-green-500">156</div>
                <div className="caption text-gray-500">Routes</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="animate-slide-in-right relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-green-400 to-blue-500 shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="space-y-4 text-center text-white">
                  <div className="text-6xl">🚴‍♀️</div>
                  <div className="body-large font-medium">
                    Scenic cycling adventure
                  </div>
                  <div className="body-small opacity-80">
                    Replace with actual cycling image/video
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div
              className="animate-fade-in absolute -top-4 -right-4 rounded-xl bg-white p-4 shadow-lg"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span className="body-small font-medium">Live tracking</span>
              </div>
            </div>

            <div
              className="animate-fade-in absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">⭐</span>
                <span className="body-small font-medium">4.9 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
