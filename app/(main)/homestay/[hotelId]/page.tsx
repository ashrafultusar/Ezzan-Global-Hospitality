import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHotelById } from "@/lib/data/hotel";
import { getRoomsByHotelId } from "@/lib/data/room";
import HotelRoomsClient from "@/components/main/homeStay/hotelRoomsPage/HotelRoomsPage";

type Props = { params: Promise<{ hotelId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hotelId } = await params;
  const result = await getHotelById(hotelId);

  if (!result.success || !result.hotel) {
    return { title: "Hotel Not Found" };
  }

  const hotel = result.hotel;
  return {
    title: hotel.name,
    description: `${hotel.description} — Located in ${hotel.location}. Book rooms at ${hotel.name} with Izzan Global Hotels & Resorts.`,
    keywords: [hotel.name, hotel.location, "hotel booking", "luxury hotel", "Malaysia hotel"],
    openGraph: {
      title: `${hotel.name} | Izzan Global Hotels & Resorts`,
      description: hotel.description,
      url: `https://www.izzanglobalhospitality.com/homestay/${hotelId}`,
      type: "website",
      images: hotel.image
        ? [{ url: hotel.image, width: 1200, height: 630, alt: hotel.name }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: hotel.name,
      description: hotel.description,
      images: hotel.image ? [hotel.image] : undefined,
    },
  };
}

import { HotelJsonLd } from "@/components/seo/JsonLd";

export default async function HotelDetailPage({ params }: Props) {
  const { hotelId } = await params;

  const hotelResult = await getHotelById(hotelId);
  if (!hotelResult.success || !hotelResult.hotel) return notFound();

  const roomsResult = await getRoomsByHotelId(hotelId);

  return (
    <div>
      <HotelJsonLd hotel={hotelResult.hotel} />
      <HotelRoomsClient
        hotel={hotelResult.hotel}
        rooms={roomsResult.rooms || []}
        hotelId={hotelId}
      />
    </div>
  );
}
