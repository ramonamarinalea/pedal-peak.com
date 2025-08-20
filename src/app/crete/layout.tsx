import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Crete Cycling Training Camp - October 19-26, 2025",
  description:
    "Join our exclusive 7-day cycling training camp in Crete, Greece. Experience Mediterranean coastlines, mountain climbs, and authentic Greek hospitality. Limited spots available.",
  keywords: [
    "crete cycling camp",
    "greece cycling tours",
    "cycling training camp",
    "mediterranean cycling",
    "bike tours crete",
    "cycling holidays",
  ],
  openGraph: {
    title: "Crete Cycling Training Camp - October 2025 | Pedal Peak",
    description:
      "7-day cycling adventure through Crete's stunning landscapes with expert guides and premium accommodation.",
    images: ["/images/crete/crete_hairpins.jpg"],
  },
};

export default function CreteLayout({ children }: PropsWithChildren) {
  return children;
}
