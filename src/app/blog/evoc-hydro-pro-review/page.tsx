import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EVOC Hydro Pro 6L Review: The Ultimate MTB & Gravel Racing Pack | Pedal Peak',
  description: 'In-depth review of the EVOC Hydro Pro 6L hydration pack. Real-world testing on gravel races and mountain bike trails. Discover why this became my go-to pack for endurance rides.',
  keywords: 'EVOC Hydro Pro review, hydration pack, MTB backpack, gravel racing pack, cycling hydration, EVOC backpack test, endurance cycling gear',
  openGraph: {
    title: 'EVOC Hydro Pro 6L Review: The Ultimate MTB & Gravel Racing Pack',
    description: 'Real-world testing of the EVOC Hydro Pro 6L on gravel races and mountain bike trails',
    type: 'article',
    publishedTime: '2024-08-20T00:00:00.000Z',
  },
};

export default function EvocHydroProReview() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            EVOC Hydro Pro 6L Review: My Go-To Pack for Gravel Races & MTB Adventures
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime="2024-08-20">August 20, 2024</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/images/gear/EVOC_HydroPro6_1.5LBladderHydrationBag_BladderIncluded_DustyPink_1080x.jpg"
              alt="EVOC Hydro Pro 6L hydration pack in dusty pink color"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="mb-2 inline-block bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black">
                GEAR REVIEW
              </div>
              <h2 className="text-2xl font-bold">EVOC Hydro Pro 6L</h2>
            </div>
          </div>
        </header>

        {/* Quick Verdict */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Verdict</h2>
          <p className="text-gray-700 dark:text-gray-300">
            After 6 months of abuse on gravel races and technical MTB trails, the EVOC Hydro Pro 6L has proven itself as an exceptional hydration pack. 
            It strikes the perfect balance between capacity, comfort, and stability that's often missing in lightweight race packs.
          </p>
          <div className="mt-4">
            <Link 
              href="https://amzn.to/3Va3Mc4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
            >
              Check Price on Amazon →
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Why I Chose the EVOC Hydro Pro</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Let's be honest – finding the right hydration pack for endurance riding is a pain. Too big and you're carrying unnecessary weight. 
            Too small and you're rationing water on those long summer climbs. After burning through three different packs last season, 
            I needed something that could handle both my weekend gravel races and all-day MTB epics in the Alps.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The EVOC Hydro Pro 6L caught my attention for one simple reason: it was designed by riders who actually race. 
            This isn't some generic outdoor pack with "cycling features" slapped on – it's purpose-built for the demands of competitive riding.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Real-World Testing: 6 Months on the Trail</h2>
          <h3 className="text-2xl font-semibold mt-8 mb-4">The Good: What Makes It Exceptional</h3>
          
          <h4 className="text-xl font-semibold mt-6 mb-3">Stability That Actually Works</h4>
          <p className="text-gray-700 dark:text-gray-300">
            The Neutralite System is marketing speak for "this pack doesn't bounce." And unlike most marketing claims, this one delivers. 
            The combination of the chest harness and hip belt creates a cocoon effect that keeps the pack glued to your back. 
            I've hammered down rocky descents at 50+ km/h and the pack stays put. No bouncing, no shifting, no constant adjustments.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-3">Ventilation That Prevents Swamp Back</h4>
          <p className="text-gray-700 dark:text-gray-300">
            The AirFlow Contact System uses a suspended mesh back panel that creates an air channel between the pack and your back. 
            On a recent 35°C gravel race in Tuscany, my jersey was soaked, but my back stayed noticeably cooler than with my previous pack. 
            It's not magic – you'll still sweat – but the difference is noticeable on long climbs.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-3">Storage That Makes Sense</h4>
          <p className="text-gray-700 dark:text-gray-300">
            6 liters doesn't sound like much, but EVOC has maximized every millimeter. The main compartment easily swallows:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li>Spare tube and mini pump</li>
            <li>Multi-tool and tire levers</li>
            <li>Rain jacket (compressed)</li>
            <li>Phone and wallet</li>
            <li>Enough food for a 5-hour ride</li>
            <li>First aid kit</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            The hip belt pockets are genius for quick-access items. I keep gels in the right pocket and my phone in the left. 
            No more stopping to dig through the main compartment for nutrition.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-3">Hydration System Excellence</h4>
          <p className="text-gray-700 dark:text-gray-300">
            The 2L bladder uses a wide-mouth opening that makes filling and cleaning simple. The magnetic hose clip is one of those small details 
            that makes a huge difference – the hose stays exactly where you want it, and you can grab it without looking.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">The Not-So-Good: Room for Improvement</h3>

          <h4 className="text-xl font-semibold mt-6 mb-3">Limited Capacity for Ultra-Distance</h4>
          <p className="text-gray-700 dark:text-gray-300">
            For races over 100km, 6L starts feeling tight. If you're planning self-supported ultra-endurance rides, 
            you might need to look at the larger Hydro Pro 12L or supplement with frame bags.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-3">Price Point</h4>
          <p className="text-gray-700 dark:text-gray-300">
            At around €140, it's not cheap. You're paying for German engineering and quality, but budget-conscious riders might balk at the price. 
            That said, after 6 months of hard use, it still looks nearly new – this is an investment that lasts.
          </p>

          <h4 className="text-xl font-semibold mt-6 mb-3">Learning Curve for Adjustments</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Getting the fit dialed takes time. The adjustment system offers tons of customization, but it's not immediately intuitive. 
            Plan to spend 30 minutes on your first ride getting everything perfect.
          </p>

          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-12">
            <Image
              src="/images/gear/thetraka_2025_chemavelascophoto-504 Large.jpeg"
              alt="Gravel racing action shot with hydration pack"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white max-w-md">
              <p className="text-lg font-medium">6 months of testing across gravel races, technical MTB trails, and Alpine adventures</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Performance in Different Conditions</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Gravel Racing</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This is where the Hydro Pro shines. The low-profile design doesn't catch wind on fast road sections, 
            and the stability means you can hammer through rough gravel without the pack becoming a distraction. 
            In my last 120km gravel race, I forgot I was wearing it – the ultimate compliment for any pack.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Technical MTB</h3>
          <p className="text-gray-700 dark:text-gray-300">
            On tight, technical trails, the narrow profile prevents snagging on branches. The weight distribution is spot-on – 
            even loaded with tools and water, it doesn't affect your center of gravity on steep descents or when manualing over obstacles.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">All-Day Epics</h3>
          <p className="text-gray-700 dark:text-gray-300">
            For 5-8 hour rides, comfort becomes critical. The padded shoulder straps and hip belt distribute weight evenly, 
            preventing hot spots. I've done back-to-back 6-hour rides without any discomfort – something I couldn't say about my previous packs.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tips for Getting the Most from Your Hydro Pro</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300">
            <li className="mb-3">
              <strong>Dial in the fit when stationary:</strong> Adjust the torso length first, then fine-tune the shoulder straps and hip belt. 
              The pack should sit snug but not restrictive.
            </li>
            <li className="mb-3">
              <strong>Use the compression straps:</strong> Even if the pack isn't full, cinch down the compression straps to prevent contents from shifting.
            </li>
            <li className="mb-3">
              <strong>Clean the bladder regularly:</strong> Use denture cleaning tablets monthly to prevent funk buildup. 
              The wide opening makes this easy.
            </li>
            <li className="mb-3">
              <strong>Organize strategically:</strong> Heavy items (tools, pump) go closest to your back. Light, bulky items (jacket) go on top.
            </li>
            <li className="mb-3">
              <strong>Pre-load for races:</strong> Set up your nutrition in the hip pockets the night before. One less thing to think about on race morning.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Specifications</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Volume:</dt>
                <dd className="text-gray-700 dark:text-gray-300">6L + 2L hydration</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Weight:</dt>
                <dd className="text-gray-700 dark:text-gray-300">680g (without bladder)</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Back Length:</dt>
                <dd className="text-gray-700 dark:text-gray-300">47cm</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Materials:</dt>
                <dd className="text-gray-700 dark:text-gray-300">210D Ripstop Nylon</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Features:</dt>
                <dd className="text-gray-700 dark:text-gray-300">Neutralite System, AirFlow Contact</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white">Warranty:</dt>
                <dd className="text-gray-700 dark:text-gray-300">2 years</dd>
              </div>
            </dl>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Who Should Buy This Pack?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Perfect for:</strong> Gravel racers, XC/trail mountain bikers, riders who prioritize stability and comfort, 
            3-6 hour ride enthusiasts, anyone tired of bouncing packs.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Skip if:</strong> You need massive storage for bikepacking, you only do short 1-2 hour rides, 
            you're on a tight budget, you prefer bottle-only hydration.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Final Verdict: Worth Every Penny</h2>
          <p className="text-gray-700 dark:text-gray-300">
            After 6 months and thousands of kilometers, the EVOC Hydro Pro 6L has earned permanent residence in my gear collection. 
            It's not perfect – no pack is – but it nails the fundamentals better than anything else I've tried.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The combination of stability, comfort, and thoughtful design makes it disappear on the trail, letting you focus on what matters: riding. 
            Yes, it's expensive, but considering it'll likely outlast three cheaper packs, the value proposition makes sense.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            For gravel racers and mountain bikers who demand performance without compromise, the EVOC Hydro Pro 6L is as good as it gets. 
            It's become my default choice for any ride over 2 hours, and I can't imagine going back to anything else.
          </p>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 mt-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Hydration Game?</h3>
            <p className="mb-6">
              The EVOC Hydro Pro 6L is available through various retailers. I recommend checking current prices and availability on Amazon for the best deals.
            </p>
            <Link 
              href="https://amzn.to/3Va3Mc4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View on Amazon →
            </Link>
          </div>

          {/* Rating Summary */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
            <h3 className="text-2xl font-bold mb-6">Rating Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Comfort</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Stability</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Storage</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Durability</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Value</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                  <span className="text-gray-300">★</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xl font-bold">Overall</span>
                <span className="text-2xl font-bold text-green-600">4.6/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}