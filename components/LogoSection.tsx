"use client";

import Image from "next/image";

const LogoSection = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 justify-items-center lg:grid-cols-none lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4">
          {/* First Row: 2 logos */}
          <div className="w-32 h-32 relative transition-transform duration-300 hover:scale-110 mix-blend-luminosity hover:mix-blend-normal">
            <Image
              src="/image28.png"
              alt="Logo 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative transition-transform duration-300 hover:scale-110 mix-blend-luminosity hover:mix-blend-normal">
            <Image
              src="/image28.png"
              alt="Logo 2"
              fill
              className="object-contain"
            />
          </div>

          {/* Second Row: 2 logos */}
          <div className="w-32 h-32 relative transition-transform duration-300 hover:scale-110 mix-blend-luminosity hover:mix-blend-normal">
            <Image
              src="/image28.png"
              alt="Logo 3"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-32 h-32 relative transition-transform duration-300 hover:scale-110 mix-blend-luminosity hover:mix-blend-normal">
            <Image
              src="/image28.png"
              alt="Logo 4"
              fill
              className="object-contain"
            />
          </div>

          {/* Third Row: 1 centered logo */}
          <div className="w-32 h-32 relative transition-transform duration-300 hover:scale-110 mix-blend-luminosity hover:mix-blend-normal">
            <Image
              src="/image28.png"
              alt="Logo 5"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
