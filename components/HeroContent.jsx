import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="container relative mx-auto px-4 py-8 lg:py-26">
      <div
        className="hero-bg-blur"
        style={{
          left: "-420px",
          top: "-60px",
        }}
      />
      <div
        className="hero-bg-shape"
        style={{
          right: "-200px",
          top: "-149px",
        }}
      />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
          {/* Tagline */}
          <p className="text-[#DF694F] text-lg lg:text-xl">
            BEST DESTINATIONS AROUND THE WORLD
          </p>

          {/* Heading */}
          <div className="relative">
            <h1 className="text-[#181E4B] text-4xl lg:text-6xl font-bold leading-tight">
              Travel, <span className="underline-effect">enjoy</span> and live a
              new and full life
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#5E6282] text-base lg:text-lg max-w-[477px]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#d89400] hover:shadow-lg">
              Find out more
            </button>
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-[#DF694F] flex items-center justify-center transition-all duration-300 hover:bg-[#c85640] hover:shadow-lg hover:scale-105">
                <div className="w-3 h-3 bg-white triangle-play"></div>
              </button>
              <span className="text-[#686D77] text-lg">Play Demo</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/traveller-1.png"
            alt="Traveller"
            width={765}
            height={764}
            className="w-full h-auto"
            quality={90}
            loading="eager"
            style={{
              objectFit: "contain",
              transform: "translate3d(0, 0, 0)",
            }}
          />

          {/* Decorative planes */}
          <div className="hidden lg:block absolute top-32 left-32 transform rotate-45">
            {/* Add plane SVG or image here */}
          </div>
          <div className="hidden lg:block absolute top-16 right-16 transform rotate-45">
            {/* Add plane SVG or image here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
