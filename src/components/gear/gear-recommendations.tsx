'use client';

import { AmazonProduct } from '@/lib/amazon-affiliate';
import { AmazonProductCard } from './amazon-product-card';

interface GearRecommendationsProps {
  products: AmazonProduct[];
  title: string;
  description?: string;
  showCategory?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function GearRecommendations({ 
  products, 
  title, 
  description,
  showCategory = false,
  columns = 3,
  className = ''
}: GearRecommendationsProps) {
  if (products.length === 0) return null;

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {products.map((product) => (
            <AmazonProductCard 
              key={product.asin}
              product={product}
              showCategory={showCategory}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            As an Amazon Associate, Pedal Peak earns from qualifying purchases.
          </p>
        </div>
      </div>
    </section>
  );
}