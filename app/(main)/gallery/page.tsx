import type { Metadata } from "next";
import Gallery from "@/components/main/gallery/Gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore stunning photos of Izzan Global Hotels & Resorts — luxury rooms, beautiful properties, world-class amenities, and breathtaking views across Malaysia.",
  keywords: ["hotel gallery", "luxury hotel photos", "Malaysia resort photos", "hotel rooms images"],
  openGraph: {
    title: "Photo Gallery | Izzan Global Hotels & Resorts",
    description: "Explore stunning photos of our luxury hotels, rooms, and properties across Malaysia.",
    url: "https://www.izzanglobalhospitality.com/gallery",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <div>
      <Gallery />
    </div>
  );
}
