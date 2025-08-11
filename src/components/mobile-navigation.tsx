"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";

interface MobileNavigationProps {
  className?: string;
}

export const MobileNavigation = ({ className }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 z-50 w-full border-b border-gray-200 bg-white ${className}`}>
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold tracking-tight"
          onClick={closeMenu}
        >
          <Logo className="h-8 w-8 text-black" />
          <span className="lowercase">pedal peak</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/routes"
            className="text-sm text-gray-900 transition-colors hover:text-black"
          >
            routes
          </Link>
          <Link
            href="/#adventures"
            className="text-sm text-gray-900 transition-colors hover:text-black"
          >
            adventures
          </Link>
          <Link
            href="/#rides"
            className="text-sm text-gray-900 transition-colors hover:text-black"
          >
            rides
          </Link>
          <Link
            href="/bikebox"
            className="text-sm text-gray-900 transition-colors hover:text-black"
          >
            bike box
          </Link>
          <Link
            href="/#community"
            className="text-sm text-gray-900 transition-colors hover:text-black"
          >
            community
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link
          href="https://www.strava.com/clubs/Pedalpeak"
          target="_blank"
          className={buttonVariants({
            size: "sm",
            className: "hidden bg-black text-white transition-all hover:bg-gray-800 md:flex",
          })}
        >
          join strava club
        </Link>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-6 w-6">
            <Menu
              className={`absolute h-6 w-6 transform transition-all duration-300 ${
                isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute h-6 w-6 transform transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={closeMenu} />
        )}

        {/* Mobile Menu */}
        <nav
          className={`fixed right-0 top-20 z-40 h-[calc(100vh-5rem)] w-80 transform bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-6">
            <div className="flex flex-col space-y-6">
              <Link
                href="/routes"
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-black"
                onClick={closeMenu}
              >
                routes
              </Link>
              <Link
                href="/#adventures"
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-black"
                onClick={closeMenu}
              >
                adventures
              </Link>
              <Link
                href="/#rides"
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-black"
                onClick={closeMenu}
              >
                rides
              </Link>
              <Link
                href="/bikebox"
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-black"
                onClick={closeMenu}
              >
                bike box
              </Link>
              <Link
                href="/#community"
                className="text-lg font-semibold text-gray-900 transition-colors hover:text-black"
                onClick={closeMenu}
              >
                community
              </Link>
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8">
              <Link
                href="https://www.strava.com/clubs/Pedalpeak"
                target="_blank"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full bg-black text-white transition-all hover:bg-gray-800",
                })}
                onClick={closeMenu}
              >
                join strava club
              </Link>
            </div>

            {/* Additional Mobile Menu Items */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex flex-col space-y-4">
                <Link
                  href="mailto:hello@pedal-peak.com"
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
                <Link
                  href="https://chat.whatsapp.com/H0h8ywIh0eP2uAm1ibWMiu?mode=ems_copy_c"
                  target="_blank"
                  className="text-sm text-gray-600 transition-colors hover:text-black"
                  onClick={closeMenu}
                >
                  WhatsApp Group
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};