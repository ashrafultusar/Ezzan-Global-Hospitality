import type { Metadata } from "next";
import HomeStay from "@/components/main/homeStay/HomeStay";

export const metadata: Metadata = {
  title: "Luxury Hotels & Homestays",
  description:
    "Browse our handpicked collection of luxury hotels and homestays across Malaysia. Experience 5-star hospitality, world-class amenities, and unforgettable stays.",
  keywords: ["luxury hotels Malaysia", "homestay booking", "5 star hotels", "hotel rooms", "Malaysia accommodation"],
  openGraph: {
    title: "Luxury Hotels & Homestays | Izzan Global",
    description: "Browse our handpicked collection of luxury hotels and homestays across Malaysia.",
    url: "https://www.izzanglobalhospitality.com/homestay",
    type: "website",
  },
};

export default function HomestayPage() {
  return (
    <div>
      <section className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Sub-title */}
          <p className="text-[#d48e28] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Collection
          </p>

          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Luxury Hotels in Malaysia
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Explore our handpicked selection of Malaysia&apos;s finest 5-star hotels,
            each offering unique experiences and world-class hospitality.
          </p>
        </div>
      </section>
      <HomeStay />
    </div>
  );
}
