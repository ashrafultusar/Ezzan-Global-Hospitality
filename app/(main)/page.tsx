
import FeaturedHotels from "@/components/home/featuredHotels/FeaturedHotels";


import HeroSection from "@/components/home/heroSection/HeroSection";

import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
    <FeaturedHotels/>
   {/* old */}
      <WhyChooseUs />
   
      <Suspense
        fallback={<div className="h-80 w-full bg-slate-100 animate-pulse" />}
      >
      
      </Suspense>


   
    </div>
  );
}
