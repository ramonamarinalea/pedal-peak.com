import React, { useState, useEffect } from "react";

/**
 * PEDAL PEAK COMMUNITY STATS SECTION
 * Copy this into Framer as a Code Component
 */

// Animated counter hook
function useCounter(end, duration = 2000, startOnMount = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount || hasStarted) return;

    setHasStarted(true);
    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (end - startValue) + startValue,
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startOnMount, hasStarted]);

  return count;
}

function StatCard({ icon, value, label, suffix = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedValue = useCounter(value, 2000, isVisible);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="animate-fade-in space-y-3 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-2 text-4xl">{icon}</div>
      <div className="space-y-1">
        <div className="heading-2 text-green-500">
          {animatedValue.toLocaleString()}
          {suffix}
        </div>
        <div className="caption text-gray-500">{label}</div>
      </div>
    </div>
  );
}

export default function CommunityStats() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="heading-2">Join Our Growing Community</h2>
          <p className="body-large mx-auto max-w-2xl text-gray-600">
            Thousands of cyclists have found their tribe with Pedal Peak.
            Discover new routes, make friends, and push your limits together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCard icon="🚴" value={1247} label="Active Riders" delay={0} />
          <StatCard icon="📍" value={23} label="Cities" delay={200} />
          <StatCard icon="🗺️" value={156} label="Routes" delay={400} />
          <StatCard
            icon="🏆"
            value={3248}
            label="Rides Completed"
            delay={600}
          />
        </div>

        {/* Additional Stats */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <StatCard
            icon="📈"
            value={89}
            suffix="%"
            label="Member Satisfaction"
            delay={800}
          />
          <StatCard icon="🌍" value={12} label="Countries" delay={1000} />
          <StatCard
            icon="⭐"
            value={47}
            suffix="k"
            label="Miles Logged"
            delay={1200}
          />
        </div>

        {/* Community Features */}
        <div className="rounded-3xl bg-gradient-to-r from-green-50 to-blue-50 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="heading-3">Why Riders Love Pedal Peak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Inclusive Community
                    </div>
                    <div className="body-small text-gray-600">
                      All skill levels welcome, from beginners to pros
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">Safety First</div>
                    <div className="body-small text-gray-600">
                      Experienced ride leaders and safety protocols
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Expert Routes
                    </div>
                    <div className="body-small text-gray-600">
                      Carefully curated rides for every preference
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Global Adventures
                    </div>
                    <div className="body-small text-gray-600">
                      From local rides to international cycling tours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Member Testimonial */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <span className="font-medium text-green-700">SM</span>
                  </div>
                  <div>
                    <div className="body-regular font-medium">
                      Sarah Martinez
                    </div>
                    <div className="body-small text-gray-500">
                      Ride Leader • 47 rides
                    </div>
                  </div>
                </div>
                <p className="body-regular text-gray-700 italic">
                  "I've met some of my best friends through Pedal Peak. The
                  community is incredibly welcoming, and there's always a ride
                  that matches my mood and fitness level."
                </p>
                <div className="mt-3 flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>

              {/* Join CTA */}
              <div className="text-center">
                <button className="btn btn-primary btn-large">
                  Join the Community
                  <span className="ml-2">→</span>
                </button>
                <p className="body-small mt-2 text-gray-500">
                  Free to join • Start riding in minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
