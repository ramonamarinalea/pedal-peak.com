// app/events/page.tsx
"use client";

import { useEffect } from "react";

export default function EventsRedirectPage() {
  useEffect(() => {
    // Redirect to the Vercel events platform
    window.location.replace(
      "https://cycling-events-platform.vercel.app/events",
    );
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto mb-4 h-32 w-32 animate-spin rounded-full border-b-2 border-black"></div>
        <h1
          className="mb-2 text-2xl font-bold text-black"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Redirecting to Events Platform...
        </h1>
        <p className="mb-4 text-gray-600">
          Taking you to our comprehensive events platform
        </p>
        <p className="text-sm text-gray-500">
          If you are not redirected automatically,
          <a
            href="https://cycling-events-platform.vercel.app/events"
            className="ml-1 text-black underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
