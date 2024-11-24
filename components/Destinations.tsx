import Image from "next/image";
import { MapPin } from "lucide-react";

// Interfaces
interface DestinationCard {
  id: string;
  image: string;
  title: string;
  duration: string;
  price: string;
}

interface DestinationsProps {
  destinations?: DestinationCard[];
}

// Rename the default destinations array to defaultDestinations
const defaultDestinations = [
  {
    id: "1",
    title: "Rome",
    price: "$5,42k",
    duration: "10 days trip",
    image: "/rome.png",
  },
  {
    id: "2",
    title: "London",
    price: "$4.2k",
    duration: "12 days trip",
    image: "/london.png",
  },
  {
    id: "3",
    title: "Helsinki",
    price: "$3.9k",
    duration: "7 days trip",
    image: "/europe.png",
  },
];

const Destinations = ({
  destinations = defaultDestinations,
}: DestinationsProps) => {
  return (
    <section className="relative px-4 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#5E6282] text-lg mb-2">Top Selling</h3>
          <h2 className="text-[#14183E] text-3xl md:text-4xl lg:text-5xl font-bold">
            Top Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 justify-items-center">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative w-[314px] h-[457px] overflow-hidden rounded-3xl bg-white shadow-lg transition-transform hover:scale-105"
            >
              {/* Image Container - covers full card */}
              <div className="absolute inset-0">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Text Content - overlaid at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#5E6282]">
                    {destination.title}
                  </h3>
                  <span className="text-lg font-bold text-[#5E6282]">
                    {destination.price}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#080809]" />
                  <span className="text-sm text-[#5E6282]">
                    {destination.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:block absolute right-20 top-80 -z-10">
          <Image
            src="/Decore1.svg"
            alt="Decorative element"
            width={98}
            height={254}
            className="opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
