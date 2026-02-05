import FeaturedHotels from "@/components/main/home/featuredHotels/FeaturedHotels";
import HeroSection from "@/components/main/home/heroSection/HeroSection";
import RoomsAndSuites from "@/components/main/home/roomsAndSuites/RoomsAndSuites";

import EventsMeetings from "@/components/main/home/eventsMeetings/EventsMeetings";

import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedHotels />
      <RoomsAndSuites />
      <EventsMeetings />
      <Suspense
        fallback={<div className="h-80 w-full bg-slate-100 animate-pulse" />}
      ></Suspense>
    </div>
  );
}
