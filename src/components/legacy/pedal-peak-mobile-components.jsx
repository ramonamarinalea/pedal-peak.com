import React, { useState } from "react";

/**
 * PEDAL PEAK MOBILE-OPTIMIZED COMPONENTS
 * Copy these into Framer as Code Components for mobile layouts
 */

// Mobile Navigation with Bottom Bar
export function MobileNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: "🏠", href: "#home" },
    { id: "rides", label: "Rides", icon: "🔍", href: "#rides" },
    { id: "calendar", label: "Calendar", icon: "📅", href: "#calendar" },
    { id: "community", label: "Community", icon: "👥", href: "#community" },
    { id: "profile", label: "Profile", icon: "👤", href: "#profile" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-green-400 to-green-600">
              <span className="text-xs text-white">🚴</span>
            </div>
            <span className="text-lg font-bold">pedal-peak</span>
          </div>

          <div className="flex items-center space-x-3">
            <button className="rounded-lg bg-gray-100 p-2">
              <span className="text-lg">🔔</span>
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <span className="text-sm font-medium text-green-700">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white">
        <div className="flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 px-1 py-2 text-center transition-colors ${
                activeTab === item.id ? "text-green-500" : "text-gray-400"
              }`}
            >
              <div className="mb-1 text-xl">{item.icon}</div>
              <div className="text-xs font-medium">{item.label}</div>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}

// Mobile Hero Section (Compact)
export function MobileHero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8">
      <div className="space-y-6 text-center">
        {/* Hero Image */}
        <div className="mx-auto aspect-[3/2] max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-green-400 to-blue-500">
          <div className="flex h-full w-full items-center justify-center text-white">
            <div className="space-y-2 text-center">
              <div className="text-4xl">🚴‍♀️</div>
              <div className="font-medium">Epic rides await</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl leading-tight font-bold">
            Find Your Next
            <span className="block text-green-500">Adventure</span>
          </h1>
          <p className="mx-auto max-w-sm text-gray-600">
            No egos, just good vibes on two wheels. Join riders in your area.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button className="btn btn-primary btn-large w-full max-w-xs">
            🔍 Find Rides
          </button>
          <button className="btn btn-secondary btn-large w-full max-w-xs">
            ✈️ Plan Trip
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center space-x-8 pt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">1.2K</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Riders
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">23</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Cities
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">156</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Routes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mobile Ride Card (Stacked Layout)
export function MobileRideCard({
  title = "Marin Headlands",
  date = "Sat, Jun 22",
  time = "7:00 AM",
  distance = "45",
  difficulty = "Hard",
  rideType = "Road",
  currentRiders = 8,
  maxRiders = 15,
}) {
  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: "bg-green-100 text-green-800",
      Moderate: "bg-yellow-100 text-yellow-800",
      Hard: "bg-red-100 text-red-800",
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-100 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="mb-1 text-lg leading-tight font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {date} • {time}
            </p>
          </div>
          <div
            className={`rounded-full px-2 py-1 text-xs font-medium ${getDifficultyColor(difficulty)}`}
          >
            {difficulty}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        {/* Ride Details */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="flex items-center space-x-1">
            <span>🚴</span>
            <span>{rideType}</span>
          </span>
          <span>📏 {distance}mi</span>
          <span>⛰️ Hard</span>
        </div>

        {/* Participants */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            👥 {currentRiders}/{maxRiders} riders going
          </span>
          <div className="h-2 w-20 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-green-400"
              style={{ width: `${(currentRiders / maxRiders) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="btn btn-secondary flex-1 py-2 text-sm">
            Details
          </button>
          <button className="btn btn-primary flex-1 py-2 text-sm">Join</button>
        </div>
      </div>
    </div>
  );
}

// Mobile Upcoming Rides Section
export function MobileUpcomingRides() {
  const rides = [
    {
      title: "Marin Headlands",
      date: "Sat, Jun 22",
      time: "7:00 AM",
      distance: "45",
      difficulty: "Hard",
      rideType: "Road",
      currentRiders: 8,
      maxRiders: 15,
    },
    {
      title: "Gravel Explorer",
      date: "Sun, Jun 23",
      time: "8:30 AM",
      distance: "30",
      difficulty: "Moderate",
      rideType: "Gravel",
      currentRiders: 12,
      maxRiders: 20,
    },
    {
      title: "Evening Loop",
      date: "Wed, Jun 26",
      time: "6:00 PM",
      distance: "20",
      difficulty: "Easy",
      rideType: "Casual",
      currentRiders: 6,
      maxRiders: 15,
    },
  ];

  return (
    <section className="bg-white px-4 py-8">
      {/* Header */}
      <div className="mb-8 space-y-3 text-center">
        <h2 className="text-2xl font-bold">Upcoming Rides</h2>
        <p className="text-gray-600">Join riders in your area</p>
      </div>

      {/* Rides List */}
      <div className="mb-6 space-y-4">
        {rides.map((ride, index) => (
          <MobileRideCard key={index} {...ride} />
        ))}
      </div>

      {/* View All */}
      <div className="text-center">
        <button className="btn btn-secondary w-full max-w-xs">
          View All Rides
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
}

// Mobile Travel Destinations
export function MobileTravelDestinations() {
  const [activeTab, setActiveTab] = useState("destinations");

  const destinations = [
    {
      name: "Mallorca",
      country: "Spain",
      duration: "7 days",
      price: 1899,
      image: "🏝️",
      difficulty: "Moderate",
    },
    {
      name: "Alps",
      country: "Switzerland",
      duration: "10 days",
      price: 2499,
      image: "🏔️",
      difficulty: "Hard",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-8">
      {/* Header */}
      <div className="mb-8 space-y-4 text-center">
        <h2 className="text-2xl font-bold">Travel Destinations</h2>

        {/* Tab Switcher */}
        <div className="mx-auto max-w-xs rounded-lg border bg-white p-1 shadow-sm">
          <div className="flex">
            <button
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "destinations"
                  ? "bg-green-500 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("destinations")}
            >
              🌍 Trips
            </button>
            <button
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                activeTab === "shipping"
                  ? "bg-green-500 text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("shipping")}
            >
              📦 Ship
            </button>
          </div>
        </div>
      </div>

      {activeTab === "destinations" && (
        <div className="space-y-4">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Image */}
              <div className="flex aspect-[3/2] items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
                <div className="text-center text-white">
                  <div className="mb-2 text-4xl">{dest.image}</div>
                  <div className="text-sm opacity-80">Destination photo</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{dest.name}</h3>
                    <p className="text-sm text-gray-500">
                      {dest.country} • {dest.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">from</div>
                    <div className="font-bold text-green-600">
                      ${dest.price}
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary w-full">Learn More →</button>
              </div>
            </div>
          ))}

          <div className="pt-4 text-center">
            <button className="btn btn-secondary w-full max-w-xs">
              Explore All Destinations
            </button>
          </div>
        </div>
      )}

      {activeTab === "shipping" && (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6 space-y-4 text-center">
            <h3 className="text-xl font-semibold">Ship Your Bike</h3>
            <p className="text-gray-600">
              Safe, affordable bike shipping worldwide
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                placeholder="San Francisco, CA"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                placeholder="Palma, Mallorca"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button className="btn btn-primary w-full">Get Quote</button>
          </div>
        </div>
      )}
    </section>
  );
}

// Mobile Community Stats (Simplified)
export function MobileCommunityStats() {
  return (
    <section className="bg-white px-4 py-8">
      <div className="space-y-6 text-center">
        <h2 className="text-2xl font-bold">Our Community</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="mb-1 text-3xl">🚴</div>
            <div className="text-2xl font-bold text-green-500">1,247</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Active Riders
            </div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl">📍</div>
            <div className="text-2xl font-bold text-green-500">23</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Cities
            </div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl">🗺️</div>
            <div className="text-2xl font-bold text-green-500">156</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Routes
            </div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-3xl">⭐</div>
            <div className="text-2xl font-bold text-green-500">4.9</div>
            <div className="text-xs tracking-wide text-gray-500 uppercase">
              Rating
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 p-6">
          <h3 className="text-xl font-semibold">Join the Community</h3>
          <p className="text-gray-600">Connect with cyclists worldwide</p>
          <button className="btn btn-primary w-full max-w-xs">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}
