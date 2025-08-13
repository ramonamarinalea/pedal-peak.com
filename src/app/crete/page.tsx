"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function CreteTrainingCamp() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const rides = [
    {
      day: "Day 1 - Oct 19",
      name: "Welcome Ride (Optional)",
      distance: "30km",
      elevation: "300m",
      description:
        "Optional gentle ride to shake off travel fatigue and get acquainted with the group",
      optional: true,
    },
    {
      day: "Day 2 - Oct 20",
      name: "Coastal Explorer",
      distance: "75km",
      elevation: "600m",
      description:
        "Scenic coastal roads with moderate climbs and stunning sea views",
    },
    {
      day: "Day 3 - Oct 21",
      name: "Mountain Challenge",
      distance: "90km",
      elevation: "1500m",
      description:
        "Test your climbing legs on Crete&apos;s beautiful mountain roads",
    },
    {
      day: "Day 4 - Oct 22",
      name: "Plateau Adventure",
      distance: "85km",
      elevation: "1200m",
      description:
        "Explore the famous Lasithi Plateau with its unique landscape",
    },
    {
      day: "Day 5 - Oct 23",
      name: "Rest Day",
      distance: "-",
      elevation: "-",
      description:
        "Recovery day with optional easy spin, beach time, or cultural exploration",
    },
    {
      day: "Day 6 - Oct 24",
      name: "South Coast Epic",
      distance: "100km",
      elevation: "1800m",
      description: "Challenging ride to the dramatic south coast and back",
    },
    {
      day: "Day 7 - Oct 25",
      name: "Mountain Roads Adventure",
      distance: "95km",
      elevation: "1400m",
      description: "Explore Crete's spectacular mountain roads and villages",
    },
    {
      day: "Day 8 - Oct 26",
      name: "Farewell Ride (Optional)",
      distance: "60km",
      elevation: "500m",
      description: "Optional easy-paced group ride to wrap up an amazing week",
      optional: true,
    },
  ];

  const features = [
    "Professional ride guiding and support",
    "Route planning & GPX files for your device",
    "On-ride mechanical and safety assistance",
    "Complete event planning and coordination",
    "Local knowledge and cultural insights",
    "Optional hotel & flight booking service",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-wider text-black"
            >
              Pedal Peak
            </Link>
            <div className="flex items-center gap-8">
              <a
                href="#details"
                className="text-sm uppercase tracking-wide text-gray-600 transition-colors hover:text-black"
              >
                Details
              </a>
              <a
                href="#itinerary"
                className="text-sm uppercase tracking-wide text-gray-600 transition-colors hover:text-black"
              >
                Itinerary
              </a>
              <Button size="sm" onClick={() => setBookingOpen(true)}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Pedal Peak Style */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/crete/crete_hairpins.jpg"
            alt="Crete mountain cycling roads"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block bg-white px-4 py-2 text-sm font-medium uppercase tracking-wider text-black">
            OCTOBER 19-26, 2025
          </div>
          <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight md:text-7xl">
            Crete
            <br />
            <span className="text-white/80">Training Camp</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl font-light md:text-2xl">
            Join us for an unforgettable week of cycling through the stunning
            landscapes of Crete.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setBookingOpen(true)}
            >
              Book Your Spot - €220
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-black"
              asChild
            >
              <a href="#details">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards - Pedal Peak Style */}
      <section className="bg-gray-50 py-16" id="details">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="card p-8 text-center transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-2xl font-bold">€</span>
              </div>
              <h3 className="mb-2 text-4xl font-bold text-black">220</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Guiding Fee
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Professional guiding and support included
              </p>
            </div>

            <div className="card p-8 text-center transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-2xl font-bold">8</span>
              </div>
              <h3 className="mb-2 text-4xl font-bold text-black">Days</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Full Experience
              </p>
              <p className="mt-2 text-sm text-gray-500">
                5 guided rides + 1 rest day + 2 optional rides
              </p>
            </div>

            <div className="card p-8 text-center transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-xl font-bold">☀</span>
              </div>
              <h3 className="mb-2 text-4xl font-bold text-black">25°C</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Perfect Weather
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Ideal October cycling conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Itinerary - Pedal Peak Style */}
      <section className="py-16" id="itinerary">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">
              Week Itinerary
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A perfect mix of challenging rides, stunning scenery, and recovery
              time
            </p>
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/crete/fotis-fotopoulos-1sfGgGTiekY-unsplash.jpg"
                  alt="Crete coastal cycling route"
                  fill
                  className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-4xl space-y-0 border-t border-gray-200">
            {rides.map((ride, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 p-6 transition-colors hover:bg-gray-50 ${
                  ride.name === "Rest Day" ? "bg-green-50" : ""
                } ${ride.optional ? "bg-blue-50" : ""}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="bg-black px-3 py-1 text-sm font-medium uppercase tracking-wide text-white">
                        {ride.day}
                      </div>
                      {ride.optional && (
                        <div className="bg-blue-500 px-2 py-1 text-xs font-medium uppercase tracking-wide text-white">
                          OPTIONAL
                        </div>
                      )}
                      {ride.distance !== "-" && (
                        <div className="flex gap-2 text-sm text-gray-500">
                          <span>{ride.distance}</span>
                          <span>•</span>
                          <span>↗ {ride.elevation}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold uppercase tracking-wide text-black">
                      {ride.name}
                    </h3>
                    <p className="text-gray-600">{ride.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold uppercase tracking-tight">
              What&apos;s Included in the Guiding Fee
            </h2>

            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black"></div>
                  <div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation & Travel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold uppercase tracking-tight">
            Accommodation & Travel
          </h2>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* Hotel */}
            <div className="card p-8">
              <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide text-black">
                Alsus Boutique Hotel - Adults Only
              </h3>

              {/* Hotel Image Gallery */}
              <div className="mb-6 grid gap-4">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src="/images/crete/alsus1.jpg"
                    alt="Alsus Boutique Hotel - Pool and exterior view"
                    fill
                    className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative h-24 overflow-hidden rounded">
                    <Image
                      src="/images/crete/alsus2.jpg"
                      alt="Alsus Boutique Hotel - Interior room"
                      fill
                      className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                  <div className="relative h-24 overflow-hidden rounded">
                    <Image
                      src="/images/crete/alsus3.jpg"
                      alt="Alsus Boutique Hotel - Pool area and facilities"
                      fill
                      className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                  <div className="relative h-24 overflow-hidden rounded">
                    <Image
                      src="/images/crete/alsus4.jpg"
                      alt="Alsus Boutique Hotel - Restaurant and common areas"
                      fill
                      className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                </div>
              </div>

              <p className="mb-2 text-sm font-medium text-gray-700">
                <strong>Location:</strong> Amoudara Herakliou, Crete • Perfect
                for cyclists with secure bike storage
              </p>

              <p className="mb-4 text-gray-600">
                Adults-only boutique hotel with modern amenities, ideal for our
                cycling group.
              </p>

              <div className="mb-4 border-l-4 border-black bg-gray-100 p-4">
                <p className="text-sm font-medium text-gray-900">
                  <strong>Important:</strong> Hotel booking is separate from the
                  guiding fee.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Optional Service:</strong> I can book hotel and
                  flights for you via prepayment if preferred.
                </p>
              </div>

              <Button variant="outline" asChild>
                <a
                  href="https://www.booking.com/Share-VpAdDUX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Hotel & Book →
                </a>
              </Button>
            </div>

            {/* Flights */}
            <div className="card p-8">
              <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide text-black">
                Flight Information
              </h3>
              <p className="mb-4 text-gray-600">
                Direct flights from Zurich to Heraklion International Airport
                (HER).
              </p>

              <div className="mb-6 space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h4 className="text-sm font-semibold uppercase text-black">
                    Edelweiss Air - Direct Flights
                  </h4>
                  <p className="text-sm text-gray-600">
                    Zurich (ZUR) → Heraklion (HER)
                  </p>
                  <p className="text-sm text-gray-600">
                    Flight time: 3 hours • Flights WK348, WK350
                  </p>
                  <p className="text-sm text-gray-600">
                    ✓ Free checked baggage, sports equipment & catering
                  </p>
                </div>

                <div className="border-l-4 border-black pl-4">
                  <h4 className="text-sm font-semibold uppercase text-black">
                    Recommended Schedule
                  </h4>
                  <p className="text-sm text-gray-600">
                    Outbound: Oct 19 morning arrival
                  </p>
                  <p className="text-sm text-gray-600">
                    Return: Oct 26 afternoon/evening departure
                  </p>
                </div>
              </div>

              <Button variant="outline" asChild>
                <a
                  href="https://www.flyedelweiss.com/ch/en/destinations/heraklion.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Edelweiss Flights →
                </a>
              </Button>

              <div className="mt-4 bg-gray-100 p-4">
                <p className="text-sm text-gray-600">
                  <strong>Tip:</strong> Arrive Oct 19 before 3 PM for welcome
                  ride
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold uppercase tracking-tight">
            Crete Cycling Gallery
          </h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/crete/janis-beitins-Lhg60Pc4KGA-unsplash.jpg",
                alt: "Crete mountain roads",
              },
              {
                src: "/images/crete/evangelos-mpikakis-nFy-xBd0Jsc-unsplash.jpg",
                alt: "Coastal cycling views",
              },
              {
                src: "/images/crete/pelayo-arbues-k0B719Al7Ks-unsplash.jpg",
                alt: "Scenic Crete landscape",
              },
              {
                src: "/images/crete/mircea-solomiea-EdQZ8ErN37k-unsplash.jpg",
                alt: "Crete countryside",
              },
              {
                src: "/images/crete/ryan-spencer-WJDR8_QxVR8-unsplash.jpg",
                alt: "Mountain cycling terrain",
              },
              {
                src: "/images/crete/eugene-chystiakov-w4qMW_XDbYA-unsplash.jpg",
                alt: "Beautiful Crete roads",
              },
            ].map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section - Pedal Peak Style */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">
            Ready to Join Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Secure your spot with the CHF 250 guiding fee. Limited spaces
            available.
          </p>

          <div className="mx-auto mb-8 max-w-md border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-2 text-6xl font-bold">CHF 250</div>
            <div className="mb-4 text-lg uppercase tracking-wide">
              Guiding & Organization Fee
            </div>
            <div className="text-sm opacity-80">
              Hotel and flights booked separately
            </div>
          </div>

          <Button
            size="lg"
            variant="secondary"
            className="mb-4"
            onClick={() => setBookingOpen(true)}
          >
            Book Your Spot Now
          </Button>

          <p className="mx-auto mb-4 max-w-md text-sm opacity-80">
            Payment secures your participation. Full details and instructions
            will be sent after booking.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-2xl font-bold uppercase tracking-tight text-black">
            Questions?
          </h3>
          <p className="mb-6 text-gray-600">
            Get in touch for more information about the training camp
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:ramona.furter@icloud.com?subject=Question about Crete Cycling Camp&body=Hi Ramona,%0D%0A%0D%0AI have a question about the Crete Cycling Camp:%0D%0A%0D%0A[Please write your question here]%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards">
              Contact Organizers
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-wider text-black transition-colors hover:text-gray-600"
          >
            Pedal Peak
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Professional Cycling Experiences
          </p>
        </div>
      </footer>

      {/* Booking Modal Placeholder */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-8">
            <h3 className="mb-4 text-2xl font-bold text-black">
              Book Your Spot
            </h3>
            <p className="mb-6 text-gray-600">
              Contact us directly to secure your spot on the Crete Cycling Camp.
            </p>
            <div className="flex gap-4">
              <Button asChild className="flex-1">
                <a href="mailto:ramona.furter@icloud.com?subject=Crete Cycling Camp Booking&body=Hi Ramona,%0D%0A%0D%0AI would like to book my spot for the Crete Cycling Camp (Oct 19-26, 2025).%0D%0A%0D%0AName: %0D%0APhone: %0D%0AEmail: %0D%0A%0D%0APlease send me the booking details and payment instructions.%0D%0A%0D%0AThank you!">
                  Send Booking Email
                </a>
              </Button>
              <Button variant="outline" onClick={() => setBookingOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
