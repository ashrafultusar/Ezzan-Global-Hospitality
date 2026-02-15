import FeaturedHotels from "@/components/main/home/featuredHotels/FeaturedHotels";
import HeroSection from "@/components/main/home/heroSection/HeroSection";
import RoomsAndSuites from "@/components/main/home/roomsAndSuites/RoomsAndSuites";
import EventsMeetings from "@/components/main/home/eventsMeetings/EventsMeetings";
import { Suspense } from "react";

const HotelSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <div className="h-10 w-48 bg-gray-200 animate-pulse mb-8 mx-auto rounded" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-[400px] w-full bg-gray-100 animate-pulse rounded-xl"
        />
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Suspense fallback={<HotelSkeleton />}>
        <FeaturedHotels />
      </Suspense>
      <RoomsAndSuites />
      <EventsMeetings />
    </main>
  );
}
