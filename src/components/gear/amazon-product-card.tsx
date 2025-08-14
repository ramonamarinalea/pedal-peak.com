'use client';

// import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { AmazonProduct, generateAmazonAffiliateLink, formatPrice } from '@/lib/amazon-affiliate';
import { buttonVariants } from '@/components/ui/button';

interface AmazonProductCardProps {
  product: AmazonProduct;
  showCategory?: boolean;
  className?: string;
}

export function AmazonProductCard({ 
  product, 
  showCategory = false, 
  className = '' 
}: AmazonProductCardProps) {
  const affiliateLink = generateAmazonAffiliateLink(product.asin);
  
  const handleClick = () => {
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            console.log('Image error:', product.imageUrl);
            const target = e.target as HTMLImageElement;
            target.src = '/images/IMG_8151.jpeg';
          }}
        />
        {showCategory && (
          <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">
            {product.category.replace('-', ' ')}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.estimatedPrice)}
          </span>
          
          <button 
            className={`${buttonVariants({ size: 'sm' })} flex items-center gap-1`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            View on Amazon
            <ExternalLink className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}