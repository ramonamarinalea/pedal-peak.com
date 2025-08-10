import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: "export" to enable serverless functions for route builder
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true, // Required for static export but removed since we need API routes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
