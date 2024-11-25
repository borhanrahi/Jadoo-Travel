"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Search,
  Umbrella,
  Mountain,
  Palmtree,
  Building,
  Sun,
  Car,
  Hotel,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { icon: <Palmtree />, label: "Beaches" },
  { icon: <Mountain />, label: "Mountains" },
  { icon: <Building />, label: "Cities" },
  { icon: <Umbrella />, label: "Resorts" },
] as const;

const DestinationsContent = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const destinations = [
    {
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000",
      title: "Rome, Italy",
      rating: "4.8",
      price: "$5.42k",
      duration: "10 days trip",
      href: "/destinations/rome",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000",
      title: "London, UK",
      rating: "4.7",
      price: "$4.2k",
      duration: "12 days trip",
      href: "/destinations/london",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
      title: "Paris, France",
      rating: "4.9",
      price: "$3.9k",
      duration: "7 days trip",
      href: "/destinations/paris",
    },
  ];

  const popularDestinations = [
    {
      image: "https://images.unsplash.com/photo-1525874684015-58379d421a52",
      title: "Bali, Indonesia",
      rating: "4.9",
      price: "$2.5k",
      duration: "8 days trip",
      href: "/destinations/bali",
    },
    {
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      title: "Maldives",
      rating: "4.8",
      price: "$4.2k",
      duration: "7 days trip",
      href: "/destinations/maldives",
    },
    {
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      title: "Tuscany, Italy",
      rating: "4.7",
      price: "$3.1k",
      duration: "5 days trip",
      href: "/destinations/tuscany",
    },
    ...destinations,
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  if (!mounted) {
    return (
      <div className="mx-auto px-4 py-8 lg:py-26 max-w-[1240px] relative">
        <div className="hero-bg-blur" />
        <div className="hero-bg-shape" />
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="mx-auto px-4 py-8 lg:py-26 max-w-[1240px] relative">
        <div className="hero-bg-blur" />
        <div className="hero-bg-shape" />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
            <p className="text-[#DF694F] text-lg lg:text-xl uppercase tracking-wide">
              Top Destinations
            </p>

            <div className="relative max-w-[600px]">
              <h1 className="text-[#181E4B] text-4xl lg:text-6xl font-bold leading-[1.2] whitespace-normal break-words">
                Discover{" "}
                <span className="underline-effect inline-block">Amazing</span>{" "}
                Places
              </h1>
            </div>

            {/* Search Section */}
            <form onSubmit={handleSearch} className="relative mt-8">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg">
                <Search className="w-5 h-5 text-[#5E6282]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="flex-1 outline-none text-[#14183E]"
                />
                <button
                  type="submit"
                  className="bg-[#F1A501] text-white px-6 py-2 rounded-lg hover:bg-[#d89400] transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {categories.map((category) => (
                <div
                  key={category.label}
                  onClick={() => handleCategoryClick(category.label)}
                  className={`flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer ${
                    activeCategory === category.label
                      ? "ring-2 ring-[#DF694F]"
                      : ""
                  }`}
                >
                  <div className="text-[#DF694F] mb-2">{category.icon}</div>
                  <span className="text-[#14183E] text-sm font-medium">
                    {category.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000"
                alt="World Destinations"
                fill
                priority
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="bg-[#F7F7F7] py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <Link
                href={destination.href}
                key={destination.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[#14183E] text-xl font-semibold">
                      {destination.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span className="text-[#F1A501]">★</span>
                      <span className="text-[#5E6282]">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[#5E6282]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <span className="font-bold">{destination.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Grid */}
      <section className="bg-[#F7F7F7] py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-[#5E6282] text-lg">
              Discover the most loved travel destinations around the world
            </p>
          </div>

          {/* Existing destinations grid */}
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Experiences
            </h2>
            <p className="text-[#5E6282] text-lg">
              Unique activities curated by travel experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Tours",
                description: "Immerse yourself in local traditions and customs",
                image:
                  "https://images.unsplash.com/photo-1533669955142-6a73332af4db",
              },
              {
                title: "Adventure Sports",
                description: "Thrilling activities for the adventurous soul",
                image:
                  "https://images.unsplash.com/photo-1533130061792-64b345e4a833",
              },
              {
                title: "Food & Cuisine",
                description: "Taste authentic local flavors and delicacies",
                image:
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              },
            ].map((experience) => (
              <div
                key={experience.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="bg-[#F7F7F7] py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <div className="text-center mb-12">
            <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Travel Tips
            </h2>
            <p className="text-[#5E6282] text-lg">
              Essential advice for your next adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Best Time to Visit",
                description:
                  "Learn about seasonal highlights and weather patterns",
                icon: <Sun className="w-8 h-8" />,
              },
              {
                title: "Local Transport",
                description: "Navigate like a local with transportation tips",
                icon: <Car className="w-8 h-8" />,
              },
              {
                title: "Accommodation",
                description:
                  "Find the perfect place to stay within your budget",
                icon: <Hotel className="w-8 h-8" />,
              },
              {
                title: "Safety Guide",
                description: "Stay safe and secure during your travels",
                icon: <Shield className="w-8 h-8" />,
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-[#DF694F] mb-4">{tip.icon}</div>
                <h3 className="text-[#14183E] text-xl font-semibold mb-2">
                  {tip.title}
                </h3>
                <p className="text-[#5E6282]">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationsContent;
