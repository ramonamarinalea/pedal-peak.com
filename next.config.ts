import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages
  trailingSlash: true, // Add trailing slashes for GitHub Pages
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "d3nn82uaxijpm6.cloudfront.net", // Strava route images
      },
      {
        protocol: "https",
        hostname: "staticmap.co", // Static map service for route previews
      },
    ],
  },
};

export default nextConfig;
