/**
 * Amazon Affiliate Link Generation Utilities
 * 
 * Instructions for setup:
 * 1. Sign up for Amazon Associates at https://affiliate-program.amazon.com
 * 2. Get your tracking ID (usually ends with -20)
 * 3. Add your tracking ID to the AMAZON_ASSOCIATE_ID below
 */

const AMAZON_ASSOCIATE_ID = 'pedalpeak-21'; // Your actual Amazon Associate ID

export interface AmazonProduct {
  asin: string;
  title: string;
  description: string;
  category: 'bike-transport' | 'cycling-gear' | 'maintenance' | 'accessories' | 'nutrition';
  imageUrl: string;
  estimatedPrice: string;
}

/**
 * Generate an Amazon affiliate link
 */
export function generateAmazonAffiliateLink(asin: string, tag: string = AMAZON_ASSOCIATE_ID): string {
  const baseUrl = 'https://www.amazon.com/dp/';
  return `${baseUrl}${asin}?tag=${tag}`;
}

/**
 * Generate Amazon affiliate link with additional parameters for better tracking
 */
export function generateTrackingLink(
  asin: string, 
  campaign?: string, 
  tag: string = AMAZON_ASSOCIATE_ID
): string {
  const params = new URLSearchParams({
    tag,
    ...(campaign && { linkCode: 'as2', camp: '1789', creative: '9325', creativeASIN: asin })
  });
  
  return `https://www.amazon.com/dp/${asin}?${params.toString()}`;
}

/**
 * Create an Amazon search affiliate link for broader product discovery
 */
export function generateSearchLink(keyword: string, tag: string = AMAZON_ASSOCIATE_ID): string {
  const params = new URLSearchParams({
    tag,
    keywords: keyword,
    'linkCode': 'ur2',
    'camp': '1789',
    'creative': '9325'
  });
  
  return `https://www.amazon.com/s?${params.toString()}`;
}

/**
 * Format price display for Amazon products
 */
export function formatPrice(price: string): string {
  return price.startsWith('$') ? price : `$${price}`;
}

/**
 * Check if affiliate program is properly configured
 */
export function isAffiliateConfigured(): boolean {
  const id: string = AMAZON_ASSOCIATE_ID;
  return id === 'pedalpeak-21' && id.length > 0;
}