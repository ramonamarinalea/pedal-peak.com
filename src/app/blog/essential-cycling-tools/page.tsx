import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Only 6 Tools You Actually Need to Carry | Pedal Peak',
  description: 'Complete guide to essential cycling tools and repair kits every cyclist should carry. From multi-tools to CO2 inflators, be prepared for any mechanical issue on your ride.',
  keywords: 'cycling tools, bike repair kit, roadside repairs, cycling multi-tool, tire repair, CO2 inflator, chain tool, cycling mechanics',
  openGraph: {
    title: 'The Only 6 Tools You Actually Need to Carry',
    description: 'Never get stranded again - the complete guide to essential cycling tools',
    type: 'article',
    publishedTime: '2024-10-01T00:00:00.000Z',
  },
};

export default function EssentialCyclingTools() {
  const products = [
    {
      name: "Park Tool IB-3 I-Beam Multi-Tool",
      url: "https://amzn.to/4fUICIr",
      image: "https://m.media-amazon.com/images/I/71dL5Z8rSEL._AC_SL1500_.jpg",
      description: "The one that actually works when you need it",
      features: ["Hex wrenches 2-8mm", "Chain tool that won't bend", "Spoke wrenches", "Torx T25"],
      price: "CHF 32"
    },
    {
      name: "Topeak Mini 20 Pro Multi-Tool",
      url: "https://amzn.to/4fUnRfX",
      image: "https://m.media-amazon.com/images/I/71rj3PsRIVL._AC_SL1500_.jpg",
      description: "20 tools, fits in your pocket, doesn't suck",
      features: ["20 functions that work", "CO2 compatible", "Actually lightweight", "Chain breaker included"],
      price: "CHF 37"
    },
    {
      name: "Lezyne RAP II 25 CO2 Multi-Tool",
      url: "https://amzn.to/4mzEtwn",
      image: "https://m.media-amazon.com/images/I/81kj6M3aYSL._AC_SL1500_.jpg",
      description: "The fancy one with CO2 built right in",
      features: ["25 tools", "CO2 inflator built in", "Tubeless plug tools", "Won't break"],
      price: "CHF 82"
    },
    {
      name: "Genuine Innovations CO2 Inflator Kit",
      url: "https://amzn.to/41KR4V9",
      image: "https://m.media-amazon.com/images/I/71pKRvqZL+L._AC_SL1500_.jpg",
      description: "Instant inflation. No pumping. Done.",
      features: ["Control valve so you don't waste CO2", "Comes with 3 cartridges", "Works on any valve", "Tiny case"],
      price: "CHF 23"
    },
    {
      name: "Park Tool VP-1 Vulcanizing Patch Kit",
      url: "https://amzn.to/4oSBAZ1",
      image: "https://m.media-amazon.com/images/I/71bKL4LpuBL._AC_SL1500_.jpg",
      description: "Old school patches that actually stick",
      features: ["6 patches", "Real glue, not stickers", "Sandpaper included", "Tiny box"],
      price: "CHF 6"
    },
    {
      name: "Pedro's Tire Levers (2-Pack)",
      url: "https://amzn.to/4fUaigw",
      image: "https://m.media-amazon.com/images/I/81G5t9G9kVL._AC_SL1500_.jpg",
      description: "The yellow ones that don't break",
      features: ["Won't snap like cheap ones", "Easy to grip", "Won't scratch your rims", "Lifetime warranty"],
      price: "CHF 6"
    }
  ];

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Only 6 Tools You Actually Need to Carry
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2024-10-01">October 1, 2024</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_8151.jpeg"
              alt="Cyclist performing roadside repair with multi-tool"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="mb-2 inline-block bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                GEAR GUIDE
              </div>
              <h2 className="text-2xl font-bold">Essential Repair Kit</h2>
            </div>
          </div>
        </header>

        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Real Talk</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Everyone gets a flat. Or a broken chain. Or something loose that needs tightening. It happens to pros,
            it happens to beginners, and it'll happen to you. Pack these tools and you'll actually make it home.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why Every Cyclist Needs a Repair Kit</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Last month I was 30km from home when my chain snapped. The month before that, double puncture on a
            gravel descent. Without tools? You're walking. With the right ones? You're riding again in 10 minutes.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I've been stuck roadside too many times. Broken chains, split tires, loose bolts. After years of trial
            and error (mostly error), here's exactly what I carry now. No fluff, just the stuff that actually works.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Stuff You Actually Need</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Multi-Tool</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Your multi-tool does 90% of the work. Get one with hex keys from 2 to 8mm, a chain tool that actually works
            (test it at home first), and Phillips/flathead screwdrivers. The good ones have 20+ tools but still fit in
            your pocket. Don't cheap out here.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Pro Tip: Weight vs. Functionality</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Stop worrying about 20 grams. I'd rather carry a tool I might not need than need a tool I didn't bring.
              Get the one with MORE functions, not fewer.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Flat Fixing Gear</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Flats are what get most people. You need: tire levers (get strong ones, not the bendy plastic junk),
            patches OR a spare tube (I carry both), and CO2 cartridges. CO2 changed everything. No more pumping for
            10 minutes on the roadside. Pop the cartridge, you're inflated in seconds.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Chain Tool</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Broken chain = game over. Unless you have a chain tool. Most multi-tools have one built in, but check if
            it's actually solid metal, not some flimsy piece that'll bend when you use it. Practice at home on an old
            chain. Seriously. Do it now, not when you're stuck in the middle of nowhere.
          </p>

          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-8">
            <Image
              src="/images/IMG_0123.jpeg"
              alt="Organized cycling tool kit laid out"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white max-w-md">
              <p className="text-lg font-medium">Everything you need fits in a bag smaller than your sandwich</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">What I Carry (And Why)</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            I've bought and broken a lot of tools. These are the ones that survived. They work when it's raining, when
            you're tired, when your hands are numb. I use them. You should too.
          </p>

          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden mb-6">
              <div className="md:flex">
                <div className="md:w-1/3 p-4">
                  <div className="aspect-square relative bg-white rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {index + 1}. {product.name}
                    </h3>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">{product.price}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Why it's good:</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    Check it out on Amazon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-3xl font-bold mt-12 mb-6">Building Your Personal Kit</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Start with the Basics</h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you're on a budget, start with these absolute essentials:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
            <li>Multi-tool with chain breaker (CHF 30ish)</li>
            <li>Tire levers (CHF 5)</li>
            <li>Patches or spare tube (CHF 10)</li>
            <li>CO2 inflator and cartridges (CHF 25)</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Total cost: About CHF 70. That's two café stops with cake in Switzerland.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Upgrade as You Go</h3>
          <p className="text-gray-700 dark:text-gray-300">
            You'll add stuff as you need it. Broke a spoke? Now you carry a spoke wrench. Cleat came loose? Now you
            pack spare bolts. Start with the basics, buy quality, add as you learn what YOUR bike needs.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Storage Solutions</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Get a saddle bag. Or a tool bottle. Just don't throw everything loose in your pockets like I used to.
              You'll never find what you need and the chain tool will poke holes in everything.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Practice Makes Perfect</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Tools are useless if you don't know how to use them. Before your next ride, sit down and practice:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
            <li>Take a tire off and put it back on</li>
            <li>Patch a tube (poke a hole in an old one)</li>
            <li>Break and fix a chain</li>
            <li>Tighten stuff with your hex keys</li>
            <li>Use a CO2 cartridge (waste one for practice, it's worth it)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Weight Penalty Myth</h2>
          <p className="text-gray-700 dark:text-gray-300">
            "But it's extra weight!" Yeah, 250 grams. Less than your phone. Less than that extra water bottle you never
            finish. You know what really weighs you down? Walking 20km in cleats because you wanted to save 250 grams.
          </p>

          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-8">
            <Image
              src="/images/IMG_8025.jpeg"
              alt="Cyclist fixing bike on mountain pass"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-medium">Fix your own bike. Ride anywhere. Simple.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Extra Stuff for Big Rides</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For longer rides, centuries, or bikepacking adventures, consider these additions:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
            <li><strong>Quick link:</strong> Faster than using the chain tool for breaks</li>
            <li><strong>Zip ties:</strong> Incredibly versatile for emergency fixes</li>
            <li><strong>Electrical tape:</strong> Wrap some around your pump for various uses</li>
            <li><strong>Spare cleat bolts:</strong> These love to work loose and disappear</li>
            <li><strong>Derailleur hanger:</strong> For bikes with replaceable hangers</li>
            <li><strong>Tubeless plug kit:</strong> Essential for tubeless setups</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Just Buy The Tools Already</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Look, mechanicals happen. To everyone. But with CHF 70 of tools and 30 minutes of practice, you're
            basically unstoppable. You'll ride further because you're not worried about getting stranded. You'll take
            that sketchy gravel shortcut. You'll be the hero helping other riders.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Get the tools. Learn to use them. Then go ride wherever you want.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-12">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Affiliate Disclosure:</strong> As an Amazon Associate, Pedal Peak earns from qualifying purchases.
              We only recommend products we've personally tested and trust. Your support helps us create more cycling content
              and maintain this resource for the cycling community.
            </p>
          </div>

        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Back to Blog
            </Link>
            <div className="flex gap-4">
              <Link
                href="/blog/swiss-alpine-passes-cycling-guide"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Next Article →
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}