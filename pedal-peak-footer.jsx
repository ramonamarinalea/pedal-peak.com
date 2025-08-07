import React from "react";

/**
 * PEDAL PEAK FOOTER COMPONENT
 * Copy this into Framer as a Code Component
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Find Rides", href: "#rides" },
      { name: "Host a Ride", href: "#host" },
      { name: "Join Groups", href: "#groups" },
      { name: "Plan Travel", href: "#travel" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Safety Guidelines", href: "#safety" },
      { name: "Contact Us", href: "#contact" },
      { name: "Report Issue", href: "#report" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Blog", href: "#blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Community Guidelines", href: "#guidelines" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "#instagram",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.99.013 6.756.072 5.526.13 4.71.333 3.991.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.139C.333 4.858.131 5.674.072 6.904.013 8.138 0 8.544 0 12.017c0 3.470.013 3.877.072 5.11.059 1.233.261 2.049.558 2.768.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.719.297 1.535.499 2.768.558C7.99 23.987 8.396 24 11.017 24h1c3.473 0 3.877-.013 5.11-.072 1.233-.059 2.049-.261 2.768-.558.789-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.719.499-1.535.558-2.768.059-1.233.072-1.64.072-5.110 0-3.473-.013-3.877-.072-5.11-.059-1.233-.262-2.049-.558-2.768-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.719-.297-1.535-.499-2.768-.558C15.878.013 15.47 0 12.017 0zM12 5.838A6.162 6.162 0 1018.162 12 6.162 6.162 0 0012 5.838zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#twitter",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#facebook",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Strava",
      href: "#strava",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.917" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Signup */}
      <div className="border-b border-gray-800">
        <div className="container py-12">
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <h3 className="heading-3 text-white">Stay in the Loop</h3>
            <p className="body-regular text-gray-300">
              Get weekly ride updates, travel deals, and cycling tips delivered
              to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-green-500 focus:outline-none"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
            <p className="body-small text-gray-400">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600">
                <span className="text-sm font-bold text-white">🚴</span>
              </div>
              <span className="heading-4 text-white">pedal-peak</span>
            </div>
            <p className="body-regular max-w-sm text-gray-300">
              Connecting cyclists worldwide through shared adventures,
              expert-led tours, and an inclusive community that celebrates the
              joy of riding.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gray-700 hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="body-regular font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="body-small text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="body-small text-gray-400">
              © {currentYear} Pedal Peak. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="body-small text-gray-400">
                Made with ❤️ for cyclists
              </span>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="body-small">Powered by</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-400">🌱</span>
                  <span className="body-small">Carbon neutral shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
