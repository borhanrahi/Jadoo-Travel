import React from "react";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import BookTrip from "@/components/BookTrip";
import TestimonialSection from "@/components/TestimonialSection";
import LogoSection from "@/components/LogoSection";
import Subscribe from "@/components/Subscribe";
import HeroContent from "@/components/HeroContent";
const Page = () => {
  return (
    <main>
      <HeroContent />
      <Services />
      <Destinations />
      <BookTrip />
      <TestimonialSection />
      <LogoSection />
      <Subscribe />
    </main>
  );
};

export default Page;
