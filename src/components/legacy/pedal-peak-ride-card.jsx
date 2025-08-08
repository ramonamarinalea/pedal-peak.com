import React, { useState } from "react";

/**
 * PEDAL PEAK RIDE CARD COMPONENT
 * Copy this into Framer as a Code Component
 */

export default function RideCard({
  title = "Marin Headlands Challenge",
  date = "Sat, Jun 22",
  time = "7:00 AM",
  distance = "45",
  difficulty = "Hard",
  elevation = "2,800",
  rideType = "Road",
  location = "Sausalito Ferry",
  pace = "16-18 mph",
  currentRiders = 8,
  maxRiders = 15,
  cost = 0,
  leaderName = "Sarah M.",
  leaderInitials = "SM",
  status = "open", // open, full, joined
}) {
  const [isJoining, setIsJoining] = useState(false);

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

  const handleJoinRide = () => {
    setIsJoining(true);
    // Simulate API call
    setTimeout(() => {
      setIsJoining(false);
      alert("Successfully joined ride! Check your email for details.");
    }, 1000);
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="card-header">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="heading-4" style={{ margin: 0 }}>
              {title}
            </h3>
            <p className="body-small text-gray-500">
              {date} • {time}
            </p>
          </div>
          <div className={getDifficultyBadge(difficulty)}>{difficulty}</div>
        </div>
      </div>

      {/* Content */}
      <div className="card-content space-y-4">
        {/* Ride Details */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="flex items-center space-x-1">
            <span>{getTypeIcon(rideType)}</span>
            <span>{rideType}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>📏</span>
            <span>{distance}mi</span>
          </span>
          <span className="flex items-center space-x-1">
            <span>⛰️</span>
            <span>{elevation}ft</span>
          </span>
        </div>

        {/* Location & Pace */}
        <div className="space-y-2">
          <p className="body-small text-gray-600">📍 Start: {location}</p>
          <p className="body-small text-gray-600">🏃 Pace: {pace}</p>
        </div>

        {/* Leader */}
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
            <span className="text-xs font-medium text-green-700">
              {leaderInitials}
            </span>
          </div>
          <span className="body-small">
            Led by <span className="font-medium">{leaderName}</span>
          </span>
        </div>

        {/* Participants & Cost */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="body-small text-gray-500">
              👥 {currentRiders}/{maxRiders} riders
            </span>
            {/* Progress bar */}
            <div className="h-2 w-16 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-green-400 transition-all duration-300"
                style={{ width: `${(currentRiders / maxRiders) * 100}%` }}
              ></div>
            </div>
          </div>
          {cost > 0 && <span className="body-small font-medium">${cost}</span>}
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <div className="flex w-full gap-3">
          <button className="btn btn-secondary flex-1">View Details</button>

          {status === "open" && (
            <button
              className="btn btn-primary flex-1"
              onClick={handleJoinRide}
              disabled={isJoining || currentRiders >= maxRiders}
            >
              {isJoining ? (
                <span className="flex items-center">
                  <svg
                    className="mr-2 -ml-1 h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Joining...
                </span>
              ) : currentRiders >= maxRiders ? (
                "Full"
              ) : (
                "Join Ride"
              )}
            </button>
          )}

          {status === "joined" && (
            <button className="btn btn-secondary flex-1" disabled>
              ✓ Joined
            </button>
          )}

          {status === "full" && (
            <button className="btn btn-secondary flex-1" disabled>
              Full - Join Waitlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
