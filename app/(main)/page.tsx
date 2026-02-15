import type { Metadata } from "next";
import FeaturedHotels from "@/components/main/home/featuredHotels/FeaturedHotels";
import HeroSection from "@/components/main/home/heroSection/HeroSection";
import RoomsAndSuites from "@/components/main/home/roomsAndSuites/RoomsAndSuites";
import EventsMeetings from "@/components/main/home/eventsMeetings/EventsMeetings";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Luxury Hotels & Resorts in Malaysia",
  description:
    "Discover luxury hotels, premium resorts, and exclusive tour packages across Malaysia with Izzan Global Hotels & Resorts. Book your dream stay today.",
  keywords: [
    "luxury hotels Malaysia",
    "resorts Malaysia",
    "hotel booking",
    "tour packages Malaysia",
    "Kuala Lumpur hotels",
  ],
  openGraph: {
    title: "Izzan Global Hotels & Resorts | Luxury Hospitality in Malaysia",
    description: "Discover luxury hotels, premium resorts, and exclusive tour packages across Malaysia.",
    url: "https://www.izzanglobalhospitality.com",
    type: "website",
  },
};

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
