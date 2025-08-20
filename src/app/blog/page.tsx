import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { MobileNavigation } from '@/components/mobile-navigation';

export const metadata: Metadata = {
  title: 'Cycling Blog | Pedal Peak',
  description: 'Expert cycling guides, gear reviews, and destination insights from the Swiss cycling community.',
  keywords: 'cycling blog, bike reviews, cycling guides, gravel bikes, cycling gear, Swiss cycling',
  openGraph: {
    title: 'Cycling Blog | Pedal Peak',
    description: 'Expert cycling guides, gear reviews, and destination insights from the Swiss cycling community.',
    images: ['/images/tarmac.jpeg'],
  },
};

const blogPosts = [
  {
    title: 'Best Gravel Bikes 2024: The Ultimate Buyer\'s Guide',
    excerpt: 'Comprehensive guide to the best gravel bikes of 2024. From budget-friendly options to high-end race machines.',
    slug: 'best-gravel-bikes-2024',
    date: 'August 20, 2024',
    readTime: '15 min read',
    image: '/images/gravel.jpeg',
    category: 'BUYER\'S GUIDE'
  },
  {
    title: 'EVOC Hydro Pro 6L Review: My Go-To Pack for Gravel Races',
    excerpt: 'After 6 months of testing across gravel races and MTB trails, here\'s my honest review of the EVOC Hydro Pro 6L.',
    slug: 'evoc-hydro-pro-review',
    date: 'August 20, 2024',
    readTime: '12 min read',
    image: '/images/gravel.jpeg',
    category: 'GEAR REVIEW'
  },
  {
    title: 'Swiss Alpine Passes: The Ultimate Cycling Guide',
    excerpt: 'Complete guide to cycling the legendary Swiss Alpine passes. Furka, Grimsel, Susten, and more.',
    slug: 'swiss-alpine-passes-cycling-guide',
    date: 'August 20, 2024',
    readTime: '18 min read',
    image: '/images/IMG_8151.jpeg',
    category: 'ALPINE GUIDE'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="relative mt-20 flex min-h-[60vh] items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tarmac.jpeg"
            alt="Cycling blog header"
            fill
            className="object-cover grayscale"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-7xl">
            Cycling Blog
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg font-light text-white/90 sm:text-xl md:text-2xl">
            Expert guides, gear reviews, and destination insights from the Swiss cycling community.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="grid items-center gap-8 lg:grid-cols-2">
                  <div className="relative h-64 overflow-hidden rounded-lg lg:h-80">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="mb-2 inline-block bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                        {post.category}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold tracking-tight transition-colors group-hover:text-gray-600 sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mb-6 text-gray-600 transition-colors group-hover:text-gray-900">
                      {post.excerpt}
                    </p>
                    <span className="font-medium text-black transition-colors group-hover:text-gray-600">
                      Read Article →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Pedal Peak. Built for cyclists, by cyclists.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
              <Link
                href="/routes"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Routes
              </Link>
              <Link
                href="/events"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Events
              </Link>
              <Link
                href="/crete"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Crete
              </Link>
              <Link
                href="/#rides"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Rides
              </Link>
              <Link
                href="/bikebox"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Bike Box
              </Link>
              <Link
                href="https://www.strava.com/clubs/Pedalpeak"
                target="_blank"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Strava
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}