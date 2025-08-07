import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PiedmontAdventure() {
  const features = [
    "UNESCO World Heritage vineyards of Barolo & Barbaresco",
    "Historic Alpine military roads and gravel paths",
    "Stunning rice fields around Vercelli",
    "Amazing Italian cuisine and local wines",
    "Cozy B&Bs and agriturismos we&apos;ve picked",
    "Just the two of us exploring together",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Pedal Peak Style */}
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
            Piedmont
            <br />
            <span className="text-white/80">Adventure</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl font-light md:text-2xl">
            Our 4-day gravel cycling adventure through Piedmont&apos;s
            countryside
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#itinerary">View Our Itinerary</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="#details">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards - Pedal Peak Style */}
      <section className="bg-gray-50 py-16" id="details">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-2xl">🚴</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">4 Days</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Full Adventure
              </p>
              <p className="mt-2 text-sm text-gray-500">77-140km daily rides</p>
            </div>

            <div className="card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-2xl">🍷</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">UNESCO</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Wine Regions
              </p>
              <p className="mt-2 text-sm text-gray-500">Barolo & Barbaresco</p>
            </div>

            <div className="card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">Private</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                Just Us Two
              </p>
              <p className="mt-2 text-sm text-gray-500">Personal adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">
                Our Route Through
                <br />
                <span className="text-gray-500">Piedmont</span>
              </h2>

              <p className="mb-8 text-lg text-gray-600">
                We&apos;ll spend 4 days cycling through one of Italy&apos;s most
                beautiful regions. From rolling hills covered in vineyards to
                the rice fields around Vercelli, every kilometer will show us
                something new about Piedmont&apos;s amazing landscapes.
              </p>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide text-black">
                  What We&apos;ll Experience
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-black"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-black bg-gray-100 p-6">
                <p className="text-sm font-medium text-gray-900">
                  <strong>Our pace:</strong> Daily distances of 77-140km with
                  significant climbs. We&apos;ll take our time to enjoy the
                  views and stop for coffee whenever we want!
                </p>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/piedmont/andrea-rapuzzi-4r8Cn0f3QFE-unsplash.jpg"
                    alt="Piedmont vineyards"
                    fill
                    className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/piedmont/kristaps-grundsteins-eSkU9bMC2Cc-unsplash.jpg"
                    alt="Rice fields around Vercelli"
                    fill
                    className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
              </div>
              <div className="space-y-4 sm:pt-8">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/piedmont/johnny-africa-dx1ziocVqc0-unsplash.jpg"
                    alt="Piedmont hilltop village"
                    fill
                    className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/piedmont/luis-van-den-bos-Uk053Mvsb-Y-unsplash.jpg"
                    alt="Rolling hills of Piedmont"
                    fill
                    className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
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
          </div>

          <div className="mx-auto max-w-4xl space-y-0 border-t border-gray-200">
            {[
              {
                day: "Day 1 - Aug 11",
                name: "Arrival & Barolo Discovery",
                distance: "77km",
                description:
                  "Start our adventure in the heart of Barolo wine country",
              },
              {
                day: "Day 2 - Aug 12",
                name: "Barbaresco & Military Roads",
                distance: "95km",
                description:
                  "Explore historic Alpine military roads and Barbaresco vineyards",
              },
              {
                day: "Day 3 - Aug 13",
                name: "Vercelli Rice Fields",
                distance: "140km",
                description:
                  "Our longest ride through the stunning rice fields around Vercelli",
              },
              {
                day: "Day 4 - Aug 14",
                name: "Final Gravel Adventure",
                distance: "89km",
                description:
                  "Complete our journey with beautiful gravel paths and countryside views",
              },
            ].map((ride, index) => (
              <div
                key={index}
                className="border-b border-gray-200 p-6 transition-colors hover:bg-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="bg-black px-3 py-1 text-sm font-medium uppercase tracking-wide text-white">
                        {ride.day}
                      </div>
                      <div className="flex gap-2 text-sm text-gray-500">
                        <span>{ride.distance}</span>
                      </div>
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

      {/* Contact Section - Pedal Peak Style */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">
            Follow Our Adventure
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            This is our personal cycling adventure through Piedmont. Follow
            along for updates!
          </p>

          <Button size="lg" variant="secondary" asChild>
            <Link href="mailto:ramona.furter@icloud.com?subject=Piedmont Adventure Question&body=Hi!%0D%0A%0D%0AI%27d love to know more about your Piedmont cycling adventure.%0D%0A%0D%0AThank you!">
              Get in Touch
            </Link>
          </Button>
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
