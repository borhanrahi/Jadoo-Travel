"use client";

import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Star,
  Wifi,
  Coffee,
  Bath,
  Car,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  amenities: string[];
  href: string;
}

const hotels: Hotel[] = [
  {
    id: "1",
    name: "Luxury Resort & Spa",
    location: "Maldives",
    rating: 4.9,
    price: "$450/night",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1",
    amenities: ["Pool", "Spa", "Restaurant", "Beach Access"],
    href: "/hotels/luxury-resort",
  },
  {
    id: "2",
    name: "Urban Boutique Hotel",
    location: "New York",
    rating: 4.7,
    price: "$320/night",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    amenities: ["WiFi", "Gym", "Bar", "Room Service"],
    href: "/hotels/urban-boutique",
  },
  {
    id: "3",
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    rating: 4.8,
    price: "$280/night",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    amenities: ["Ski Access", "Spa", "Restaurant", "Parking"],
    href: "/hotels/mountain-lodge",
  },
  {
    id: "4",
    name: "Seaside Paradise Resort",
    location: "Bali",
    rating: 4.9,
    price: "$390/night",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    amenities: ["Private Beach", "Pool", "Spa", "Water Sports"],
    href: "/hotels/seaside-paradise",
  },
  {
    id: "5",
    name: "Desert Oasis Hotel",
    location: "Dubai",
    rating: 4.8,
    price: "$420/night",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    amenities: ["Pool", "Desert Tours", "Luxury Spa", "Fine Dining"],
    href: "/hotels/desert-oasis",
  },
  {
    id: "6",
    name: "Historic City Hotel",
    location: "Rome",
    rating: 4.6,
    price: "$280/night",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882",
    amenities: ["WiFi", "Restaurant", "Bar", "City Tours"],
    href: "/hotels/historic-city",
  },
];

const HotelsContent = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", { searchQuery, checkIn, checkOut });
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white">
        <div className="mx-auto px-4 py-20 max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Perfect Stay
            </h1>
            <p className="text-lg md:text-xl mb-12 opacity-90">
              Discover handpicked hotels for your dream vacation
            </p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="bg-white p-4 rounded-2xl shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF7D68] text-gray-800"
                />
              </div>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF7D68] text-gray-800"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF7D68] text-gray-800"
              />
              <button
                type="submit"
                className="bg-[#FF7D68] text-white px-6 py-2 rounded-lg hover:bg-[#ff6b54] transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Hotels */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Hotels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Link
                href={hotel.href}
                key={hotel.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{hotel.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#FF7D68]">
                      {hotel.price}
                    </span>
                    <span className="text-gray-500">per night</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wifi />, label: "Free WiFi" },
              { icon: <Bath />, label: "Swimming Pool" },
              { icon: <Coffee />, label: "Breakfast" },
              { icon: <Car />, label: "Free Parking" },
            ].map((amenity) => (
              <div
                key={amenity.label}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-[#FF7D68] mb-4">{amenity.icon}</div>
                <span className="text-gray-800 font-medium">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Weekend Getaway",
                description: "Save 20% on weekend stays",
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                offer: "20% OFF",
              },
              {
                title: "Extended Stay",
                description: "Special rates for stays over 7 nights",
                image:
                  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
                offer: "30% OFF",
              },
            ].map((offer) => (
              <div
                key={offer.title}
                className="relative overflow-hidden rounded-2xl h-[300px] group"
              >
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
                  <div className="bg-[#FF7D68] text-white px-4 py-2 rounded-full w-fit mb-4">
                    {offer.offer}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-white/90">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Best Price Guarantee",
                description:
                  "Find a lower price? We'll match it and give you 10% off.",
                icon: <Star className="w-8 h-8" />,
              },
              {
                title: "24/7 Support",
                description: "Our travel experts are here to help you anytime.",
                icon: <MapPin className="w-8 h-8" />,
              },
              {
                title: "Flexible Booking",
                description:
                  "Change your dates or cancel for free up to 24 hours before check-in.",
                icon: <Calendar className="w-8 h-8" />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF7D68]/10 text-[#FF7D68] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#FF946D] to-[#FF7D68]">
        <div className="mx-auto px-4 max-w-[1240px]">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Exclusive Hotel Deals
            </h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter and receive special offers and last
              minute deals
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#FF7D68] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelsContent;
