import React, { useState } from "react";

/**
 * PEDAL PEAK NAVIGATION COMPONENT
 * Copy this into Framer as a Code Component
 */

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Rides", href: "#rides" },
    { name: "Travel", href: "#travel" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600">
              <span className="text-sm font-bold text-white">🚴</span>
            </div>
            <span className="heading-4" style={{ margin: 0 }}>
              pedal-peak
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="body-regular font-medium text-gray-600 transition-colors hover:text-gray-900"
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center space-x-3 md:flex">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Join Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in border-t border-gray-200 py-4 md:hidden">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="body-regular block font-medium text-gray-600 transition-colors hover:text-gray-900"
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <button className="btn btn-ghost w-full">Sign In</button>
                <button className="btn btn-primary w-full">Join Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
