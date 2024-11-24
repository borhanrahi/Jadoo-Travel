import React from "react";
import Weather from "../public/Group 48.svg";
import Flights from "../public/Group 49.svg";
import Events from "../public/Group 51.svg";
import Customization from "../public/Group 50.svg";
import DecorationPlus from "../public/Group 4.svg";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  isActive = false,
}) => {
  return (
    <div
      className={`relative p-8 rounded-[36px] transition-all duration-300 ${
        isActive
          ? "bg-white shadow-2xl hover:-translate-y-2"
          : "hover:bg-white hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="relative">
        <div className="relative mb-8 flex items-center md:justify-center justify-start">
          {icon}
        </div>
      </div>
      <h3 className="text-[#1E1D4C] text-xl font-semibold mb-4">{title}</h3>
      <p className="text-[#5E6282] text-base leading-[26px]">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="relative px-4 py-16 md:py-24 lg:py-32">
      {/* Decorative Plus Pattern */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px]">
        <DecorationPlus className="w-full h-full" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#5E6282] text-lg mb-4 block">CATEGORY</span>
          <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Weather Service - Card 1 */}
          <ServiceCard
            icon={<WeatherIcon />}
            title="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />

          {/* Events Service - Card 2 (Active) */}
          <ServiceCard
            icon={<EventsIcon />}
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
            isActive={true}
          />

          {/* Customization - Card 3 */}
          <ServiceCard
            icon={<CustomizationIcon />}
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed listening."
          />

          {/* Flights Service - Card 4 */}
          <ServiceCard
            icon={<FlightsIcon />}
            title="Customization"
            description="We deliver outsourced aviation services for military customers"
          />
        </div>
      </div>
    </section>
  );
};

// Update icon components
const WeatherIcon = () => (
  <div className="relative flex items-center justify-center">
    <Weather className="object-contain" />
  </div>
);

const FlightsIcon = () => (
  <div className="relative flex items-center justify-center">
    <Flights className="object-contain" />
  </div>
);

const EventsIcon = () => (
  <div className="relative flex items-center justify-center ">
    <Events className="object-contain h-20 " />
  </div>
);

const CustomizationIcon = () => (
  <div className="relative flex items-center justify-center">
    <Customization className="object-contain" />
  </div>
);

export default Services;
