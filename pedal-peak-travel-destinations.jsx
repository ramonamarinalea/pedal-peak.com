import React, { useState } from "react";

/**
 * PEDAL PEAK TRAVEL DESTINATIONS SECTION
 * Copy this into Framer as a Code Component
 */

// Sample destination data
const destinations = [
  {
    id: 1,
    name: "Mallorca",
    country: "Spain",
    description:
      "Mediterranean cycling paradise with stunning coastal roads and challenging climbs.",
    duration: "7 days",
    priceFrom: 1899,
    difficulty: "Moderate",
    highlights: ["Coastal views", "Historic towns", "Perfect weather"],
    image: "🏝️", // Replace with actual image
    bestFor: "Road cycling",
    featured: true,
  },
  {
    id: 2,
    name: "Alpine Passes",
    country: "Switzerland",
    description:
      "Conquer legendary mountain passes through breathtaking Alpine scenery.",
    duration: "10 days",
    priceFrom: 2499,
    difficulty: "Hard",
    highlights: ["Epic climbs", "Mountain views", "Swiss hospitality"],
    image: "🏔️",
    bestFor: "Climbing enthusiasts",
    featured: true,
  },
  {
    id: 3,
    name: "Tuscany",
    country: "Italy",
    description:
      "Roll through vineyards and hilltop towns in Italy's most beautiful region.",
    duration: "8 days",
    priceFrom: 2199,
    difficulty: "Moderate",
    highlights: ["Wine tastings", "Rolling hills", "Renaissance art"],
    image: "🍷",
    bestFor: "Cultural cycling",
    featured: true,
  },
];

function DestinationCard({ destination }) {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Easy: "badge badge-success",
      Moderate: "badge badge-warning",
      Hard: "badge badge-error",
    };
    return colors[difficulty] || "badge badge-gray";
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}
    >
      {/* Image Header */}
      <div className="relative">
        <div className="flex aspect-[4/3] items-center justify-center rounded-t-xl bg-gradient-to-br from-blue-400 via-green-400 to-purple-500">
          <div className="text-center text-white">
            <div className="mb-2 text-6xl">{destination.image}</div>
            <div className="body-small opacity-80">
              Replace with destination photo
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {destination.featured && (
          <div className="absolute top-4 left-4">
            <div className="badge badge-success">⭐ Featured</div>
          </div>
        )}

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <div className={getDifficultyColor(destination.difficulty)}>
            {destination.difficulty}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="card-content space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="heading-4" style={{ margin: 0 }}>
              {destination.name}
            </h3>
            <span className="body-small text-gray-500">
              {destination.country}
            </span>
          </div>
          <p className="body-small text-gray-600">{destination.description}</p>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center">📅 {destination.duration}</span>
            <span className="flex items-center">🚴 {destination.bestFor}</span>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <div className="caption">Highlights</div>
            <div className="flex flex-wrap gap-2">
              {destination.highlights.map((highlight, index) => (
                <span key={index} className="badge badge-gray text-xs">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <div>
              <div className="body-small text-gray-500">Starting from</div>
              <div className="heading-4 text-green-600" style={{ margin: 0 }}>
                ${destination.priceFrom.toLocaleString()}
              </div>
            </div>
            <div className="body-small text-gray-500">per person</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <button className="btn btn-primary w-full">
          Learn More
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
}

export default function TravelDestinations() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="mb-12 space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="heading-2">Cycling Adventures Worldwide</h2>
            <p className="body-large mx-auto max-w-3xl text-gray-600">
              From Mediterranean coastlines to Alpine peaks, discover the
              world's best cycling destinations with expert guides and carefully
              planned routes.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
              <div className="flex space-x-1">
                <button
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                    activeTab === "packages"
                      ? "bg-green-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("packages")}
                >
                  🌍 Destinations
                </button>
                <button
                  className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                    activeTab === "shipping"
                      ? "bg-green-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  📦 Bike Shipping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        {activeTab === "packages" && (
          <div className="space-y-8">
            <div className="grid-3">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>

            <div className="text-center">
              <button className="btn btn-secondary btn-large">
                View All Destinations
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}

        {/* Bike Shipping Calculator */}
        {activeTab === "shipping" && (
          <div className="mx-auto max-w-2xl">
            <div className="card">
              <div className="card-header text-center">
                <h3 className="heading-3" style={{ margin: 0 }}>
                  Bike Shipping Calculator
                </h3>
                <p className="body-regular mt-2 text-gray-600">
                  Ship your bike safely and affordably to any destination
                </p>
              </div>

              <div className="card-content space-y-6">
                <div className="grid-2 gap-4">
                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      From
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="San Francisco, CA"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                      />
                      <span className="absolute top-3 right-3 text-gray-400">
                        📍
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      To
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Palma, Mallorca"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                      />
                      <span className="absolute top-3 right-3 text-gray-400">
                        📍
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid-2 gap-4">
                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="body-small font-medium text-gray-700">
                      Return Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <button className="btn btn-primary btn-large w-full">
                  Calculate Shipping Cost
                </button>

                {/* Sample Results */}
                <div className="space-y-3 rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="body-regular font-medium">
                      Estimated Cost:
                    </span>
                    <span
                      className="heading-4 text-green-600"
                      style={{ margin: 0 }}
                    >
                      $245
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Delivery Time:</span>
                      <span>3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance:</span>
                      <span>✓ Included ($2,000)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tracking:</span>
                      <span>✓ Real-time updates</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary w-full">
                  Book Shipping Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
