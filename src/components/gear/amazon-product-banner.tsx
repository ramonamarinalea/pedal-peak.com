"use client";

import { ExternalLink } from "lucide-react";

import { AmazonProduct } from "@/lib/amazon-affiliate";

interface AmazonProductBannerProps {
  products: AmazonProduct[];
  title: string;
  className?: string;
}

export function AmazonProductBanner({
  products,
  title,
  className = "",
}: AmazonProductBannerProps) {
  if (products.length === 0) return null;

  return (
    <section className={`py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>

          <div className="space-y-3">
            {products.map((product) => {
              const affiliateLink =
                product.customLink ||
                `https://www.amazon.com/dp/${product.asin}?tag=pedalpeak-21`;

              return (
                <div
                  key={product.asin}
                  className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-3 transition-shadow hover:shadow-sm"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {product.title}
                    </h4>
                    <p className="mt-1 text-xs text-gray-600">
                      {product.description}
                    </p>
                  </div>

                  <div className="ml-4 flex items-center gap-4">
                    <span className="whitespace-nowrap font-semibold text-gray-900">
                      {product.estimatedPrice}
                    </span>

                    <a
                      href={affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-black transition-colors hover:text-gray-700"
                    >
                      View
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
