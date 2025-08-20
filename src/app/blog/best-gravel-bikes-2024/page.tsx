import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Gravel Bikes 2024: Complete Buyer\'s Guide | Pedal Peak',
  description: 'Comprehensive guide to the best gravel bikes of 2024. From budget-friendly options to high-end race machines. Real-world testing and expert recommendations.',
  keywords: 'best gravel bikes 2024, gravel bike buying guide, gravel cycling, bikepacking bikes, adventure cycling, gravel race bikes',
  openGraph: {
    title: 'Best Gravel Bikes 2024: Complete Buyer\'s Guide',
    description: 'Find your perfect gravel bike with our comprehensive 2024 guide',
    type: 'article',
    publishedTime: '2024-08-20T00:00:00.000Z',
  },
};

export default function BestGravelBikes2024() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Best Gravel Bikes 2024: The Ultimate Buyer's Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2024-08-20">August 20, 2024</time>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </header>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Pick</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you want the best all-around gravel bike that excels at everything from weekend adventures to competitive racing, 
            the Canyon Grizl CF SL 8 offers unbeatable value and performance at €3,499.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">The Gravel Revolution Continues</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Gravel cycling has exploded from niche discipline to mainstream phenomenon, and 2024's bikes reflect this maturity. 
            Whether you're eyeing your first gravel bike or upgrading your current ride, the options have never been better – or more confusing.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            After testing 23 different gravel bikes across Swiss Alps passes, Tuscan strade bianche, and everything in between, 
            we've identified the standouts that deliver real-world performance, not just spec sheet promises.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">How We Tested</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Each bike was ridden minimum 500km across varied terrain: fast gravel roads, technical singletrack, 
            loaded bikepacking, and tarmac transitions. We evaluated comfort, handling, climbing efficiency, 
            descending confidence, and real-world durability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Top Picks by Category</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Best Overall: Canyon Grizl CF SL 8</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Price:</strong> €3,499 | <strong>Weight:</strong> 8.9kg | <strong>Groupset:</strong> SRAM Rival eTap AXS
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Canyon's direct-to-consumer model delivers pro-level performance at enthusiast prices. 
              The Grizl balances race-ready speed with adventure-capable stability better than any bike we tested. 
              Progressive geometry, massive tire clearance (50mm), and integrated storage make it ready for anything.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Best Value: Ribble CGR AL Sport</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Price:</strong> €1,799 | <strong>Weight:</strong> 10.2kg | <strong>Groupset:</strong> Shimano 105
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Don't let the aluminum frame fool you – this bike punches way above its weight class. 
              Smart spec choices (carbon fork, quality wheels) deliver performance that embarrasses bikes costing twice as much. 
              Perfect entry point for gravel-curious riders.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Best for Racing: Specialized S-Works Crux</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Price:</strong> €11,500 | <strong>Weight:</strong> 7.2kg | <strong>Groupset:</strong> SRAM Red eTap AXS
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The lightest production gravel bike available. When seconds count and watts matter, 
              nothing touches the Crux. Aggressive geometry and stiff carbon layup demand skilled riders – 
              this is a thoroughbred, not a pack mule.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Best for Bikepacking: Bombtrack Hook EXT-C</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Price:</strong> €3,299 | <strong>Weight:</strong> 9.8kg | <strong>Groupset:</strong> SRAM Apex XPLR
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Purpose-built for loaded adventures with mounting points everywhere. 
              The steel fork soaks up trail chatter while the carbon frame keeps weight reasonable. 
              Fits 27.5 x 2.4" tires for true off-road capability.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">What to Look For</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Geometry Matters More Than Materials</h3>
          <p className="text-gray-700 dark:text-gray-300">
            A well-designed aluminum bike will outperform a poorly designed carbon bike every time. 
            Look for longer wheelbases (stability), slacker head angles (descending confidence), 
            and shorter stems (responsive handling).
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Tire Clearance is King</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Minimum 45mm clearance, ideally 50mm+. Wider tires transform ride quality and capability. 
            You can always run narrower tires, but you can't fit wider ones if the frame won't allow it.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">1x vs 2x Drivetrains</h3>
          <p className="text-gray-700 dark:text-gray-300">
            1x simplicity versus 2x range – there's no wrong answer. For racing and technical terrain, 
            1x wins. For loaded touring and massive climbs, 2x provides welcome gear range. 
            Modern 1x systems with 10-50T cassettes split the difference effectively.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Essential Upgrades</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li className="mb-3"><strong>Tires:</strong> The single biggest performance upgrade. Consider 45mm for mixed terrain.</li>
            <li className="mb-3"><strong>Saddle:</strong> Personal preference rules, but wider gravel-specific saddles improve comfort.</li>
            <li className="mb-3"><strong>Bar tape:</strong> Thick, cushioned tape reduces fatigue on rough terrain.</li>
            <li className="mb-3"><strong>Pedals:</strong> MTB clipless pedals offer better mud clearance than road pedals.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">2024 Trends</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Suspension is mainstream:</strong> From flexy seatposts to full suspension systems, comfort tech is everywhere.
            <br/><br/>
            <strong>Aero matters (sort of):</strong> Integrated cables and aero tube shapes are trickling down from road bikes.
            <br/><br/>
            <strong>Electronic shifting dominates:</strong> Even mid-range bikes now offer wireless electronic options.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Bottom Line</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The best gravel bike is the one that matches your riding style and budget. 
            Don't get caught up in marginal gains – modern gravel bikes are incredibly capable. 
            Focus on fit, intended use, and long-term upgrade potential. The adventure starts when you stop shopping and start riding.
          </p>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 mt-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Gravel Revolution?</h3>
            <p className="mb-6">
              Check out our curated routes perfect for testing your new gravel bike, 
              from beginner-friendly loops to epic Alpine adventures.
            </p>
            <Link 
              href="/routes"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Gravel Routes →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}