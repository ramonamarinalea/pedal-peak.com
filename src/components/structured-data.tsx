interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Pedal Peak",
  description:
    "Cycling community for epic rides, bikepacking adventures, and connecting cyclists in Switzerland",
  url: "https://pedal-peak.com",
  logo: "https://pedal-peak.com/opengraph-image.jpg",
  sameAs: ["https://www.strava.com/clubs/pedal-peak"],
  sport: "Cycling",
  location: {
    "@type": "Country",
    name: "Switzerland",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ramona.furter@icloud.com",
    contactType: "customer service",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pedal Peak - Cycling Community & Adventures",
  url: "https://pedal-peak.com",
  description:
    "Join Pedal Peak's cycling community for epic rides, bikepacking adventures, and good vibes. Explore tarmac routes, dirt trails, and connect with fellow cyclists.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://pedal-peak.com/routes?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const routeCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Swiss Cycling Routes",
  description:
    "400+ curated cycling routes in Switzerland with elevation profiles and Strava integration",
  numberOfItems: 400,
  itemListElement: {
    "@type": "SportsActivityLocation",
    name: "Swiss Cycling Routes",
    sport: "Cycling",
  },
};
