// components/BookTrip.tsx
import { MapPin, Car, CreditCard } from "lucide-react";
import Image from "next/image";

interface StepProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
}

const Step = ({ icon, color, title, description }: StepProps) => (
  <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
    >
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="text-gray-600 font-semibold mb-2 ">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const BookTrip = () => {
  return (
    <div className="px-4 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="text-gray-500 mb-4 block">Easy and Fast</span>
            <h2 className="text-[#141840] text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className="space-y-8">
              <Step
                icon={<MapPin className="w-6 h-6 text-white" />}
                color="bg-[#F0BB1F]"
                title="Choose Destination"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
              />

              <Step
                icon={<CreditCard className="w-6 h-6 text-white" />}
                color="bg-[#F15A2B]"
                title="Make Payment"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
              />

              <Step
                icon={<Car className="w-6 h-6 text-white" />}
                color="bg-[#006380]"
                title="Reach Airport on Selected Date"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mt-12 lg:mt-0">
            {/* Blue blur effect */}
            <div className="absolute bottom-0 right-16 w-[354px] h-[367px] bg-[#59B1E6] rounded-full blur-[150px] opacity-30" />

            {/* Card */}
            <div className="relative  rounded-[26px] p-4 shadow-xl max-w-[370px] mx-auto">
              <Image
                src="/BookTrip.png"
                alt="Trip destination"
                className="w-full h-64 object-cover rounded-2xl mb-6 bg-center"
                width={450}
                height={555}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
