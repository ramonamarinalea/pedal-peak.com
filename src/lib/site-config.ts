import { env } from "@/env.mjs";

export const siteConfig = {
  title: "Pedal Peak - Cycling Community & Adventures",
  description:
    "Join Pedal Peak's cycling community for epic rides, bikepacking adventures, and good vibes. Explore tarmac routes, dirt trails, and connect with fellow cyclists. No egos, just pure cycling joy.",
  keywords: [
    "cycling",
    "bike rides",
    "cycling community",
    "bikepacking",
    "Strava",
    "cycling events",
    "bike rental",
    "Switzerland cycling",
  ],
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || "",
};
