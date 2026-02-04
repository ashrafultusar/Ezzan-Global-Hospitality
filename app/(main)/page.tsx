import FeaturedHotels from "@/components/home/featuredHotels/FeaturedHotels";

import HeroSection from "@/components/home/heroSection/HeroSection";
import RoomsAndSuites from "@/components/home/roomsAndSuites/RoomsAndSuites";
import Amenities from "@/components/home/amenities/Amenities";
import EventsMeetings from "@/components/home/eventsMeetings/EventsMeetings";

import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedHotels />
      <RoomsAndSuites />
      <Amenities />
      <EventsMeetings />

      <Suspense
        fallback={<div className="h-80 w-full bg-slate-100 animate-pulse" />}
      ></Suspense>
    </div>
  );
}
