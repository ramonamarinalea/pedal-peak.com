import { AmazonProduct } from "./amazon-affiliate";

/**
 * Curated cycling products for Pedal Peak affiliate recommendations
 *
 * Note: Replace ASINs with actual products once you have your Amazon Associates account
 * These are example ASINs for popular cycling products
 */

export const cyclingProducts: AmazonProduct[] = [
  // Bike Transport & Travel
  {
    asin: "45E9Rm9",
    title: "EVOC Bike Travel Bag",
    description:
      "Premium padded bike travel case for safe airline transport. Perfect for cycling adventures worldwide.",
    category: "bike-transport",
    imageUrl: "https://m.media-amazon.com/images/I/71XnNZ8DfDL._AC_SL1500_.jpg",
    estimatedPrice: "$299.99",
    customLink: "https://amzn.to/45E9Rm9",
  },
  {
    asin: "45E9Rm9",
    title: "Thule RoundTrip Transition",
    description:
      "Hard case bike transport solution with integrated wheels and robust protection.",
    category: "bike-transport",
    imageUrl: "https://m.media-amazon.com/images/I/71fE1mJdMLLS1500_.jpg",
    estimatedPrice: "$699.99",
    customLink: "https://amzn.to/45E9Rm9",
  },

  // Cycling Gear & Clothing
  {
    asin: "B08QF7H6TN",
    title: "Pearl Izumi Cycling Shorts",
    description:
      "Premium padded cycling shorts for long-distance comfort on mountain and road rides.",
    category: "cycling-gear",
    imageUrl: "https://m.media-amazon.com/images/I/71gHnw7KGPL._AC_UX679_.jpg",
    estimatedPrice: "$89.99",
  },
  {
    asin: "B07QQ8RFTR",
    title: "GIRO Register MIPS Helmet",
    description:
      "Lightweight cycling helmet with MIPS technology for enhanced safety on all terrain.",
    category: "cycling-gear",
    imageUrl: "https://m.media-amazon.com/images/I/71wGdGWbOzL._AC_UX679_.jpg",
    estimatedPrice: "$49.99",
  },
  {
    asin: "B088T5RBCP",
    title: "Castelli Cycling Jersey",
    description:
      "Professional-grade cycling jersey with moisture-wicking fabric and aerodynamic fit.",
    category: "cycling-gear",
    imageUrl: "https://m.media-amazon.com/images/I/61JZs8U7o8L._AC_UX679_.jpg",
    estimatedPrice: "$129.99",
  },

  // Bike Maintenance
  {
    asin: "B000OZFJRY",
    title: "Park Tool PCS-10 Repair Stand",
    description:
      "Professional bike repair stand for home mechanics. Essential for proper bike maintenance.",
    category: "maintenance",
    imageUrl: "https://m.media-amazon.com/images/I/61b8wWkxz0L._AC_SL1000_.jpg",
    estimatedPrice: "$199.99",
  },
  {
    asin: "B000BR3ZVS",
    title: "Park Tool Bike Tool Kit",
    description:
      "Complete bike tool set for on-the-go repairs and home maintenance.",
    category: "maintenance",
    imageUrl: "https://m.media-amazon.com/images/I/81QvDk4YuZL._AC_SL1500_.jpg",
    estimatedPrice: "$79.99",
  },

  // Cycling Accessories
  {
    asin: "B07PQBCGDX",
    title: "Garmin Edge 130 Plus",
    description:
      "GPS cycling computer with navigation and performance tracking for serious cyclists.",
    category: "accessories",
    imageUrl: "https://m.media-amazon.com/images/I/61rfJMrXCUL._AC_SL1500_.jpg",
    estimatedPrice: "$199.99",
  },
  {
    asin: "B083QF9N4X",
    title: "Topeak Midloader Bike Bag",
    description:
      "Frame bag for bikepacking adventures. Perfect for long-distance cycling trips.",
    category: "accessories",
    imageUrl: "https://m.media-amazon.com/images/I/81CjHjwLCRL._AC_SL1500_.jpg",
    estimatedPrice: "$49.99",
  },
  {
    asin: "B07VG6QNXN",
    title: "Wahoo KICKR Core",
    description:
      "Smart indoor bike trainer for year-round training. Compatible with training apps.",
    category: "accessories",
    imageUrl: "https://m.media-amazon.com/images/I/71NzSqNFWPL._AC_SL1500_.jpg",
    estimatedPrice: "$899.99",
  },

  // Nutrition & Hydration
  {
    asin: "B000FN4FHK",
    title: "CamelBak Podium Bottle",
    description:
      "Professional cycling water bottle with easy-squeeze design for hydration on the go.",
    category: "nutrition",
    imageUrl: "https://m.media-amazon.com/images/I/61zNUd9hHpL._AC_SL1500_.jpg",
    estimatedPrice: "$12.99",
  },
  {
    asin: "B07C4TKR59",
    title: "GU Energy Gel Variety Pack",
    description:
      "Energy gels for endurance cycling. Essential fuel for long rides and races.",
    category: "nutrition",
    imageUrl: "https://m.media-amazon.com/images/I/817CfRfPJKL._AC_SL1500_.jpg",
    estimatedPrice: "$24.99",
  },
];

/**
 * Get products by category
 */
export function getProductsByCategory(
  category: AmazonProduct["category"],
): AmazonProduct[] {
  return cyclingProducts.filter((product) => product.category === category);
}

/**
 * Get featured products for homepage
 */
export function getFeaturedProducts(): AmazonProduct[] {
  return [
    cyclingProducts.find((p) => p.asin === "B07D5F8L9K")!, // EVOC Bike Bag
    cyclingProducts.find((p) => p.asin === "B07QQ8RFTR")!, // GIRO Helmet
    cyclingProducts.find((p) => p.asin === "B07PQBCGDX")!, // Garmin Edge
    cyclingProducts.find((p) => p.asin === "B083QF9N4X")!, // Topeak Frame Bag
  ];
}

/**
 * Get bike transport products for bikebox page
 */
export function getBikeTransportProducts(): AmazonProduct[] {
  return getProductsByCategory("bike-transport");
}

export default cyclingProducts;
