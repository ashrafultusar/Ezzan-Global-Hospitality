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

import { getGalleryImages } from "@/lib/data/gallery";
import { IGalleryImage } from "@/types/gallery.types";

export default async function GalleryPage() {
  const { data } = await getGalleryImages();
  const images: IGalleryImage[] = data || [];

  return (
    <div>
      <Gallery initialImages={images} />
    </div>
  );
}
