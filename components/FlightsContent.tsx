"use client";

import { useState, useEffect } from "react";
import { Search, Clock, Shield, Wifi, Coffee, Luggage } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Flight {
  id: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  price: string;
  airline: string;
  image: string;
  duration: string;
  stops: number;
  href: string;
}

const flights: Flight[] = [
  {
    id: "1",
    from: "London",
    to: "New York",
    departure: "10:00 AM",
    arrival: "1:30 PM",
    price: "$499",
    airline: "British Airways",
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000",
    duration: "7h 30m",
    stops: 0,
    href: "/flights/london-newyork",
  },
  {
    id: "2",
    from: "Dubai",
    to: "Singapore",
    departure: "2:15 PM",
    arrival: "4:45 AM",
    price: "$645",
    airline: "Emirates",
    image:
      "https://images.unsplash.com/photo-1583997052301-0042b33fc598?q=80&w=1000",
    duration: "8h 30m",
    stops: 1,
    href: "/flights/dubai-singapore",
  },
  {
    id: "3",
    from: "Paris",
    to: "Tokyo",
    departure: "11:20 AM",
    arrival: "7:45 AM",
    price: "$879",
    airline: "Air France",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
    duration: "12h 25m",
    stops: 1,
    href: "/flights/paris-tokyo",
  },
  {
    id: "4",
    from: "Sydney",
    to: "Los Angeles",
    departure: "9:30 PM",
    arrival: "6:15 PM",
    price: "$945",
    airline: "Qantas",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000",
    duration: "13h 45m",
    stops: 0,
    href: "/flights/sydney-la",
  },
  {
    id: "5",
    from: "Singapore",
    to: "Seoul",
    departure: "1:20 PM",
    arrival: "8:45 PM",
    price: "$425",
    airline: "Singapore Airlines",
    image:
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1000",
    duration: "6h 25m",
    stops: 0,
    href: "/flights/singapore-seoul",
  },
  {
    id: "6",
    from: "Amsterdam",
    to: "Barcelona",
    departure: "8:45 AM",
    arrival: "11:00 AM",
    price: "$189",
    airline: "KLM",
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1000",
    duration: "2h 15m",
    stops: 0,
    href: "/flights/amsterdam-barcelona",
  },
];

const FlightsContent = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", {
      searchQuery,
      departureDate,
      returnDate,
      passengers,
    });
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
      <div className="relative bg-gradient-to-r from-[#DF694F] to-[#F1A501] text-white">
        <div className="mx-auto px-4 py-20 max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find and Book Flights
            </h1>
            <p className="text-lg md:text-xl mb-12 opacity-90">
              Discover the best flight deals to your favorite destinations
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
                  placeholder="Where to?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#DF694F] text-gray-800"
                />
              </div>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#DF694F] text-gray-800"
              />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#DF694F] text-gray-800"
              />
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(parseInt(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#DF694F] text-gray-800"
                  placeholder="Passengers"
                />
              </div>
              <button
                type="submit"
                className="bg-[#DF694F] text-white px-6 py-2 rounded-lg hover:bg-[#c85640] transition-colors"
              >
                Search Flights
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Flights */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Routes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flights.map((flight) => (
              <Link
                href={flight.href}
                key={flight.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={flight.image}
                    alt={`${flight.from} to ${flight.to}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {flight.from} → {flight.to}
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{flight.duration}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#DF694F]">
                      {flight.price}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{flight.airline}</span>
                    <span>
                      {flight.stops === 0 ? "Direct" : `${flight.stops} Stop`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Special Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Early Bird Special",
                description: "Book 60 days in advance and save up to 25%",
                image:
                  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000",
                offer: "25% OFF",
              },
              {
                title: "Last Minute Deals",
                description: "Grab amazing discounts on last-minute flights",
                image:
                  "https://images.unsplash.com/photo-1583997052301-0042b33fc598?q=80&w=1000",
                offer: "40% OFF",
              },
            ].map((deal) => (
              <div
                key={deal.title}
                className="relative overflow-hidden rounded-2xl h-[300px] group"
              >
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end text-white">
                  <div className="bg-[#DF694F] text-white px-4 py-2 rounded-full w-fit mb-4">
                    {deal.offer}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-white/90">{deal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Services */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto px-4 max-w-[1240px]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            In-Flight Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wifi />, label: "Wi-Fi" },
              { icon: <Coffee />, label: "Meals" },
              { icon: <Luggage />, label: "Extra Baggage" },
              { icon: <Shield />, label: "Travel Insurance" },
            ].map((service) => (
              <div
                key={service.label}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-[#DF694F] mb-4">{service.icon}</div>
                <span className="text-gray-800 font-medium">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#DF694F] to-[#F1A501]">
        <div className="mx-auto px-4 max-w-[1240px]">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss a Deal
            </h2>
            <p className="mb-8 opacity-90">
              Subscribe to our newsletter and get the latest flight deals
              delivered to your inbox
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#DF694F] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default FlightsContent;
