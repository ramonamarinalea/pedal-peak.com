import React, { useState, useEffect } from "react";

/**
 * PEDAL PEAK WEBSITE - REDESIGNED TO MATCH EXISTING STYLE
 * Minimalist, clean aesthetic with neutral colors and modern typography
 */

export default function PedalPeakWebsite() {
  return (
    <>
      {/* Global Styles - Matching your existing site aesthetic */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* PEDAL PEAK DESIGN SYSTEM - MINIMALIST VERSION */
        
        /* Fonts matching your site */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        /* CSS Variables - Neutral palette */
        :root {
          /* Neutral colors matching your site */
          --color-primary: #000000;
          --color-primary-soft: #1a1a1a;
          --color-secondary: #666666;
          --color-tertiary: #999999;
          --color-background: #ffffff;
          --color-background-soft: #f8f8f8;
          --color-background-warm: #fefefe;
          --color-border: #e5e5e5;
          --color-border-light: #f0f0f0;
          
          /* Typography */
          --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --font-weight-light: 300;
          --font-weight-normal: 400;
          --font-weight-medium: 500;
          --font-weight-semibold: 600;
          --font-weight-bold: 700;
          --font-weight-black: 800;
          
          /* Spacing - More generous like your site */
          --space-xs: 0.5rem;
          --space-sm: 0.75rem;
          --space-md: 1rem;
          --space-lg: 1.5rem;
          --space-xl: 2rem;
          --space-2xl: 3rem;
          --space-3xl: 4rem;
          --space-4xl: 6rem;
          --space-5xl: 8rem;
          
          /* Border radius - Subtle */
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 12px;
          --radius-xl: 16px;
          
          /* Shadows - Subtle */
          --shadow-subtle: 0 1px 3px rgba(0,0,0,0.05);
          --shadow-soft: 0 4px 12px rgba(0,0,0,0.08);
          --shadow-medium: 0 8px 24px rgba(0,0,0,0.12);
          
          /* Transitions */
          --transition-fast: 200ms ease;
          --transition-medium: 300ms ease;
          --transition-slow: 500ms ease;
        }
        
        /* Reset and base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        body {
          font-family: var(--font-primary);
          font-weight: var(--font-weight-normal);
          line-height: 1.6;
          color: var(--color-primary);
          background-color: var(--color-background);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Typography System */
        .text-hero {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: var(--font-weight-black);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        
        .text-h1 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: var(--font-weight-bold);
          line-height: 1.2;
          letter-spacing: -0.015em;
        }
        
        .text-h2 {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: var(--font-weight-bold);
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        
        .text-h3 {
          font-size: clamp(1.25rem, 2.5vw, 2rem);
          font-weight: var(--font-weight-semibold);
          line-height: 1.4;
        }
        
        .text-h4 {
          font-size: clamp(1.125rem, 2vw, 1.5rem);
          font-weight: var(--font-weight-semibold);
          line-height: 1.4;
        }
        
        .text-body-xl {
          font-size: clamp(1.125rem, 1.5vw, 1.25rem);
          line-height: 1.6;
          font-weight: var(--font-weight-normal);
        }
        
        .text-body {
          font-size: 1rem;
          line-height: 1.6;
          font-weight: var(--font-weight-normal);
        }
        
        .text-body-sm {
          font-size: 0.875rem;
          line-height: 1.5;
          font-weight: var(--font-weight-normal);
        }
        
        .text-caption {
          font-size: 0.75rem;
          line-height: 1.4;
          font-weight: var(--font-weight-medium);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* Button System - Minimalist */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-sm) var(--space-xl);
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: var(--font-weight-medium);
          text-decoration: none;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-medium);
          white-space: nowrap;
        }
        
        .btn-primary {
          background-color: var(--color-primary);
          color: white;
          border: 1px solid var(--color-primary);
        }
        
        .btn-primary:hover {
          background-color: var(--color-primary-soft);
          transform: translateY(-1px);
          box-shadow: var(--shadow-soft);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: var(--color-primary);
          border: 1px solid var(--color-border);
        }
        
        .btn-secondary:hover {
          background-color: var(--color-background-soft);
          border-color: var(--color-primary);
        }
        
        .btn-ghost {
          background-color: transparent;
          color: var(--color-secondary);
          border: none;
          padding: var(--space-sm) var(--space-md);
        }
        
        .btn-ghost:hover {
          color: var(--color-primary);
          background-color: var(--color-background-soft);
        }
        
        .btn-lg {
          padding: var(--space-md) var(--space-2xl);
          font-size: 1rem;
        }
        
        /* Card System */
        .card {
          background-color: var(--color-background);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-medium);
        }
        
        .card:hover {
          border-color: var(--color-border);
          box-shadow: var(--shadow-soft);
          transform: translateY(-2px);
        }
        
        .card-content {
          padding: var(--space-xl);
        }
        
        .card-header {
          padding: var(--space-xl);
          border-bottom: 1px solid var(--color-border-light);
        }
        
        .card-footer {
          padding: var(--space-xl);
          border-top: 1px solid var(--color-border-light);
          background-color: var(--color-background-soft);
        }
        
        /* Badge System */
        .badge {
          display: inline-flex;
          align-items: center;
          padding: var(--space-xs) var(--space-sm);
          font-size: 0.75rem;
          font-weight: var(--font-weight-medium);
          text-transform: uppercase;
          letter-spacing: 0.025em;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background-color: var(--color-background);
          color: var(--color-secondary);
        }
        
        .badge-primary {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }
        
        .badge-warning {
          background-color: #fef3c7;
          color: #92400e;
          border-color: #fcd34d;
        }
        
        .badge-success {
          background-color: #d1fae5;
          color: #065f46;
          border-color: #6ee7b7;
        }
        
        /* Layout System */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 var(--space-lg);
          }
        }
        
        .section {
          padding: var(--space-4xl) 0;
        }
        
        .section-lg {
          padding: var(--space-5xl) 0;
        }
        
        @media (max-width: 768px) {
          .section {
            padding: var(--space-3xl) 0;
          }
          .section-lg {
            padding: var(--space-4xl) 0;
          }
        }
        
        /* Grid System */
        .grid {
          display: grid;
          gap: var(--space-xl);
        }
        
        .grid-cols-1 { grid-template-columns: 1fr; }
        .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
        
        @media (max-width: 1024px) {
          .grid-cols-3 { grid-template-columns: repeat(2, 1fr); }
          .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (max-width: 768px) {
          .grid-cols-2,
          .grid-cols-3,
          .grid-cols-4 { 
            grid-template-columns: 1fr; 
          }
        }
        
        /* Flex utilities */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .gap-xs { gap: var(--space-xs); }
        .gap-sm { gap: var(--space-sm); }
        .gap-md { gap: var(--space-md); }
        .gap-lg { gap: var(--space-lg); }
        .gap-xl { gap: var(--space-xl); }
        .gap-2xl { gap: var(--space-2xl); }
        
        /* Spacing utilities */
        .space-y-xs > * + * { margin-top: var(--space-xs); }
        .space-y-sm > * + * { margin-top: var(--space-sm); }
        .space-y-md > * + * { margin-top: var(--space-md); }
        .space-y-lg > * + * { margin-top: var(--space-lg); }
        .space-y-xl > * + * { margin-top: var(--space-xl); }
        .space-y-2xl > * + * { margin-top: var(--space-2xl); }
        
        .space-x-xs > * + * { margin-left: var(--space-xs); }
        .space-x-sm > * + * { margin-left: var(--space-sm); }
        .space-x-md > * + * { margin-left: var(--space-md); }
        .space-x-lg > * + * { margin-left: var(--space-lg); }
        .space-x-xl > * + * { margin-left: var(--space-xl); }
        
        /* Text utilities */
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-tertiary { color: var(--color-tertiary); }
        .font-light { font-weight: var(--font-weight-light); }
        .font-normal { font-weight: var(--font-weight-normal); }
        .font-medium { font-weight: var(--font-weight-medium); }
        .font-semibold { font-weight: var(--font-weight-semibold); }
        .font-bold { font-weight: var(--font-weight-bold); }
        
        /* Background utilities */
        .bg-primary { background-color: var(--color-primary); }
        .bg-background { background-color: var(--color-background); }
        .bg-background-soft { background-color: var(--color-background-soft); }
        .bg-background-warm { background-color: var(--color-background-warm); }
        
        /* Border utilities */
        .border { border: 1px solid var(--color-border); }
        .border-light { border: 1px solid var(--color-border-light); }
        .border-t { border-top: 1px solid var(--color-border-light); }
        .border-b { border-bottom: 1px solid var(--color-border-light); }
        .rounded-sm { border-radius: var(--radius-sm); }
        .rounded-md { border-radius: var(--radius-md); }
        .rounded-lg { border-radius: var(--radius-lg); }
        .rounded-xl { border-radius: var(--radius-xl); }
        .rounded-full { border-radius: 9999px; }
        
        /* Shadow utilities */
        .shadow-subtle { box-shadow: var(--shadow-subtle); }
        .shadow-soft { box-shadow: var(--shadow-soft); }
        .shadow-medium { box-shadow: var(--shadow-medium); }
        
        /* Position utilities */
        .relative { position: relative; }
        .absolute { position: absolute; }
        .fixed { position: fixed; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .bottom-0 { bottom: 0; }
        .z-10 { z-index: 10; }
        .z-20 { z-index: 20; }
        .z-30 { z-index: 30; }
        .z-40 { z-index: 40; }
        .z-50 { z-index: 50; }
        
        /* Width/Height utilities */
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .min-h-screen { min-height: 100vh; }
        .max-w-xs { max-width: 20rem; }
        .max-w-sm { max-width: 24rem; }
        .max-w-md { max-width: 28rem; }
        .max-w-lg { max-width: 32rem; }
        .max-w-xl { max-width: 36rem; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-5xl { max-width: 64rem; }
        .max-w-6xl { max-width: 72rem; }
        .max-w-none { max-width: none; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        /* Display utilities */
        .block { display: block; }
        .inline { display: inline; }
        .inline-block { display: inline-block; }
        .hidden { display: none; }
        
        /* Responsive utilities */
        @media (max-width: 768px) {
          .md\\:hidden { display: none; }
          .md\\:block { display: block; }
          .md\\:flex { display: flex; }
        }
        
        @media (min-width: 769px) {
          .mobile\\:hidden { display: none; }
          .mobile\\:block { display: block; }
          .mobile\\:flex { display: flex; }
        }
        
        /* Form styles */
        input[type="text"],
        input[type="email"],
        input[type="date"],
        textarea,
        select {
          width: 100%;
          padding: var(--space-sm) var(--space-md);
          font-family: inherit;
          font-size: 0.875rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background-color: var(--color-background);
          color: var(--color-primary);
          transition: all var(--transition-fast);
        }
        
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="date"]:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
        }
        
        input::placeholder,
        textarea::placeholder {
          color: var(--color-tertiary);
        }
        
        /* Hover and focus states */
        .hover\\:text-primary:hover { color: var(--color-primary); }
        .hover\\:bg-soft:hover { background-color: var(--color-background-soft); }
        .hover\\:shadow-soft:hover { box-shadow: var(--shadow-soft); }
        .hover\\:transform:hover { transform: translateY(-1px); }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slide-in {
          animation: slideIn 0.6s ease-out;
        }
        
        /* Special image placeholder styles */
        .image-placeholder {
          background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-tertiary);
          font-size: var(--space-md);
          font-weight: var(--font-weight-medium);
          border-radius: var(--radius-lg);
        }
        
        /* Hero image aspect ratio */
        .aspect-video { aspect-ratio: 16 / 9; }
        .aspect-square { aspect-ratio: 1 / 1; }
        .aspect-4-3 { aspect-ratio: 4 / 3; }
        .aspect-3-2 { aspect-ratio: 3 / 2; }
        
        /* Navigation specific styles */
        .nav-backdrop {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        /* Progress bar */
        .progress-bar {
          height: 2px;
          background-color: var(--color-border-light);
          border-radius: 1px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background-color: var(--color-primary);
          transition: width 0.3s ease;
        }
        
        /* Mobile menu animation */
        .mobile-menu-enter {
          transform: translateY(-10px);
          opacity: 0;
        }
        
        .mobile-menu-enter-active {
          transform: translateY(0);
          opacity: 1;
          transition: all 200ms ease;
        }
        
        /* Stats animation */
        .stat-number {
          font-variant-numeric: tabular-nums;
        }
      `,
        }}
      />

      {/* Main Website */}
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <UpcomingRides />
        <TravelDestinations />
        <CommunitySection />
        <Footer />
      </div>
    </>
  );
}

// Navigation Component - Minimalist style
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Rides", href: "#rides" },
    { name: "Travel", href: "#travel" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header className="nav-backdrop border-light sticky top-0 z-50 w-full border-b">
      <div className="container">
        <nav
          className="flex items-center justify-between"
          style={{ height: "72px" }}
        >
          {/* Logo */}
          <div className="gap-md flex items-center">
            <div className="text-h4 font-bold">pedal-peak</div>
          </div>

          {/* Desktop Navigation */}
          <div className="mobile:hidden gap-xl flex items-center">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-body text-secondary hover:text-primary font-medium transition-colors"
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="mobile:hidden gap-md flex items-center">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-primary">Join Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ width: "44px", height: "44px" }}
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {isMobileMenuOpen ? (
                <>
                  <path d="M18 2L2 14M2 2l16 12" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M1 2h18M1 8h18M1 14h18" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="border-light py-lg animate-fade-in border-t md:hidden">
            <div className="space-y-lg">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body text-secondary hover:text-primary block font-medium transition-colors"
                  style={{ textDecoration: "none" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-lg space-y-md border-light border-t">
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

// Hero Section - Clean and minimal
function HeroSection() {
  return (
    <section className="section-lg bg-background-warm">
      <div className="container">
        <div className="gap-4xl grid grid-cols-2 items-center">
          {/* Content Side */}
          <div className="space-y-2xl animate-fade-in">
            <div className="space-y-xl">
              <h1 className="text-hero text-primary">
                Find Your Next Adventure
              </h1>
              <p className="text-body-xl text-secondary max-w-lg">
                From chill loops to epic escapes. Join a community of cyclists
                who ride for the love of it. No egos, just good vibes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="gap-md flex flex-col md:flex-row">
              <button className="btn btn-primary btn-lg">Find Rides</button>
              <button className="btn btn-secondary btn-lg">Plan Trip</button>
            </div>

            {/* Quick Stats */}
            <div className="gap-2xl pt-xl flex items-center">
              <div>
                <div className="text-h3 text-primary font-bold">1,247</div>
                <div className="text-caption text-secondary">Active Riders</div>
              </div>
              <div>
                <div className="text-h3 text-primary font-bold">23</div>
                <div className="text-caption text-secondary">Cities</div>
              </div>
              <div>
                <div className="text-h3 text-primary font-bold">156</div>
                <div className="text-caption text-secondary">Routes</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="animate-fade-in relative">
            <div className="aspect-4-3 image-placeholder">
              <div className="space-y-md text-center">
                <div style={{ fontSize: "3rem" }}>🚴‍♀️</div>
                <div className="text-body-sm text-secondary">
                  Hero cycling image
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="-top-lg -right-lg bg-background shadow-soft p-lg absolute rounded-lg">
              <div className="gap-sm flex items-center">
                <div className="bg-primary h-2 w-2 rounded-full"></div>
                <span className="text-body-sm font-medium">Live tracking</span>
              </div>
            </div>

            <div className="-bottom-lg -left-lg bg-background shadow-soft p-lg absolute rounded-lg">
              <div className="gap-sm flex items-center">
                <span style={{ fontSize: "1.25rem" }}>⭐</span>
                <span className="text-body-sm font-medium">4.9 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ride Card Component - Clean design
function RideCard({ ride }) {
  const getDifficultyBadge = (difficulty) => {
    const variants = {
      Easy: "badge-success",
      Moderate: "badge-warning",
      Hard: "badge",
      Expert: "badge",
    };
    return `badge ${variants[difficulty] || "badge"}`;
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="gap-md flex items-start justify-between">
          <div className="space-y-xs">
            <h4 className="text-h4 font-semibold">{ride.title}</h4>
            <p className="text-body-sm text-secondary">
              {ride.date} • {ride.time}
            </p>
          </div>
          <div className={getDifficultyBadge(ride.difficulty)}>
            {ride.difficulty}
          </div>
        </div>
      </div>

      <div className="card-content space-y-lg">
        {/* Ride Details */}
        <div className="gap-lg text-body-sm text-secondary flex flex-wrap items-center">
          <span className="gap-xs flex items-center">
            <span>🚴</span>
            <span>{ride.rideType}</span>
          </span>
          <span>{ride.distance}mi</span>
          <span>{ride.elevation}ft</span>
        </div>

        {/* Location */}
        <p className="text-body-sm text-secondary">📍 {ride.location}</p>

        {/* Participants */}
        <div className="space-y-sm">
          <div className="flex items-center justify-between">
            <span className="text-body-sm text-secondary">
              {ride.currentRiders}/{ride.maxRiders} riders
            </span>
            <span className="text-body-sm font-medium">
              {Math.round((ride.currentRiders / ride.maxRiders) * 100)}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(ride.currentRiders / ride.maxRiders) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="gap-md flex">
          <button className="btn btn-secondary flex-1">Details</button>
          <button className="btn btn-primary flex-1">Join Ride</button>
        </div>
      </div>
    </div>
  );
}

// Upcoming Rides Section
function UpcomingRides() {
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
      currentRiders: 8,
      maxRiders: 15,
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
      currentRiders: 12,
      maxRiders: 20,
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
      currentRiders: 15,
      maxRiders: 25,
    },
  ];

  return (
    <section className="section bg-background" id="rides">
      <div className="container">
        <div className="space-y-lg mb-4xl mx-auto max-w-3xl text-center">
          <h2 className="text-h1">Upcoming Rides</h2>
          <p className="text-body-xl text-secondary">
            Join riders in your area for your next adventure. All skill levels
            welcome.
          </p>
        </div>

        {/* Rides Grid */}
        <div className="mb-3xl grid grid-cols-3">
          {sampleRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn btn-secondary btn-lg">View All Rides</button>
        </div>
      </div>
    </section>
  );
}

// Travel Destinations Section
function TravelDestinations() {
  const [activeTab, setActiveTab] = useState("destinations");

  const destinations = [
    {
      id: 1,
      name: "Mallorca",
      country: "Spain",
      description:
        "Mediterranean cycling paradise with stunning coastal roads.",
      duration: "7 days",
      priceFrom: 1899,
      difficulty: "Moderate",
      highlights: ["Coastal views", "Historic towns", "Perfect weather"],
    },
    {
      id: 2,
      name: "Alpine Passes",
      country: "Switzerland",
      description: "Conquer legendary mountain passes through Alpine scenery.",
      duration: "10 days",
      priceFrom: 2499,
      difficulty: "Hard",
      highlights: ["Epic climbs", "Mountain views", "Swiss hospitality"],
    },
    {
      id: 3,
      name: "Tuscany",
      country: "Italy",
      description: "Roll through vineyards and hilltop towns.",
      duration: "8 days",
      priceFrom: 2199,
      difficulty: "Moderate",
      highlights: ["Wine tastings", "Rolling hills", "Renaissance art"],
    },
  ];

  return (
    <section className="section bg-background-soft" id="travel">
      <div className="container">
        {/* Header */}
        <div className="space-y-2xl mb-4xl mx-auto max-w-4xl text-center">
          <div className="space-y-lg">
            <h2 className="text-h1">Cycling Adventures Worldwide</h2>
            <p className="text-body-xl text-secondary">
              From Mediterranean coastlines to Alpine peaks, discover the
              world's best cycling destinations with expert guides.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-background border-light p-xs rounded-lg border">
              <div className="flex">
                <button
                  className={`px-lg py-sm text-body-sm rounded-md font-medium transition-colors ${
                    activeTab === "destinations"
                      ? "bg-primary text-white"
                      : "text-secondary hover:text-primary"
                  }`}
                  onClick={() => setActiveTab("destinations")}
                >
                  Destinations
                </button>
                <button
                  className={`px-lg py-sm text-body-sm rounded-md font-medium transition-colors ${
                    activeTab === "shipping"
                      ? "bg-primary text-white"
                      : "text-secondary hover:text-primary"
                  }`}
                  onClick={() => setActiveTab("shipping")}
                >
                  Bike Shipping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        {activeTab === "destinations" && (
          <div className="space-y-3xl">
            <div className="grid grid-cols-3">
              {destinations.map((destination) => (
                <div key={destination.id} className="card">
                  {/* Image Header */}
                  <div className="aspect-3-2 image-placeholder">
                    <div className="space-y-sm text-center">
                      <div style={{ fontSize: "2rem" }}>🌍</div>
                      <div className="text-body-sm text-secondary">
                        {destination.name} photo
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-content space-y-lg">
                    <div className="space-y-sm">
                      <div className="flex items-start justify-between">
                        <h3 className="text-h4 font-semibold">
                          {destination.name}
                        </h3>
                        <span className="text-body-sm text-secondary">
                          {destination.country}
                        </span>
                      </div>
                      <p className="text-body-sm text-secondary">
                        {destination.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-md">
                      <div className="text-body-sm flex items-center justify-between">
                        <span>📅 {destination.duration}</span>
                        <span className="badge">{destination.difficulty}</span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-sm">
                        <div className="text-caption text-secondary">
                          Highlights
                        </div>
                        <div className="gap-xs flex flex-wrap">
                          {destination.highlights.map((highlight, index) => (
                            <span key={index} className="badge text-xs">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="pt-md border-light flex items-end justify-between border-t">
                        <div>
                          <div className="text-body-sm text-secondary">
                            Starting from
                          </div>
                          <div className="text-h4 text-primary font-bold">
                            ${destination.priceFrom.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-body-sm text-secondary">
                          per person
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="card-footer">
                    <button className="btn btn-primary w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="btn btn-secondary btn-lg">
                View All Destinations
              </button>
            </div>
          </div>
        )}

        {/* Bike Shipping Calculator */}
        {activeTab === "shipping" && (
          <div className="mx-auto max-w-2xl">
            <div className="card">
              <div className="card-header text-center">
                <h3 className="text-h3 font-semibold">
                  Bike Shipping Calculator
                </h3>
                <p className="text-body text-secondary mt-sm">
                  Ship your bike safely and affordably to any destination
                </p>
              </div>

              <div className="card-content space-y-xl">
                <div className="gap-lg grid grid-cols-2">
                  <div className="space-y-sm">
                    <label className="text-body-sm text-primary font-medium">
                      From
                    </label>
                    <input type="text" placeholder="San Francisco, CA" />
                  </div>

                  <div className="space-y-sm">
                    <label className="text-body-sm text-primary font-medium">
                      To
                    </label>
                    <input type="text" placeholder="Palma, Mallorca" />
                  </div>
                </div>

                <div className="gap-lg grid grid-cols-2">
                  <div className="space-y-sm">
                    <label className="text-body-sm text-primary font-medium">
                      Pickup Date
                    </label>
                    <input type="date" />
                  </div>

                  <div className="space-y-sm">
                    <label className="text-body-sm text-primary font-medium">
                      Return Date
                    </label>
                    <input type="date" />
                  </div>
                </div>

                <button className="btn btn-primary btn-lg w-full">
                  Calculate Shipping Cost
                </button>

                {/* Sample Results */}
                <div className="bg-background-soft border-light p-lg space-y-md rounded-lg border">
                  <div className="flex items-center justify-between">
                    <span className="text-body font-medium">
                      Estimated Cost:
                    </span>
                    <span className="text-h4 text-primary font-bold">$245</span>
                  </div>
                  <div className="space-y-sm text-body-sm text-secondary">
                    <div className="flex justify-between">
                      <span>Delivery Time:</span>
                      <span>3-5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance:</span>
                      <span>✓ Included ($2,000)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tracking:</span>
                      <span>✓ Real-time updates</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary w-full">
                  Book Shipping Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Community Section
function CommunitySection() {
  const [counters, setCounters] = useState({
    riders: 0,
    cities: 0,
    routes: 0,
    rides: 0,
  });

  useEffect(() => {
    const targets = { riders: 1247, cities: 23, routes: 156, rides: 3248 };
    const duration = 2000;
    const increment = 20;

    const intervals = {};
    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const step = target / (duration / increment);

      intervals[key] = setInterval(() => {
        setCounters((prev) => {
          const newValue = Math.min(prev[key] + step, target);
          if (newValue >= target) clearInterval(intervals[key]);
          return { ...prev, [key]: Math.floor(newValue) };
        });
      }, increment);
    });

    return () => Object.values(intervals).forEach(clearInterval);
  }, []);

  return (
    <section className="section bg-background" id="community">
      <div className="container">
        {/* Header */}
        <div className="space-y-lg mb-4xl mx-auto max-w-3xl text-center">
          <h2 className="text-h1">Join Our Growing Community</h2>
          <p className="text-body-xl text-secondary">
            Thousands of cyclists have found their tribe with Pedal Peak.
            Discover new routes, make friends, and push your limits together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-4xl grid grid-cols-4">
          <div className="space-y-md text-center">
            <div className="text-h1 text-primary stat-number font-bold">
              {counters.riders.toLocaleString()}
            </div>
            <div className="text-caption text-secondary">Active Riders</div>
          </div>

          <div className="space-y-md text-center">
            <div className="text-h1 text-primary stat-number font-bold">
              {counters.cities}
            </div>
            <div className="text-caption text-secondary">Cities</div>
          </div>

          <div className="space-y-md text-center">
            <div className="text-h1 text-primary stat-number font-bold">
              {counters.routes}
            </div>
            <div className="text-caption text-secondary">Routes</div>
          </div>

          <div className="space-y-md text-center">
            <div className="text-h1 text-primary stat-number font-bold">
              {counters.rides.toLocaleString()}
            </div>
            <div className="text-caption text-secondary">Rides Completed</div>
          </div>
        </div>

        {/* Community Features */}
        <div className="bg-background-soft p-3xl rounded-xl">
          <div className="gap-3xl grid grid-cols-2 items-center">
            <div className="space-y-2xl">
              <h3 className="text-h2 font-semibold">
                Why Riders Love Pedal Peak
              </h3>
              <div className="space-y-lg">
                {[
                  {
                    title: "Inclusive Community",
                    desc: "All skill levels welcome, from beginners to pros",
                  },
                  {
                    title: "Safety First",
                    desc: "Experienced ride leaders and safety protocols",
                  },
                  {
                    title: "Expert Routes",
                    desc: "Carefully curated rides for every preference",
                  },
                  {
                    title: "Global Adventures",
                    desc: "From local rides to international cycling tours",
                  },
                ].map((feature, index) => (
                  <div key={index} className="gap-md flex items-start">
                    <div className="bg-primary mt-xs flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-xs text-white">✓</span>
                    </div>
                    <div>
                      <div className="text-body font-medium">
                        {feature.title}
                      </div>
                      <div className="text-body-sm text-secondary">
                        {feature.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-xl">
              {/* Testimonial */}
              <div className="bg-background shadow-soft p-xl rounded-lg">
                <div className="gap-md mb-lg flex items-center">
                  <div className="bg-background-soft flex h-12 w-12 items-center justify-center rounded-full">
                    <span className="text-primary font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="text-body font-medium">Sarah Martinez</div>
                    <div className="text-body-sm text-secondary">
                      Ride Leader • 47 rides
                    </div>
                  </div>
                </div>
                <p className="text-body text-secondary mb-md italic">
                  "I've met some of my best friends through Pedal Peak. The
                  community is incredibly welcoming, and there's always a ride
                  that matches my mood and fitness level."
                </p>
                <div className="text-body-sm text-secondary">⭐⭐⭐⭐⭐</div>
              </div>

              {/* CTA */}
              <div className="space-y-sm text-center">
                <button className="btn btn-primary btn-lg w-full">
                  Join the Community
                </button>
                <p className="text-body-sm text-secondary">
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

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    Platform: ["Find Rides", "Host a Ride", "Join Groups", "Plan Travel"],
    Support: ["Help Center", "Safety Guidelines", "Contact Us", "Report Issue"],
    Company: ["About Us", "Careers", "Press Kit", "Blog"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Guidelines",
    ],
  };

  return (
    <footer className="bg-background-soft border-light border-t">
      {/* Newsletter */}
      <div className="border-light border-b">
        <div className="py-3xl container">
          <div className="space-y-xl mx-auto max-w-2xl text-center">
            <h3 className="text-h3 font-semibold">Stay in the Loop</h3>
            <p className="text-body text-secondary">
              Get weekly ride updates, travel deals, and cycling tips delivered
              to your inbox.
            </p>
            <div className="gap-md mx-auto flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <p className="text-body-sm text-secondary">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-3xl container">
        <div className="gap-3xl grid grid-cols-6">
          {/* Brand */}
          <div className="space-y-xl col-span-2">
            <div className="text-h4 font-bold">pedal-peak</div>
            <p className="text-body text-secondary max-w-sm">
              Connecting cyclists worldwide through shared adventures,
              expert-led tours, and an inclusive community.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="space-y-lg">
              <h4 className="text-body font-semibold">{title}</h4>
              <ul className="space-y-md">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-body-sm text-secondary hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-light border-t">
        <div className="py-lg container">
          <div className="flex items-center justify-between">
            <p className="text-body-sm text-secondary">
              © {currentYear} Pedal Peak. All rights reserved.
            </p>
            <p className="text-body-sm text-secondary">
              Made with ❤️ for cyclists
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
