import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Swiss Alpine Passes: The Ultimate Cycling Guide 2024 | Pedal Peak',
  description: 'Complete guide to cycling the legendary Swiss Alpine passes. Furka, Grimsel, Susten, and more. Routes, tips, and insider knowledge for your Alpine adventure.',
  keywords: 'Swiss Alpine passes cycling, Furka Pass, Grimsel Pass, Susten Pass, cycling Switzerland, Alpine cycling routes, mountain pass cycling',
  openGraph: {
    title: 'Swiss Alpine Passes: The Ultimate Cycling Guide',
    description: 'Conquer the legendary Swiss Alpine passes with our comprehensive cycling guide',
    type: 'article',
    publishedTime: '2024-08-20T00:00:00.000Z',
  },
};

export default function SwissAlpinePassesGuide() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Swiss Alpine Passes: The Ultimate Cycling Guide
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2024-08-20">August 20, 2024</time>
            <span>•</span>
            <span>18 min read</span>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/images/IMG_8151.jpeg"
              alt="Cyclist climbing Swiss Alpine pass with mountain views"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="mb-2 inline-block bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                ALPINE GUIDE
              </div>
              <h2 className="text-2xl font-bold">Swiss Passes</h2>
            </div>
          </div>
        </header>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Essential Info</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The Swiss Alps offer some of the world's most iconic cycling climbs. This guide covers everything 
            you need to know to tackle these legendary passes, from training tips to the best coffee stops.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why Cycle the Swiss Alps?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            There's something magical about grinding up a 2,400m pass under your own power. 
            The Swiss Alps aren't just climbs – they're experiences. Perfect roads, stunning scenery, 
            and that incomparable feeling of cresting a pass you've seen in the Tour de Suisse.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            After five summers exploring every major pass in Switzerland, logging over 150,000m of elevation, 
            I've learned what works, what doesn't, and where to find the best Apfelstrudel at the top.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Big Three: Furka, Grimsel, Susten</h2>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/tarmac.jpeg"
              alt="Swiss Alpine pass hairpin turns"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white max-w-md">
              <p className="text-lg font-medium">Legendary hairpins and breathtaking views await on Switzerland's most iconic cycling climbs</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Furka Pass (2,429m)</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Distance:</strong> 30km from Realp | <strong>Elevation:</strong> 1,500m | <strong>Average Gradient:</strong> 7%
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The Furka is pure drama. The Rhône Glacier views alone justify the suffering. 
              Start early – afternoon winds can turn the descent into a wrestling match. 
              The final 5km from Gletsch averages 10% and will test your gearing choices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <strong>Pro tip:</strong> The old cobbled road (closed to cars) offers a quieter, more scenic alternative 
              if you're on a gravel bike or don't mind the rough surface.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Grimsel Pass (2,164m)</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Distance:</strong> 26km from Meiringen | <strong>Elevation:</strong> 1,400m | <strong>Average Gradient:</strong> 6.5%
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The "easiest" of the three, but don't be fooled. Consistent gradients make pacing crucial. 
              The lunar landscape near the summit feels like cycling on another planet. 
              The descent to Gletsch is technical – stay focused.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              <strong>Water stop:</strong> Restaurant Handegg at km 13 – fill bottles here, nothing until the top.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Susten Pass (2,224m)</h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Distance:</strong> 25km from Wassen | <strong>Elevation:</strong> 1,300m | <strong>Average Gradient:</strong> 6.8%
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The connoisseur's choice. Less traffic, perfect tarmac, and the most consistent gradients. 
              The series of hairpins from Wassen is cycling architecture at its finest. 
              The summit restaurant serves the best rösti in the Alps – earned calories taste better.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Ultimate Challenge: Loop of Death</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Furka + Grimsel + Susten in one day = 120km, 4,200m elevation. Start in Andermatt, 
            go counter-clockwise for the best descent sequence. Budget 8-10 hours including stops. 
            This isn't about speed – it's about finishing with a smile.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Hidden Gems Worth the Detour</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Klausen Pass (1,948m)</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Closed on Wednesdays for cyclists only! The east side from Linthal is brutally steep (sustained 10-12%), 
            but you'll have the road to yourself. The descent to Altdorf is 40km of cycling perfection.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Albula Pass (2,312m)</h3>
          <p className="text-gray-700 dark:text-gray-300">
            The thinking cyclist's pass. Moderate gradients, minimal traffic, and a summit that feels earned, not survived. 
            The La Punt side offers 30 hairpins in 12km – descending heaven.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Flüela Pass (2,383m)</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Gateway to the Engadin valley. The Davos side is relentless, but the descent to Susch 
            flows like water. Stop at the summit hospice – their homemade energy bars are legendary.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Practical Tips for Alpine Success</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Gearing is Everything</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Forget your ego – bring the granny gears. Compact crankset (50/34) minimum, 
            ideally with a 32T or larger cassette. You'll thank me at kilometer 20 of the Furka.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Weather Windows</h3>
          <p className="text-gray-700 dark:text-gray-300">
            June-September only. July-August for guaranteed clear roads. Start climbs before 10am 
            to avoid afternoon thunderstorms. Always pack a rain jacket – summit weather changes in minutes.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Fueling Strategy</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li className="mb-2">Eat before you're hungry – every 30 minutes on climbs</li>
            <li className="mb-2">Real food beats gels – try local Biberli or Nusstorte</li>
            <li className="mb-2">2 bottles minimum, 3 for hot days</li>
            <li className="mb-2">Electrolytes essential above 2,000m</li>
            <li className="mb-2">Summit restaurants are pricey but worth it for the experience</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Descent Safely</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These aren't closed race roads. Respect the speed, other traffic, and your limits. 
            Check brakes before starting. Layer up – it's cold at altitude even in summer. 
            The Grimsel descent has several blind corners – local buses don't yield.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Training for the Alps</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You can't fake fitness at altitude. Build base endurance with long Zone 2 rides. 
            Add weekly threshold intervals. Practice sustained efforts – find the longest climb 
            near you and repeat it. Mental preparation matters as much as physical.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Sample 8-Week Preparation</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li className="mb-2"><strong>Weeks 1-2:</strong> Base building, 8-10 hours/week</li>
            <li className="mb-2"><strong>Weeks 3-4:</strong> Add hill repeats, 10-12 hours/week</li>
            <li className="mb-2"><strong>Weeks 5-6:</strong> Long climbs, back-to-back days</li>
            <li className="mb-2"><strong>Week 7:</strong> Peak week, simulate target elevation</li>
            <li className="mb-2"><strong>Week 8:</strong> Taper and travel</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Logistics and Planning</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Base Camps</h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Andermatt:</strong> Perfect for Furka/Oberalp/Gotthard access<br/>
            <strong>Meiringen:</strong> Gateway to Grimsel/Susten/Grosse Scheidegg<br/>
            <strong>Davos:</strong> Flüela/Albula/Wolfgang base<br/>
            <strong>Airolo:</strong> Southern approach to Gotthard/Nufenen
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Swiss Cycling Culture</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Drivers respect cyclists. Use hand signals. Sunday mornings are prime time – expect company. 
            Mountain postbuses have right of way – always. Wave at other cyclists – 
            the suffering brotherhood transcends language.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Experience Beyond the Numbers</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Strava segments and power numbers tell half the story. The Alps deliver moments that 
            transcend data: sunrise breaking over the Gotthard, cow bells echoing through morning mist, 
            that first espresso after conquering the Furka.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            These passes have been traveled for centuries – by traders, armies, pilgrims. 
            On a bike, you join that continuum, earning every meter with your legs and lungs. 
            It's not about being fast. It's about being there.
          </p>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 mt-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Ride the Alps?</h3>
            <p className="mb-6">
              Explore our collection of Swiss Alpine routes, complete with GPS files, 
              elevation profiles, and local insider tips.
            </p>
            <Link 
              href="/routes"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Alpine Routes →
            </Link>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
            <h3 className="text-2xl font-bold mb-6">Essential Gear for Alpine Cycling</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Don't let equipment failure ruin your Alpine adventure. Here's what you need:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
              <li className="mb-2">Lightweight rain jacket (packable)</li>
              <li className="mb-2">Arm and leg warmers</li>
              <li className="mb-2">Quality cycling glasses (UV protection essential)</li>
              <li className="mb-2">Hydration pack for longer passes</li>
              <li className="mb-2">Emergency blanket</li>
              <li className="mb-2">High-calorie snacks</li>
              <li className="mb-2">Spare tubes and CO2 (shops are rare)</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}