import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Essential Cycling Tools: What Every Cyclist Needs for Roadside Repairs | Pedal Peak',
  description: 'Complete guide to essential cycling tools and repair kits every cyclist should carry. From multi-tools to CO2 inflators, be prepared for any mechanical issue on your ride.',
  keywords: 'cycling tools, bike repair kit, roadside repairs, cycling multi-tool, tire repair, CO2 inflator, chain tool, cycling mechanics',
  openGraph: {
    title: 'Essential Cycling Tools: What Every Cyclist Needs for Roadside Repairs',
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
      description: "Professional-grade multi-tool with 14 functions",
      features: ["Hex wrenches 2-8mm", "Chain tool", "Spoke wrenches", "Torx T25"],
      price: "$34.95"
    },
    {
      name: "Topeak Mini 20 Pro Multi-Tool",
      url: "https://amzn.to/4fUnRfX",
      description: "Compact 20-function tool perfect for jersey pockets",
      features: ["20 essential functions", "CO2 inflator compatible", "Lightweight design", "Chain breaker included"],
      price: "$39.95"
    },
    {
      name: "Lezyne RAP II 25 CO2 Multi-Tool",
      url: "https://amzn.to/4mzEtwn",
      description: "All-in-one tool with integrated CO2 inflator",
      features: ["25 functions total", "Built-in CO2 dispenser", "Tubeless plug tools", "Premium CNC construction"],
      price: "$89.99"
    },
    {
      name: "Genuine Innovations CO2 Inflator Kit",
      url: "https://amzn.to/41KR4V9",
      description: "Quick and reliable CO2 inflation system",
      features: ["Trigger control valve", "3x 16g cartridges included", "Works with Presta/Schrader", "Compact storage case"],
      price: "$24.99"
    },
    {
      name: "Park Tool VP-1 Vulcanizing Patch Kit",
      url: "https://amzn.to/4oSBAZ1",
      description: "Professional tube repair patches that last",
      features: ["6 patches included", "Vulcanizing glue", "Sandpaper for prep", "Compact case"],
      price: "$5.95"
    },
    {
      name: "Pedro's Tire Levers (2-Pack)",
      url: "https://amzn.to/4fUaigw",
      description: "Strong, reliable tire levers that won't snap",
      features: ["Reinforced plastic", "Ergonomic design", "Won't damage rims", "Lifetime warranty"],
      price: "$6.00"
    }
  ];

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Essential Cycling Tools: What Every Cyclist Needs for Roadside Repairs
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Golden Rule</h2>
          <p className="text-gray-700 dark:text-gray-300">
            It's not if you'll have a mechanical issue on a ride, it's when. Being prepared with the right tools
            can mean the difference between a minor inconvenience and a long walk home. Every cyclist, regardless
            of experience level, should carry these essential tools.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why Every Cyclist Needs a Repair Kit</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Picture this: You're 30 kilometers from home, enjoying a perfect ride on quiet country roads, when suddenly
            you hear that dreaded hiss of air escaping your tire. Or worse, your chain snaps on a steep climb. Without
            the right tools, your ride is over.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            After years of riding and countless roadside repairs (both successful and failed), I've refined my tool kit
            to the absolute essentials. These aren't just nice-to-have items – they're the difference between riding home
            and calling for rescue.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Non-Negotiable Essentials</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Multi-Tool: Your Swiss Army Knife</h3>
          <p className="text-gray-700 dark:text-gray-300">
            A quality multi-tool is the cornerstone of any repair kit. At minimum, it should include hex keys (2-8mm),
            a chain tool, and screwdrivers. The best multi-tools pack 15-25 functions into a palm-sized package that
            fits easily in your jersey pocket or saddle bag.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Pro Tip: Weight vs. Functionality</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Don't obsess over saving 20 grams by getting a minimal tool. When you need that chain breaker or T25 Torx
              on the roadside, you'll gladly carry the extra weight. Choose tools with all the bits your bike needs.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Tire Repair: Multiple Solutions</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Punctures are by far the most common mechanical issue. You need three things: tire levers to remove the tire,
            patches or a spare tube, and a way to inflate. CO2 inflators have revolutionized roadside repairs – they're
            fast, compact, and get you back riding in under 5 minutes.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Chain Tool: Don't Overlook This</h3>
          <p className="text-gray-700 dark:text-gray-300">
            A broken chain ends your ride immediately unless you can fix it. Many multi-tools include a chain breaker,
            but make sure it's substantial enough to actually work. Flimsy chain tools will fail when you need them most.
            Practice using it at home first – roadside isn't the place to learn.
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
              <p className="text-lg font-medium">A well-organized repair kit takes up minimal space but provides maximum peace of mind</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">My Recommended Tool Kit</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            After testing dozens of tools over thousands of kilometers, these are the products I trust and carry on every ride.
            Each has proven itself reliable in real-world conditions, from Alpine passes to gravel adventures.
          </p>

          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {index + 1}. {product.name}
                </h3>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">{product.price}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
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
                View on Amazon
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}

          <h2 className="text-3xl font-bold mt-12 mb-6">Building Your Personal Kit</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Start with the Basics</h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you're on a budget, start with these absolute essentials:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
            <li>Multi-tool with chain breaker ($25-40)</li>
            <li>Tire levers ($5-10)</li>
            <li>Patch kit or spare tube ($5-15)</li>
            <li>Mini pump or CO2 inflator ($20-30)</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Total investment: $55-95 for peace of mind on every ride.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Upgrade as You Go</h3>
          <p className="text-gray-700 dark:text-gray-300">
            As you ride more and encounter different situations, you'll naturally expand your kit. Maybe add a spoke wrench
            after a wobbly wheel incident, or upgrade to a better multi-tool after struggling with a cheap one. The key is
            starting with quality basics rather than buying everything at once.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Storage Solutions</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Don't just throw tools loose in your jersey pocket. Use a small saddle bag or tool bottle that fits in your
              bottle cage. Organized tools are easier to find when you need them and won't damage other items. Some riders
              prefer frame bags or even taping a minimal kit under the saddle.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Practice Makes Perfect</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Having the tools is only half the battle – you need to know how to use them. Practice these essential repairs at home:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 my-4">
            <li>Remove and install a tire using only your tire levers</li>
            <li>Patch a tube (purposely puncture an old one for practice)</li>
            <li>Break and rejoin a chain with your multi-tool</li>
            <li>Adjust your brakes and derailleurs with hex keys</li>
            <li>Use CO2 to inflate a tire (they're single-use, but worth practicing once)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Weight Penalty Myth</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Some cyclists resist carrying tools to save weight. Let's be realistic: a complete tool kit weighs about 200-300 grams.
            That's less than a full water bottle, and infinitely more valuable when you need it. The psychological weight of worrying
            about mechanicals is far heavier than any tool kit.
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
              <p className="text-lg font-medium">Being self-sufficient on the bike opens up endless adventure possibilities</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Beyond the Basics: Long Ride Additions</h2>
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

          <h2 className="text-3xl font-bold mt-12 mb-6">Final Thoughts: Insurance You Can Carry</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Think of your tool kit as ride insurance that costs less than a single café stop. The confidence of knowing you can
            handle common mechanicals transforms your riding experience. You'll explore further, ride with more confidence, and
            help fellow cyclists in need.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Start building your kit with the essentials above. Test everything at home. Learn to use each tool properly. Then
            head out knowing that whatever the road throws at you, you're prepared to handle it and keep rolling.
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