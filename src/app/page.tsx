import { Bike, Mail, MessageCircle, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "@/components/mobile-navigation";
import { buttonVariants } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <MobileNavigation />

      {/* Hero Section with Image */}
      <section className="relative mt-20 flex h-[70vh] items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_8151.jpeg"
            alt="Cyclists on mountain road"
            fill
            className="object-cover object-center grayscale"
            style={{ objectPosition: "50% 40%" }}
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
            <span>Ride.</span> <span>Explore.</span> <span>Repeat.</span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg font-light text-gray-700 sm:text-xl md:text-2xl">
            Come ride with us. No egos, just good vibes.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://www.strava.com/clubs/Pedalpeak"
              target="_blank"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "border-black bg-white px-8 transition-all hover:bg-black hover:text-white",
              })}
            >
              Join our rides
            </Link>
          </div>
        </div>
      </section>

      {/* Cycling Adventures Section */}
      <section id="adventures" className="bg-gray-50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:mb-16 sm:text-4xl md:text-5xl">
            Cycling Adventures
          </h2>
          <div className="mx-auto max-w-2xl">
            {/* Crete Training Camp */}
            <Link href="/crete" className="group block">
              <div className="relative mb-6 h-64 cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src="/images/crete/crete_hairpins.jpg"
                  alt="Crete cycling training camp"
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="mb-2 inline-block bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                    OCTOBER 19-26, 2025
                  </div>
                  <h3 className="text-2xl font-bold">Crete Training Camp</h3>
                  <p className="text-sm opacity-90">
                    7-day guided cycling experience
                  </p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-gray-600 transition-colors group-hover:text-gray-900">
                Join our guided training camp in Crete with professional
                support, stunning mountain roads, coastal routes, and perfect
                October weather. Limited spaces available.
              </p>
              <div
                className={buttonVariants({
                  className:
                    "w-fit bg-black text-white transition-all hover:bg-gray-800",
                })}
              >
                Book Your Spot - CHF 250
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rides & Events Section with Image */}
      <section id="rides" className="container py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Rides & Events
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Join our regular group rides and special events. We organize
              weekly rides for all skill levels, from casual coffee spins to
              epic mountain adventures. Check our Strava club for the latest
              updates.
            </p>
            <Link
              href="https://chat.whatsapp.com/H0h8ywIh0eP2uAm1ibWMiu?mode=ems_copy_c"
              target="_blank"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-black text-black transition-all hover:bg-black hover:text-white",
              })}
            >
              Sign up for a ride
            </Link>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/images/IMG_2289.jpeg"
              alt="Group ride event"
              fill
              className="object-cover grayscale"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Bike Box Section with Image */}
      <section id="bikebox" className="py-24">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/bikeboxreal.jpeg"
                alt="Bike Box Alan - Professional bike transport case"
                fill
                className="object-cover grayscale"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Bike Box Rental
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Travel with your bike safely and easily. We offer the{" "}
                <span className="font-semibold">
                  Bike Box Alan Triathlon Easyfit
                </span>{" "}
                for rent. Perfect for cycling holidays, events, or relocations.
              </p>
              <div className="mb-12 grid grid-cols-3 gap-8">
                <div>
                  <h4 className="mb-2 font-semibold">Protection</h4>
                  <p className="text-sm text-gray-600">Hard case protection</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Easy Setup</h4>
                  <p className="text-sm text-gray-600">Simple instructions</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Fair Rates</h4>
                  <p className="text-sm text-gray-600">Affordable prices</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/bikebox"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-black px-8 text-white transition-all hover:bg-gray-800",
                  })}
                >
                  Book Now
                </Link>
                <Link
                  href="mailto:ramona.furter@icloud.com?subject=Bike Box Inquiry"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className:
                      "border-black px-8 text-black transition-all hover:bg-black hover:text-white",
                  })}
                >
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-96">
        <Image
          src="/images/FullSizeRender.jpeg"
          alt="Cycling landscape"
          fill
          className="object-cover grayscale"
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-6xl">
            Your Adventure Awaits
          </h2>
        </div>
      </section>

      {/* Animated Divider with moving bike - Enhanced for mobile */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <hr className="w-full border-gray-200" />
        </div>
        <div
          className="bike-animation absolute top-1/2 -translate-y-1/2"
          style={{ animationDelay: "3s" }}
        >
          <Bike className="h-6 w-6 text-black sm:h-8 sm:w-8" />
        </div>
      </div>

      {/* Community Section */}
      <section id="community" className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:mb-16 sm:text-4xl md:text-5xl">
            Join Our Community
          </h2>
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div className="group">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black transition-all group-hover:bg-black">
                <Users className="h-8 w-8 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">Strava Club</h3>
              <p className="mb-6 text-sm text-gray-600">
                Track rides and join challenges
              </p>
              <Link
                href="https://www.strava.com/clubs/Pedalpeak"
                target="_blank"
                className="font-semibold text-black transition-colors hover:text-gray-600"
              >
                Join Strava →
              </Link>
            </div>
            <div className="group">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black transition-all group-hover:bg-black">
                <MessageCircle className="h-8 w-8 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">WhatsApp Group</h3>
              <p className="mb-6 text-sm text-gray-600">
                Real-time ride coordination
              </p>
              <Link
                href="https://chat.whatsapp.com/H0h8ywIh0eP2uAm1ibWMiu?mode=ems_copy_c"
                target="_blank"
                className="font-semibold text-black transition-colors hover:text-gray-600"
              >
                Join WhatsApp →
              </Link>
            </div>
            <div className="group">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black transition-all group-hover:bg-black">
                <Mail className="h-8 w-8 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">Get in Touch</h3>
              <p className="mb-6 text-sm text-gray-600">
                Questions or suggestions?
              </p>
              <Link
                href="mailto:ramona.furter@icloud.com"
                className="font-semibold text-black transition-colors hover:text-gray-600"
              >
                Email Us →
              </Link>
            </div>
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
                href="/events"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Events
              </Link>
              <Link
                href="/piedmont"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Piedmont
              </Link>
              <Link
                href="/crete"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Crete
              </Link>
              <Link
                href="/#rides"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Rides
              </Link>
              <Link
                href="/#bikebox"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Bike Box
              </Link>
              <Link
                href="https://www.strava.com/clubs/Pedalpeak"
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

export default HomePage;
