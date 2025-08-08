"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function PiedmontPacking() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const packingCategories = [
    {
      title: "Bike",
      items: [
        { name: "bottles", id: "bottles" },
        { name: "Reparation kit", id: "reparation" },
        { name: "pump", id: "pump" },
        { name: "Multitool", id: "multitool" },
        { name: "Zip ties", id: "zip-ties" },
        { name: "spare brake pads", id: "brake-pads" },
        { name: "Inner tubes", id: "inner-tubes" },
        { name: "Tire lifters", id: "tire-lifters" },
        { name: "chain links", id: "chain-links" },
        { name: "Tubeless repair", id: "tubeless-repair" },
        { name: "Dynaplug", id: "dynaplug" },
        { name: "Toptube bag", id: "toptube-bag" },
        { name: "Helmet", id: "helmet" },
        { name: "sunglasses", id: "sunglasses" },
      ],
    },
    {
      title: "Electronics",
      items: [
        { name: "iPhone charger + cable", id: "iphone-charger" },
        { name: "Wahoo/garmin", id: "wahoo-garmin" },
        { name: "Bike lights", id: "bike-lights" },
        { name: "powerbank", id: "powerbank" },
        { name: "Airpods", id: "airpods" },
      ],
    },
    {
      title: "Documents",
      items: [
        { name: "credit cards", id: "credit-cards" },
        { name: "Cash euros/creditcard", id: "cash-euros" },
        { name: "Passport", id: "passport" },
      ],
    },
    {
      title: "Toiletries & Co",
      items: [
        { name: "Toothbrush + paste", id: "toothbrush" },
        { name: "Sun cream", id: "sun-cream" },
        { name: "Hair brush", id: "hair-brush" },
        { name: "Microfiber towel", id: "microfiber-towel" },
        { name: "chamois cream", id: "chamois-cream" },
      ],
    },
    {
      title: "Clothes",
      items: [
        { name: "Bike shorts 1x", id: "bike-shorts" },
        { name: "jersey 1x", id: "jersey" },
        { name: "Windjacket", id: "windjacket" },
        { name: "Socks", id: "socks" },
        { name: "Glasses", id: "glasses" },
        { name: "Gloves", id: "gloves" },
        { name: "base layer", id: "base-layer" },
        { name: "Bike shoes", id: "bike-shoes" },
        { name: "Shoes/flipflops", id: "shoes-flipflops" },
        { name: "T-shirt", id: "t-shirt" },
        { name: "Normal pants", id: "normal-pants" },
        { name: "Bikini", id: "bikini" },
        { name: "Underwear", id: "underwear" },
        { name: "Sports bra&apos;s", id: "sports-bras" },
      ],
    },
    {
      title: "Food & Snacks",
      items: [{ name: "Snacks", id: "snacks" }],
    },
  ];

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const totalItems = packingCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const checkedCount = checkedItems.size;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/piedmont/andrea-rapuzzi-4r8Cn0f3QFE-unsplash.jpg"
            alt="Piedmont cycling equipment"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-block bg-white px-4 py-2 text-sm font-medium uppercase tracking-wider text-black">
            CYCLING ESSENTIALS
          </div>
          <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight md:text-7xl">
            Packing
            <br />
            <span className="text-white/80">List</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl font-light md:text-2xl">
            Everything we need for our 4-day cycling adventure through Piedmont
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#packing">Check Your Gear</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/piedmont">← Back to Overview</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 shadow-sm">
            <div className="text-lg font-bold text-black">
              {checkedCount} / {totalItems}
            </div>
            <div className="text-sm font-medium text-gray-600">items packed</div>
            <div className="h-3 w-40 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-500"
                style={{ width: `${(checkedCount / totalItems) * 100}%` }}
              />
            </div>
            {checkedCount === totalItems && totalItems > 0 && (
              <div className="text-sm font-medium text-green-600">🎉 All packed!</div>
            )}
          </div>
        </div>
      </section>

      {/* Packing List Section */}
      <section className="py-16" id="packing">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold uppercase tracking-tight">
              Interactive Packing List
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Check off items as you pack them. Your progress is saved in your browser.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packingCategories.map((category, catIndex) => {
                const categoryEmojis: { [key: string]: string } = {
                  Bike: "🚴",
                  Electronics: "🔌",
                  Documents: "📄",
                  "Toiletries & Co": "🧴",
                  Clothes: "👕",
                  "Food & Snacks": "🍫",
                };

                return (
                  <div key={catIndex} className="card p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                        <span className="text-xl">
                          {categoryEmojis[category.title] || "📦"}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold uppercase tracking-wide text-black">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item) => {
                        const isChecked = checkedItems.has(item.id);
                        return (
                          <li
                            key={item.id}
                            className="flex items-center gap-3"
                          >
                            <input
                              type="checkbox"
                              id={item.id}
                              checked={isChecked}
                              onChange={() => toggleItem(item.id)}
                              className="h-4 w-4 rounded border-gray-400 text-black focus:ring-black focus:ring-2 cursor-pointer"
                            />
                            <label
                              htmlFor={item.id}
                              className={`text-sm cursor-pointer select-none transition-all flex-1 ${ 
                                isChecked
                                  ? "text-gray-400 line-through"
                                  : "text-gray-700 hover:text-black"
                              }`}
                            >
                              {item.name}
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Packing Tips */}
            <div className="mt-16 card p-8 bg-gray-50">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-black mb-8 text-center">
                Essential Packing Tips
              </h3>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h4 className="font-semibold text-black mb-3 text-lg">
                    Weight Distribution
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pack heavier items low and close to the bike&apos;s center of gravity for better stability on long rides.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <h4 className="font-semibold text-black mb-3 text-lg">
                    Weather Ready
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    August in Piedmont can be warm (25-30°C) with occasional afternoon showers. Pack layers!
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-black mb-3 text-lg">
                    Essentials Access
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Keep passport, credit cards, and phone charger easily accessible in your top tube bag.
                  </p>
                </div>
              </div>
            </div>

            {/* Bike-specific Tips */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="card p-6 border-l-4 border-black">
                <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                  🔧 Mechanical Prep
                </h4>
                <p className="text-sm text-gray-600">
                  Service your bike before departure. Check tire pressure, brake pads, 
                  and drivetrain. Bring spare parts for components you rely on most.
                </p>
              </div>
              <div className="card p-6 border-l-4 border-black">
                <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                  🧳 Smart Packing
                </h4>
                <p className="text-sm text-gray-600">
                  Use compression packing cubes for clothes. Distribute weight evenly 
                  between front and rear. Test your setup on a short ride first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="text-2xl font-bold uppercase tracking-wider text-black transition-colors hover:text-gray-600"
          >
            Pedal Peak
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Our Personal Cycling Adventures
          </p>
        </div>
      </footer>
    </div>
  );
}