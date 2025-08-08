"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PiedmontItinerary() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/piedmont/andrea-cairone-lzM3pbQim70-unsplash.jpg"
            alt="Piedmont cycling landscape"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block bg-white px-4 py-2 text-sm font-medium uppercase tracking-wider text-black">
            AUGUST 11-15, 2025
          </div>
          <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight md:text-7xl">
            Our Daily
            <br />
            <span className="text-white/80">Itinerary</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl font-light md:text-2xl">
            4 days of cycling through Piedmont's most beautiful landscapes
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#itinerary">View Details</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/piedmont">← Back to Overview</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Itinerary Section */}
      <section className="bg-gray-50 py-16" id="itinerary">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">
              Our 4-Day Itinerary
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A perfect mix of challenging rides, stunning scenery, and
              authentic Italian experiences
            </p>

            {/* Trip Stats Summary */}
            <div className="mx-auto mt-8 max-w-3xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">4 Days</div>
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    Duration
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">466km</div>
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    Total Distance
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">5,526m</div>
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    Total Elevation
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-8">
            {[
              {
                day: 1,
                date: "Monday, August 11, 2025",
                title: "Zurich to Asigliano Vercellese",
                transport: {
                  departure: "Zurich HB",
                  arrival: "Chiasso",
                  time: "6:05 AM - 8:26 AM",
                  duration: "2h 21m",
                  booking: "https://www.sbb.ch",
                },
                route: {
                  start: "Chiasso",
                  end: "Asigliano Vercellese",
                  distance: "124km",
                  elevation: "1,190m+",
                  stravaId: "3388109105877782018",
                  highlights: [
                    "Cross the Swiss-Italian border",
                    "Descend into Lombardy plains",
                    "Enter the UNESCO rice fields of Vercelli",
                    "First taste of Italian gravel roads",
                  ],
                },
                accommodation: {
                  name: "Amy Casetta di Charme",
                  price: "CHF 85",
                  address:
                    "Via Guglielmo Marconi, 30, 13032 Asigliano Vercellese VC, Italy",
                  features: [
                    "Garden views",
                    "Air-conditioned units",
                    "Private bathroom with shower",
                    "Terrace",
                    "Organic breakfast with local specialties",
                  ],
                  description:
                    "Charming B&B immersed in rice fields, perfect starting point for Piedmont exploration",
                  image: "/images/piedmont/day1.jpeg",
                  link: "https://www.amycasettadicharme.com/",
                },
              },
              {
                day: 2,
                date: "Tuesday, August 12, 2025",
                title: "Asigliano Vercellese to San Martino",
                route: {
                  start: "Asigliano Vercellese",
                  end: "San Martino (Castiglione Tinella)",
                  distance: "125km",
                  elevation: "2,488m+",
                  stravaId: "3388109289368245828",
                  highlights: [
                    "Climb through the Barolo wine region",
                    "Visit historic hilltop villages",
                    "Stunning vineyard panoramas",
                    "Traditional Piedmontese architecture",
                  ],
                },
                accommodation: {
                  name: "Agriturismo San Martino",
                  price: "CHF 117",
                  address: "Strada San Martino 28/B, Castiglione Tinella",
                  features: [
                    "Pool views",
                    "Garden setting",
                    "Terrace with sunset views",
                    "Restaurant on-site",
                    "Seasonal outdoor swimming pool",
                    "Hot tub",
                  ],
                  description:
                    "Traditional agriturismo in the heart of wine country",
                  image: "/images/piedmont/day2.jpg",
                  link: "https://www.agriturismosanmartino.org/wordpress/en/home_en/",
                },
              },
              {
                day: 3,
                date: "Wednesday, August 13, 2025",
                title: "San Martino to Santa Giuletta",
                route: {
                  start: "San Martino",
                  end: "Santa Giuletta",
                  distance: "140km",
                  elevation: "1,690m+",
                  stravaId: "3388109479054315010",
                  highlights: [
                    "Traverse the Oltrepò Pavese wine region",
                    "Historic military roads",
                    "Rolling hills and vineyards",
                    "Traditional wine estates",
                  ],
                },
                accommodation: {
                  name: "Borgo Santuletta",
                  price: "CHF 180",
                  address: "Cascina Giampietro, 1, 27046, Santa Giuletta, Pavia",
                  features: [
                    "Adults-only farm stay",
                    "Swimming pool with countryside views",
                    "Italian restaurant",
                    "Historic building setting",
                    "Garden views",
                    "Continental, Italian, and gluten-free breakfast options",
                    "Vegetarian dinner options",
                  ],
                  description:
                    "Luxurious farm stay in a historic setting with exceptional dining",
                  image: "/images/piedmont/day 3.jpeg",
                  link: "https://borgosantuletta.com/en/",
                },
              },
              {
                day: 4,
                date: "Thursday, August 14, 2025",
                title: "Santa Giuletta to Milano",
                route: {
                  start: "Santa Giuletta",
                  end: "Milano Centrale",
                  distance: "77km",
                  elevation: "158m+",
                  stravaId: "3388109641554180676",
                  highlights: [
                    "Final ride through Lombardy",
                    "Approach to Italy's fashion capital",
                    "Mix of countryside and urban landscapes",
                    "Celebration finish in Milano",
                  ],
                },
                transport: {
                  departure: "Milano Centrale",
                  arrival: "Zurich HB",
                  time: "6:05 PM - 9:22 PM",
                  duration: "3h 17m",
                  booking: "https://www.trainline.com",
                  note: "Evening departure allows for leisurely final day",
                },
                accommodation: {
                  name: "Return Journey",
                  description:
                    "Evening train back to Zurich completes your adventure",
                },
              },
            ].map((dayData) => (
              <div key={dayData.day} className="card overflow-hidden">
                <div className="bg-gray-100 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-2 inline-block bg-black px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
                        Day {dayData.day}
                      </div>
                      <h3 className="text-2xl font-bold uppercase">
                        {dayData.title}
                      </h3>
                      <p className="text-gray-600">{dayData.date}</p>
                    </div>
                    <div className="text-right">
                      {dayData.route && (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">
                              {dayData.route.distance}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">
                              {dayData.route.elevation}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Route & Transport Information */}
                  <div className="p-6 space-y-6">
                    {dayData.transport && (
                      <div className="rounded-lg bg-gray-100 p-4">
                        <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                          🚂 Transportation
                        </h4>
                        <p className="text-sm text-gray-800">
                          <strong>{dayData.transport.departure}</strong> →{" "}
                          <strong>{dayData.transport.arrival}</strong>
                        </p>
                        <p className="text-sm text-gray-700">
                          {dayData.transport.time} ({dayData.transport.duration})
                        </p>
                        {dayData.transport.note && (
                          <p className="text-xs text-gray-600 mt-2">
                            {dayData.transport.note}
                          </p>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-3 border-black text-black hover:bg-black hover:text-white"
                          asChild
                        >
                          <Link href={dayData.transport.booking} target="_blank">
                            Book Tickets →
                          </Link>
                        </Button>
                      </div>
                    )}

                    {dayData.route && (
                      <div>
                        <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                          📍 Route Details
                        </h4>
                        <div className="space-y-3">
                          <p className="text-sm">
                            <strong>From:</strong> {dayData.route.start}
                            <br />
                            <strong>To:</strong> {dayData.route.end}
                          </p>

                          <div className="rounded-lg bg-gray-100 p-3">
                            <h5 className="font-medium text-black mb-2">
                              Route Highlights
                            </h5>
                            <ul className="space-y-1">
                              {dayData.route.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-700 flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-black text-black hover:bg-black hover:text-white"
                              asChild
                            >
                              <Link
                                href={`https://www.strava.com/routes/${dayData.route.stravaId}`}
                                target="_blank"
                              >
                                View on Strava →
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Accommodation Information */}
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                      🏨 Accommodation
                    </h4>

                    {dayData.accommodation.image && (
                      <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={dayData.accommodation.image}
                          alt={dayData.accommodation.name}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    )}

                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-black">
                          {dayData.accommodation.name}
                        </h5>
                        {dayData.accommodation.price && (
                          <p className="text-lg font-bold text-black">
                            {dayData.accommodation.price}
                          </p>
                        )}
                        {dayData.accommodation.address && (
                          <p className="text-sm text-gray-600">
                            {dayData.accommodation.address}
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-gray-700">
                        {dayData.accommodation.description}
                      </p>

                      {dayData.accommodation.features && (
                        <div>
                          <h6 className="text-sm font-medium text-black mb-2">
                            Features
                          </h6>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-gray-600">
                            {dayData.accommodation.features.map(
                              (feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-1"
                                >
                                  <span className="w-1 h-1 bg-black rounded-full" />
                                  {feature}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}

                      {dayData.accommodation.price &&
                        dayData.accommodation.link && (
                          <Button
                            size="sm"
                            className="w-full bg-black hover:bg-gray-800 text-white"
                            asChild
                          >
                            <Link
                              href={dayData.accommodation.link}
                              target="_blank"
                            >
                              View Accommodation
                            </Link>
                          </Button>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-wider text-black transition-colors hover:text-gray-600"
          >
            Pedal Peak
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Our Personal Cycling Adventures
          </p>
        </div>
      </footer>
    </div>
  );
}