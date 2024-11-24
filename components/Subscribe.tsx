import Image from "next/image";

interface SubscribeProps {
  title?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function Subscribe({
  title = "Subscribe to get information, latest news and other interesting offers about Jadoo",
  placeholder = "Your email",
  buttonText = "Subscribe",
}: SubscribeProps) {
  return (
    <section className="relative w-full px-4 py-8 md:py-12 lg:py-24">
      {/* Reduced max-width container */}
      <div className="relative mx-auto max-w-[1170px]">
        {/* Adjusted padding and width */}
        <div className="relative bg-[#DFD7F9] rounded-[20px] px-6 py-8 md:px-12 md:py-12 lg:px-[70px] lg:py-[60px]">
          {/* Plus pattern - bottom right */}
          <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 lg:right-[-24px] lg:bottom-[-24px]">
            <Image
              src="/Group 4.svg"
              alt=""
              width={153}
              height={166}
              className="w-[100px] md:w-[120px] lg:w-[153px]"
              aria-hidden="true"
            />
          </div>

          {/* Content wrapper with reduced max-width */}
          <div className="relative z-10 flex flex-col items-center max-w-[680px] mx-auto">
            {/* Title */}
            <h2 className="text-[#5E6282] font-semibold text-xl md:text-2xl lg:text-[33px] lg:leading-[54px] text-center mb-8 md:mb-12 lg:mb-[54px]">
              {title}
            </h2>

            {/* Form section */}
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[24px] items-center justify-center">
              {/* Email input container */}
              <div className="w-full lg:w-[421px]">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={placeholder}
                    className="w-full h-[52px] md:h-[68px] rounded-[10px] pl-12 pr-4 
                             text-[#39425D] placeholder-[#39425D] 
                             focus:outline-none focus:ring-2 focus:ring-[#FF946D]
                             shadow-sm"
                    required
                  />
                  {/* Email icon */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none">
                      <rect
                        x="1"
                        y="1"
                        width="19"
                        height="16"
                        rx="4"
                        stroke="#39425D"
                      />
                      <path d="M1 5L10 9L19 5" stroke="#39425D" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subscribe button */}
              <button
                type="submit"
                className="w-full md:w-auto lg:w-[180px] h-[52px] md:h-[68px] 
                         bg-gradient-to-r from-[#FF946D] to-[#FF7D68] 
                         rounded-[10px] text-white font-medium px-8
                         hover:opacity-90 transition-opacity
                         focus:outline-none focus:ring-2 focus:ring-[#FF946D] focus:ring-offset-2"
              >
                {buttonText}
              </button>
            </div>
          </div>

          {/* Decorative circle with send icon - right side */}
          <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 lg:right-[-35px] lg:top-1/2 lg:-translate-y-1/2">
            <div
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] 
                       rounded-full bg-gradient-to-br from-[#747DEF] to-[#5E3BE1] 
                       flex items-center justify-center rotate-[-30deg]
                       shadow-lg"
              aria-hidden="true"
            >
              {/* Send icon */}
              <div className="relative w-[34px] h-[30px] flex items-center justify-center">
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M0 0L35 15L0 30V18.75L25 15L0 11.25V0Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Background mask groups - adjusted positioning */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <Image
              src="/MaskGroup1.png"
              alt=""
              width={284}
              height={291}
              className="opacity-50 scale-75"
              aria-hidden="true"
            />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <Image
              src="/MaskGroup2.png"
              alt=""
              width={284}
              height={291}
              className="opacity-50 scale-75"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
