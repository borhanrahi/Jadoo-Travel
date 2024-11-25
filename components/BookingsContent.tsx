"use client";

import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Plane,
  Hotel,
  Car,
} from "lucide-react";
import Image from "next/image";

const BookingsContent = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container relative mx-auto px-4 py-8 lg:py-26">
        <div className="hero-bg-blur" />
        <div className="hero-bg-shape" />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
            <p className="text-[#DF694F] text-lg lg:text-xl uppercase tracking-wide">
              Manage Your Trips
            </p>

            <div className="relative max-w-[600px]">
              <h1 className="text-[#181E4B] text-4xl lg:text-6xl font-bold leading-[1.2] whitespace-normal break-words">
                Your Travel{" "}
                <span className="underline-effect inline-block">Journey</span>{" "}
                Starts Here
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: <Calendar className="w-6 h-6 text-[#DF694F]" />,
                  title: "Upcoming Trips",
                  desc: "View your scheduled journeys",
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#F1A501]" />,
                  title: "Past Travels",
                  desc: "Browse your travel history",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#006380]" />,
                  title: "New Booking",
                  desc: "Plan your next adventure",
                },
                {
                  icon: <Users className="w-6 h-6 text-[#747DEF]" />,
                  title: "Group Tours",
                  desc: "Join exciting group experiences",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-[#181E4B] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5E6282] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-full">
              <Image
                src="/traveller-1.png"
                alt="Booking Management"
                width={765}
                height={764}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Bookings Section */}
      <section className="bg-[#F7F7F7] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-[#5E6282] text-lg mb-2">Featured</h3>
            <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold">
              Popular Bookings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/rome.png",
                title: "Rome Package",
                price: "$1,200",
                duration: "5 days",
                type: "Flight + Hotel",
              },
              {
                image: "/london.png",
                title: "London Explorer",
                price: "$1,500",
                duration: "7 days",
                type: "All Inclusive",
              },
              {
                image: "/europe.png",
                title: "Paris Gateway",
                price: "$900",
                duration: "3 days",
                type: "Basic Package",
              },
            ].map((booking, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={booking.image}
                    alt={booking.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[#14183E] text-xl font-semibold mb-2">
                    {booking.title}
                  </h3>
                  <div className="flex items-center justify-between text-[#5E6282]">
                    <span>{booking.duration}</span>
                    <span className="font-bold">{booking.price}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[#006380]">
                    <span className="text-sm">{booking.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-[#5E6282] text-lg mb-2">How It Works</h3>
            <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold">
              Book in 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane className="w-8 h-8 text-[#DF694F]" />,
                title: "Choose Destination",
                desc: "Select your favorite destination and travel date",
              },
              {
                icon: <Hotel className="w-8 h-8 text-[#F1A501]" />,
                title: "Select Package",
                desc: "Pick the perfect travel package for your needs",
              },
              {
                icon: <Car className="w-8 h-8 text-[#006380]" />,
                title: "Book & Enjoy",
                desc: "Secure your booking and get ready for the journey",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-[#14183E] text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-[#5E6282]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsContent;
