import type { Metadata } from "next";
import TourPackagesPage from "@/components/main/tourPackagesPage/TourPackagesPage";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Discover exclusive tour packages across Malaysia and beyond with Izzan Global. From Kuala Lumpur city tours to Langkawi beach getaways — affordable packages for every traveler.",
  keywords: [
    "Malaysia tour packages",
    "Kuala Lumpur tours",
    "Langkawi travel packages",
    "affordable tour packages",
    "Malaysia travel deals",
  ],
  openGraph: {
    title: "Tour Packages | Izzan Global Hotels & Resorts",
    description: "Discover exclusive tour packages across Malaysia — from city tours to beach getaways.",
    url: "https://www.izzanglobalhospitality.com/tourPackages",
    type: "website",
  },
};

export default function TourPackagesRoute() {
  return (
    <div>
      <TourPackagesPage />
    </div>
  );
}