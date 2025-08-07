import React from "react";

/**
 * PEDAL PEAK UPCOMING RIDES SECTION
 * Copy this into Framer as a Code Component
 */

// Sample ride data - replace with real data
const sampleRides = [
  {
    id: 1,
    title: "Marin Headlands Challenge",
    date: "Sat, Jun 22",
    time: "7:00 AM",
    distance: "45",
    difficulty: "Hard",
    elevation: "2,800",
    rideType: "Road",
    location: "Sausalito Ferry",
    pace: "16-18 mph",
    currentRiders: 8,
    maxRiders: 15,
    cost: 0,
    leaderName: "Sarah M.",
    leaderInitials: "SM",
    status: "open",
  },
  {
    id: 2,
    title: "Gravel Explorer",
    date: "Sun, Jun 23",
    time: "8:30 AM",
    distance: "30",
    difficulty: "Moderate",
    elevation: "1,200",
    rideType: "Gravel",
    location: "Golden Gate Park",
    pace: "12-15 mph",
    currentRiders: 12,
    maxRiders: 20,
    cost: 0,
    leaderName: "Mike T.",
    leaderInitials: "MT",
    status: "open",
  },
  {
    id: 3,
    title: "Evening Loop",
    date: "Wed, Jun 26",
    time: "6:00 PM",
    distance: "20",
    difficulty: "Easy",
    elevation: "500",
    rideType: "Casual",
    location: "Crissy Field",
    pace: "10-12 mph",
    currentRiders: 15,
    maxRiders: 25,
    cost: 0,
    leaderName: "Lisa K.",
    leaderInitials: "LK",
    status: "open",
  },
];

function RideCard({ ride }) {
  const getDifficultyBadge = (difficulty) => {
    const classes = {
      Easy: "badge badge-success",
      Moderate: "badge badge-warning",
      Hard: "badge badge-error",
      Expert: "badge badge-error",
    };
    return classes[difficulty] || "badge badge-gray";
  };

  const getTypeIcon = (type) => {
    const icons = {
      Road: "🚴",
      Gravel: "🚵",
      Mountain: "⛰️",
      Casual: "🚲",
    };
    return icons[type] || "🚴";
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4
              className="heading-4"
              style={{ margin: 0, fontSize: "1.25rem" }}
            >
              {ride.title}
            </h4>
            <p className="body-small text-gray-500">
              {ride.date} • {ride.time}
            </p>
          </div>
          <div className={getDifficultyBadge(ride.difficulty)}>
            {ride.difficulty}
          </div>
        </div>
      </div>

      <div className="card-content space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center space-x-1">
            <span>{getTypeIcon(ride.rideType)}</span>
            <span>{ride.rideType}</span>
          </span>
          <span>📏 {ride.distance}mi</span>
          <span>⛰️ {ride.elevation}ft</span>
        </div>

        <p className="body-small text-gray-600">📍 {ride.location}</p>

        <div className="flex items-center justify-between">
          <span className="body-small text-gray-500">
            👥 {ride.currentRiders}/{ride.maxRiders} riders
          </span>
          <div className="h-2 w-16 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-green-400 transition-all"
              style={{
                width: `${(ride.currentRiders / ride.maxRiders) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="flex gap-2">
          <button className="btn btn-secondary btn-small flex-1">
            Details
          </button>
          <button className="btn btn-primary btn-small flex-1">
            Join Ride
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingRides() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="heading-2">Upcoming Rides</h2>
          <p className="body-large mx-auto max-w-2xl text-gray-600">
            Join riders in your area for your next adventure. All skill levels
            welcome.
          </p>
        </div>

        {/* Rides Grid */}
        <div className="grid-3 mb-8">
          {sampleRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn btn-secondary btn-large">
            View All Rides
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
