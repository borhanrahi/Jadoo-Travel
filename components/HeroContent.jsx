import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="container relative mx-auto px-4 py-8 lg:py-26">
      <div className="hero-bg-blur" />
      <div className="hero-bg-shape" />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
          {/* Tagline */}
          <p className="text-[#DF694F] text-lg lg:text-xl uppercase tracking-wide">
            Best destinations around the world
          </p>

          {/* Heading - Updated with better text wrapping control */}
          <div className="relative max-w-[600px]">
            <h1 className="text-[#181E4B] text-4xl lg:text-6xl font-bold leading-[1.2] whitespace-normal break-words">
              Travel,{" "}
              <span className="underline-effect inline-block">enjoy</span> and
              live a new and full life
            </h1>
          </div>

          {/* Description - Added consistent width */}
          <p className="text-[#5E6282] text-base lg:text-lg max-w-[477px] whitespace-normal">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* CTA Buttons - Added better spacing */}
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#d89400] hover:shadow-lg whitespace-nowrap">
              Find out more
            </button>
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-[#DF694F] flex items-center justify-center transition-all duration-300 hover:bg-[#c85640] hover:shadow-lg">
                <div className="w-3 h-3 bg-white triangle-play"></div>
              </button>
              <span className="text-[#686D77] text-lg whitespace-nowrap">
                Play Demo
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-full">
            <Image
              src="/traveller-1.png"
              alt="Traveller"
              width={765}
              height={764}
              priority
              className="w-full h-auto object-contain"
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
