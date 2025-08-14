import { AmazonProduct } from './amazon-affiliate';

/**
 * Curated cycling products for Pedal Peak affiliate recommendations
 * 
 * Note: Replace ASINs with actual products once you have your Amazon Associates account
 * These are example ASINs for popular cycling products
 */

export const cyclingProducts: AmazonProduct[] = [
  // Bike Transport & Travel
  {
    asin: 'B07D5F8L9K',
    title: 'EVOC Bike Travel Bag',
    description: 'Premium padded bike travel case for safe airline transport. Perfect for cycling adventures worldwide.',
    category: 'bike-transport',
    imageUrl: '/images/bikeboxreal.jpeg',
    estimatedPrice: '$299.99'
  },
  {
    asin: 'B01N4QZ8H8',
    title: 'Thule RoundTrip Transition',
    description: 'Hard case bike transport solution with integrated wheels and robust protection.',
    category: 'bike-transport',
    imageUrl: '/images/bikeboxreal.jpeg',
    estimatedPrice: '$699.99'
  },
  
  // Cycling Gear & Clothing
  {
    asin: 'B08QF7H6TN',
    title: 'Pearl Izumi Cycling Shorts',
    description: 'Premium padded cycling shorts for long-distance comfort on mountain and road rides.',
    category: 'cycling-gear',
    imageUrl: '/images/IMG_2289.jpeg',
    estimatedPrice: '$89.99'
  },
  {
    asin: 'B07QQ8RFTR',
    title: 'GIRO Register MIPS Helmet',
    description: 'Lightweight cycling helmet with MIPS technology for enhanced safety on all terrain.',
    category: 'cycling-gear',
    imageUrl: '/images/IMG_8151.jpeg',
    estimatedPrice: '$49.99'
  },
  {
    asin: 'B088T5RBCP',
    title: 'Castelli Cycling Jersey',
    description: 'Professional-grade cycling jersey with moisture-wicking fabric and aerodynamic fit.',
    category: 'cycling-gear',
    imageUrl: '/images/gravel.jpeg',
    estimatedPrice: '$129.99'
  },
  
  // Bike Maintenance
  {
    asin: 'B000OZFJRY',
    title: 'Park Tool PCS-10 Repair Stand',
    description: 'Professional bike repair stand for home mechanics. Essential for proper bike maintenance.',
    category: 'maintenance',
    imageUrl: '/images/IMG_5945.jpeg',
    estimatedPrice: '$199.99'
  },
  {
    asin: 'B000BR3ZVS',
    title: 'Park Tool Bike Tool Kit',
    description: 'Complete bike tool set for on-the-go repairs and home maintenance.',
    category: 'maintenance',
    imageUrl: '/images/IMG_0224.jpeg',
    estimatedPrice: '$79.99'
  },
  
  // Cycling Accessories
  {
    asin: 'B07PQBCGDX',
    title: 'Garmin Edge 130 Plus',
    description: 'GPS cycling computer with navigation and performance tracking for serious cyclists.',
    category: 'accessories',
    imageUrl: '/images/tarmac.jpeg',
    estimatedPrice: '$199.99'
  },
  {
    asin: 'B083QF9N4X',
    title: 'Topeak Midloader Bike Bag',
    description: 'Frame bag for bikepacking adventures. Perfect for long-distance cycling trips.',
    category: 'accessories',
    imageUrl: '/images/bikepacking.jpeg',
    estimatedPrice: '$49.99'
  },
  {
    asin: 'B07VG6QNXN',
    title: 'Wahoo KICKR Core',
    description: 'Smart indoor bike trainer for year-round training. Compatible with training apps.',
    category: 'accessories',
    imageUrl: '/images/IMG_8031.jpeg',
    estimatedPrice: '$899.99'
  },
  
  // Nutrition & Hydration
  {
    asin: 'B000FN4FHK',
    title: 'CamelBak Podium Bottle',
    description: 'Professional cycling water bottle with easy-squeeze design for hydration on the go.',
    category: 'nutrition',
    imageUrl: '/images/IMG_3149.jpeg',
    estimatedPrice: '$12.99'
  },
  {
    asin: 'B07C4TKR59',
    title: 'GU Energy Gel Variety Pack',
    description: 'Energy gels for endurance cycling. Essential fuel for long rides and races.',
    category: 'nutrition',
    imageUrl: '/images/FullSizeRender.jpeg',
    estimatedPrice: '$24.99'
  }
];

/**
 * Get products by category
 */
export function getProductsByCategory(category: AmazonProduct['category']): AmazonProduct[] {
  return cyclingProducts.filter(product => product.category === category);
}

/**
 * Get featured products for homepage
 */
export function getFeaturedProducts(): AmazonProduct[] {
  return [
    cyclingProducts.find(p => p.asin === 'B07D5F8L9K')!, // EVOC Bike Bag
    cyclingProducts.find(p => p.asin === 'B07QQ8RFTR')!, // GIRO Helmet
    cyclingProducts.find(p => p.asin === 'B07PQBCGDX')!, // Garmin Edge
    cyclingProducts.find(p => p.asin === 'B083QF9N4X')!  // Topeak Frame Bag
  ];
}

/**
 * Get bike transport products for bikebox page
 */
export function getBikeTransportProducts(): AmazonProduct[] {
  return getProductsByCategory('bike-transport');
}

export default cyclingProducts;