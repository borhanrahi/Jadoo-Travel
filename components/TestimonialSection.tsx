"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location?: string;
  image?: string;
  testimonial: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mike Taylor",
    role: "CEO",
    location: "Lahore, Pakistan",
    image: "/avatar.png",
    testimonial:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    id: 2,
    name: "Chris Thomas",
    role: "CEO of Red Button",
    image: "/avatar.png",
    testimonial:
      "Lorrem a a On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % testimonialData.length;

  const nextTestimonial = () => {
    setCurrentIndex(nextIndex);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    );
  };

  return (
    <section className="px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:space-x-12 xl:space-x-24">
          {/* Left Content - 40% */}
          <div className="w-full lg:w-[40%] mb-12 lg:mb-0">
            <div className="max-w-lg">
              <h3 className="text-sm font-medium text-[#5E627D] mb-4">
                TESTIMONIALS
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14183E] leading-tight mb-8 lg:mb-12">
                What People Say
                <br />
                About Us.
              </h2>
              {/* Dots Navigation */}
              <div className="flex gap-3">
                {testimonialData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#394C5D]" : "bg-[#E5E5E5]"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 60% */}
          <div className="w-full lg:w-[60%]">
            <div className="relative min-h-[400px]">
              {/* Next/Background Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`background-${nextIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-8 -right-8 top-4 h-[320px] bg-white rounded-lg border border-[#F7F7F7]"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-8 left-8"
                  >
                    <h4 className="text-[#5E627D] font-medium text-lg mb-1">
                      {testimonialData[nextIndex].name}
                    </h4>
                    <p className="text-[#5E627D] text-sm">
                      {testimonialData[nextIndex].role}
                      {testimonialData[nextIndex].location && (
                        <span>, {testimonialData[nextIndex].location}</span>
                      )}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Active Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`active-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute left-0 right-0 top-0 bg-white rounded-lg border border-[#F7F7F7] p-8 shadow-testimonial"
                >
                  {testimonialData[currentIndex].image && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -left-4 -top-4"
                    >
                      <div className="w-[68px] h-[68px] rounded-full overflow-hidden bg-white p-0.5">
                        <Image
                          src={testimonialData[currentIndex].image}
                          alt={testimonialData[currentIndex].name}
                          width={68}
                          height={68}
                          className="object-cover rounded-full"
                        />
                      </div>
                    </motion.div>
                  )}

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#4E4F82] text-lg mb-6 mt-8 pr-12 lg:pr-0"
                  >
                    &quot;{testimonialData[currentIndex].testimonial}&quot;
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-[#5E627D] font-medium text-lg mb-1">
                      {testimonialData[currentIndex].name}
                    </h4>
                    <p className="text-[#5E627D] text-sm">
                      {testimonialData[currentIndex].role}
                      {testimonialData[currentIndex].location && (
                        <span>, {testimonialData[currentIndex].location}</span>
                      )}
                    </p>
                  </motion.div>

                  {/* Mobile Navigation Arrows */}
                  <div className="absolute right-8 top-8 flex flex-col gap-4 lg:hidden">
                    <button
                      onClick={prevTestimonial}
                      className="text-[#B7B7B7] hover:text-[#394C5D] transition-colors p-2"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        className="w-4 h-4 rotate-180"
                        viewBox="0 0 14 7"
                        fill="none"
                      >
                        <path
                          d="M1 1L7 6L13 1"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="text-[#394C5D] hover:text-[#14183E] transition-colors p-2"
                      aria-label="Next testimonial"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 14 7" fill="none">
                        <path
                          d="M1 1L7 6L13 1"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Desktop Navigation Arrows */}
              <div className="hidden lg:flex absolute -right-20 top-1/2 -translate-y-1/2 flex-col gap-4">
                <button
                  onClick={prevTestimonial}
                  className="text-[#B7B7B7] hover:text-[#394C5D] transition-colors p-2"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-4 h-4 rotate-180"
                    viewBox="0 0 14 7"
                    fill="none"
                  >
                    <path
                      d="M1 1L7 6L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="text-[#394C5D] hover:text-[#14183E] transition-colors p-2"
                  aria-label="Next testimonial"
                >
                  <svg className="w-4 h-4" viewBox="0 0 14 7" fill="none">
                    <path
                      d="M1 1L7 6L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
