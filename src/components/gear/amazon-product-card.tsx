'use client';

// import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { AmazonProduct, generateAmazonAffiliateLink, formatPrice } from '@/lib/amazon-affiliate';
import { buttonVariants } from '@/components/ui/button';

interface AmazonProductCardProps {
  product: AmazonProduct;
  showCategory?: boolean;
  className?: string;
  cardSize?: 'normal' | 'small';
}

export function AmazonProductCard({ 
  product, 
  showCategory = false, 
  className = '',
  cardSize = 'normal'
}: AmazonProductCardProps) {
  const affiliateLink = product.customLink || generateAmazonAffiliateLink(product.asin);
  
  const handleClick = () => {
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const isSmall = cardSize === 'small';
  const aspectRatio = isSmall ? 'aspect-[4/3]' : 'aspect-square';
  const padding = isSmall ? 'p-3' : 'p-4';

  return (
    <div 
      className={`group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className={`${aspectRatio} relative overflow-hidden`}>
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
      
      <div className={padding}>
        <h3 className={`font-semibold text-gray-900 mb-2 line-clamp-2 ${isSmall ? 'text-sm' : ''}`}>
          {product.title}
        </h3>
        
        <p className={`text-gray-600 mb-3 line-clamp-2 ${isSmall ? 'text-xs' : 'text-sm'}`}>
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className={`font-bold text-gray-900 ${isSmall ? 'text-base' : 'text-lg'}`}>
            {formatPrice(product.estimatedPrice)}
          </span>
          
          <button 
            className={`${buttonVariants({ size: 'sm' })} flex items-center gap-1 ${isSmall ? 'text-xs px-2 h-6' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {isSmall ? 'View' : 'View on Amazon'}
            <ExternalLink className={`${isSmall ? 'h-2.5 w-2.5' : 'h-3 w-3'}`} />
          </button>
        </div>
      </div>
    </div>
  );
}