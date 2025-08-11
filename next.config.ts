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
    ],
  },
};

export default nextConfig;
