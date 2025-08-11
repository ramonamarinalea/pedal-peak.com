import { ArrowRight, Check, Shield, Truck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BikeBoxBooking } from "@/components/bike-box-booking";
import { BikeBoxContact } from "@/components/bike-box-contact";
import { MobileNavigation } from "@/components/mobile-navigation";
import { buttonVariants } from "@/components/ui/button";

const BikeBoxPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MobileNavigation />

      {/* Hero Section */}
      <section className="relative mt-20 flex min-h-[60vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bikeboxreal.jpeg"
            alt="Bike Box Alan in airport"
            fill
            className="object-cover grayscale"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Bike Box Rental
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg font-light text-white/90 sm:text-xl md:text-2xl">
            Travel with your bike safely and easily. Professional protection for
            your cycling adventures.
          </p>
          <Link
            href="#pricing"
            className={buttonVariants({
              size: "lg",
              className:
                "group border-2 border-black bg-white px-8 text-black transition-all hover:bg-black hover:text-white",
            })}
          >
            <span className="text-black group-hover:text-white">
              View Pricing
            </span>
            <ArrowRight className="ml-2 h-4 w-4 text-black group-hover:text-white" />
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="container py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Bike Box Alan Triathlon Easyfit
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              The ultimate solution for transporting your road, gravel, or
              triathlon bike. Designed with cyclists in mind, this
              professional-grade case ensures your bike arrives safely at your
              destination.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-6 w-6 text-black" />
                <div>
                  <h4 className="mb-1 font-semibold">Maximum Protection</h4>
                  <p className="text-sm text-gray-600">
                    High-impact ABS plastic with foam lining
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="mt-1 h-6 w-6 text-black" />
                <div>
                  <h4 className="mb-1 font-semibold">Easy Setup</h4>
                  <p className="text-sm text-gray-600">
                    No need to remove cockpit or aero bars
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-1 h-6 w-6 text-black" />
                <div>
                  <h4 className="mb-1 font-semibold">Travel Ready</h4>
                  <p className="text-sm text-gray-600">
                    Smooth-glide wheels for easy transport
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-6 w-6 text-black" />
                <div>
                  <h4 className="mb-1 font-semibold">Universal Fit</h4>
                  <p className="text-sm text-gray-600">
                    Compatible with wheels up to 29&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/images/bikeboxreal.jpeg"
              alt="Bike Box Alan details"
              fill
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:mb-16 sm:text-4xl md:text-5xl">
            Specifications
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">133cm</div>
              <p className="text-gray-600">Length</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">50cm</div>
              <p className="text-gray-600">Width</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">94cm</div>
              <p className="text-gray-600">Height</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold">13.5kg</div>
              <p className="text-gray-600">Weight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:mb-16 sm:text-4xl md:text-5xl">
          Rental Pricing
        </h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-8">
            <h3 className="mb-4 text-2xl font-bold">Daily Rental</h3>
            <div className="mb-6 text-4xl font-bold">
              CHF 15
              <span className="text-lg font-normal text-gray-600">/day</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-black" />
                <span>Perfect for short trips</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-black" />
                <span>Flexible duration</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-black" />
                <span>CHF 200 deposit</span>
              </li>
            </ul>
            <BikeBoxBooking type="daily" variant="outline" />
          </div>

          <div className="relative rounded-lg border-2 border-black p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded bg-black px-3 py-1 text-sm font-semibold text-white">
                POPULAR
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold">Weekly Rental</h3>
            <div className="mb-6 text-4xl font-bold">
              CHF 140
              <span className="text-lg font-normal text-gray-600">/week</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-black" />
                <span>Best value for longer trips</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-black" />
                <span>Special rates for extended rentals</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-black" />
                <span>CHF 200 deposit</span>
              </li>
            </ul>
            <BikeBoxBooking type="weekly" />
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="bg-gray-50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:mb-16 sm:text-4xl md:text-5xl">
            Compatible Bikes
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black">
                <span className="text-2xl">🚴</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Road Bikes</h3>
              <p className="text-sm text-gray-600">
                Perfect for racing and endurance bikes
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black">
                <span className="text-2xl">🚵</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Gravel Bikes</h3>
              <p className="text-sm text-gray-600">
                Ideal for adventure and gravel setups
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Triathlon Bikes</h3>
              <p className="text-sm text-gray-600">
                Fits aero bars without removal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="container py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pickup & Return
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Convenient pickup and return location in Zurich. We&apos;ll
              provide detailed instructions and support to ensure your bike is
              properly packed and protected.
            </p>
            <div className="mb-8 space-y-4">
              <div>
                <h4 className="mb-1 font-semibold">Location</h4>
                <p className="text-gray-600">8006 Zurich, Switzerland</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Contact</h4>
                <p className="text-gray-600">ramona@pedal-peak.com</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Deposit</h4>
                <p className="text-gray-600">CHF 200 (fully refundable)</p>
              </div>
            </div>
            <BikeBoxContact />
          </div>

          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/bikeboxreal.jpeg"
              alt="Bike box at location"
              fill
              className="object-cover grayscale"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
            <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
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

export default BikeBoxPage;
