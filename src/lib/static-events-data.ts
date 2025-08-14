// Static cycling events data for GitHub Pages
export interface CyclingEvent {
  id: string
  title: string
  description: string
  type: 'TRAINING_CAMP' | 'CYCLING_HOLIDAY' | 'WEEKEND_GETAWAY' | 'TOUR' | 'EXPEDITION'
  country: string
  city: string | null
  region: string | null
  startDate: string
  endDate: string
  duration: number
  priceMin: number | null
  priceMax: number | null
  currency: string
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT'
  terrain: string[]
  maxParticipants: number | null
  coverImage: string | null
  websiteUrl: string | null
  bookingUrl: string | null
  organizer: {
    companyName: string
    verified: boolean
  } | null
  featured: boolean
}

// Static events data - copied from the cycling events platform
export const staticEventsData: CyclingEvent[] = [
  {
    id: "swiss-cycling-alpenbrevet-2025",
    title: "Swiss Cycling Alpenbrevet 2025",
    description: "The ultimate challenge for experienced cyclists. Conquer the legendary Swiss Alpine passes in this prestigious one-day cycling marathon. Three different routes available: 174km, 131km, and 67km.",
    type: "TOUR",
    country: "Switzerland",
    city: "Andermatt",
    region: "Uri",
    startDate: "2025-08-30",
    endDate: "2025-08-30",
    duration: 1,
    priceMin: 85,
    priceMax: 85,
    currency: "CHF",
    difficulty: "EXPERT",
    terrain: ["road"],
    maxParticipants: 7000,
    coverImage: "https://alpenbrevet.ch/assets/images/alpenbrevet-hero.jpg",
    websiteUrl: "https://www.alpenbrevet.ch/",
    bookingUrl: "https://www.alpenbrevet.ch/anmeldung",
    organizer: {
      companyName: "Swiss Cycling",
      verified: true
    },
    featured: true
  },
  {
    id: "swiss-mountain-pass-challenge-weekend-2025",
    title: "Swiss Mountain Pass Challenge Weekend",
    description: "A challenging weekend for experienced road cyclists conquering the most beautiful Swiss mountain passes. Professional support, accommodation, and guided rides included.",
    type: "WEEKEND_GETAWAY",
    country: "Switzerland",
    city: "Interlaken",
    region: "Bernese Oberland",
    startDate: "2025-07-12",
    endDate: "2025-07-13",
    duration: 2,
    priceMin: 450,
    priceMax: 450,
    currency: "CHF",
    difficulty: "EXPERT",
    terrain: ["road"],
    maxParticipants: 30,
    coverImage: "https://images.squarespace-cdn.com/content/v1/5b8c8c8a4611a0a67c3c3c3c/mountain-pass-cycling.jpg",
    websiteUrl: "https://www.kudoscycling.com/swiss-passes",
    bookingUrl: "https://www.kudoscycling.com/swiss-passes",
    organizer: {
      companyName: "Kudos Cycling",
      verified: true
    },
    featured: false
  },
  {
    id: "swiss-alps-weekend-gravel-explorer-2025",
    title: "Swiss Alps Weekend Gravel Explorer",
    description: "Perfect introduction to gravel cycling in the Swiss Alps. Explore scenic gravel paths and quiet mountain roads with experienced guides. Suitable for beginners to gravel riding.",
    type: "WEEKEND_GETAWAY",
    country: "Switzerland",
    city: "Zermatt",
    region: "Valais",
    startDate: "2025-06-14",
    endDate: "2025-06-15",
    duration: 2,
    priceMin: 320,
    priceMax: 320,
    currency: "CHF",
    difficulty: "BEGINNER",
    terrain: ["gravel", "road"],
    maxParticipants: 20,
    coverImage: "https://sunvelo.com/images/swiss-gravel-weekend.jpg",
    websiteUrl: "https://sunvelo.com/gravel-weekend",
    bookingUrl: "https://sunvelo.com/gravel-weekend",
    organizer: {
      companyName: "SunVelo",
      verified: true
    },
    featured: false
  },
  {
    id: "gravel-ride-race-bern-2025",
    title: "Gravel Ride & Race Bern 2025",
    description: "Join the Swiss gravel cycling community for an exciting day of gravel riding around Bern. Multiple distance options available for all skill levels. Post-ride celebration included.",
    type: "TOUR",
    country: "Switzerland",
    city: "Bern",
    region: "Bern",
    startDate: "2025-09-07",
    endDate: "2025-09-07",
    duration: 1,
    priceMin: 65,
    priceMax: 95,
    currency: "CHF",
    difficulty: "INTERMEDIATE",
    terrain: ["gravel", "road"],
    maxParticipants: 500,
    coverImage: "https://ridegravel.ch/wp-content/uploads/2024/gravel-bern-hero.jpg",
    websiteUrl: "https://ridegravel.ch/events/bern-2025",
    bookingUrl: "https://ridegravel.ch/events/bern-2025",
    organizer: {
      companyName: "Gravel Ride & Race Bern",
      verified: true
    },
    featured: true
  }
];

// Past events for SEO
export const staticPastEventsData: CyclingEvent[] = [
  {
    id: "swiss-alps-gravel-camp-2024",
    title: "Swiss Alps Gravel Camp 2024",
    description: "A week-long gravel cycling camp in the Swiss Alps exploring the most scenic gravel routes.",
    type: "TRAINING_CAMP",
    country: "Switzerland",
    city: "Davos",
    region: "Grisons",
    startDate: "2024-08-15",
    endDate: "2024-08-22",
    duration: 7,
    priceMin: 1450,
    priceMax: 1450,
    currency: "CHF",
    difficulty: "INTERMEDIATE",
    terrain: ["gravel"],
    maxParticipants: 16,
    coverImage: null,
    websiteUrl: "https://sunvelo.com/camps/alps-gravel-2024",
    bookingUrl: null,
    organizer: {
      companyName: "SunVelo",
      verified: true
    },
    featured: false
  },
  {
    id: "tour-de-suisse-amateur-2024",
    title: "Tour de Suisse Amateur 2024",
    description: "Experience selected stages of the Tour de Suisse route with full support and professional guidance.",
    type: "TOUR",
    country: "Switzerland",
    city: "Basel",
    region: "Various",
    startDate: "2024-06-10",
    endDate: "2024-06-16",
    duration: 7,
    priceMin: 2200,
    priceMax: 2200,
    currency: "CHF",
    difficulty: "ADVANCED",
    terrain: ["road"],
    maxParticipants: 50,
    coverImage: null,
    websiteUrl: "https://www.kudoscycling.com/tour-de-suisse",
    bookingUrl: null,
    organizer: {
      companyName: "Kudos Cycling",
      verified: true
    },
    featured: false
  }
];

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function formatDateRange(startDate: string, endDate: string): string {
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  const startMonth = start.toLocaleDateString('en-US', { month: 'long' }).toUpperCase()
  const endMonth = end.toLocaleDateString('en-US', { month: 'long' }).toUpperCase()
  const startDay = start.getDate()
  const endDay = end.getDate()
  const year = start.getFullYear()
  
  if (start.toDateString() === end.toDateString()) {
    return `${startMonth} ${startDay}, ${year}`
  }
  
  if (start.getMonth() === end.getMonth()) {
    return `${startMonth} ${startDay}-${endDay}, ${year}`
  }
  
  return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`
}

// Filter future events
export function getFutureEvents(): CyclingEvent[] {
  const now = new Date()
  return staticEventsData.filter(event => new Date(event.startDate) >= now)
}

// Filter past events
export function getPastEvents(): CyclingEvent[] {
  const now = new Date()
  const pastFromCurrent = staticEventsData.filter(event => new Date(event.startDate) < now)
  return [...pastFromCurrent, ...staticPastEventsData]
}