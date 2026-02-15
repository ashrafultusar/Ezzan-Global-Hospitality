import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Users, Maximize, BedDouble, Check, MessageCircle, Phone } from "lucide-react";
import { getRoomById } from "@/lib/data/room";
import { getHotelById } from "@/lib/data/hotel";
import { IHotel, IRoom } from "@/types/hotel.types";

type Props = { params: Promise<{ hotelId: string; roomId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hotelId, roomId } = await params;

  const [hotelResult, roomResult] = await Promise.all([
    getHotelById(hotelId),
    getRoomById(roomId),
  ]);

  if (!hotelResult.success || !roomResult.success) {
    return { title: "Room Not Found" };
  }

  const hotel = hotelResult.hotel as IHotel;
  const room = roomResult.room as IRoom;

  return {
    title: `${room.title} at ${hotel.name}`,
    description: `${room.title} — ${room.description} Starting from MYR ${room.price}/night. ${room.area} sqm, ${room.capacity} guests, ${room.bedType}. Book at ${hotel.name}.`,
    keywords: [room.title, hotel.name, hotel.location, "hotel room", "room booking Malaysia"],
    openGraph: {
      title: `${room.title} at ${hotel.name}`,
      description: `${room.description} — Starting from MYR ${room.price}/night.`,
      url: `https://www.izzanglobalhospitality.com/homestay/${hotelId}/${roomId}`,
      type: "website",
      images: room.images?.[0]
        ? [{ url: room.images[0], width: 1200, height: 630, alt: room.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${room.title} at ${hotel.name}`,
      description: `Starting from MYR ${room.price}/night. ${room.area} sqm, ${room.bedType}.`,
      images: room.images?.[0] ? [room.images[0]] : undefined,
    },
  };
}

export default async function RoomDetailsPage({ params }: Props) {
  const { hotelId, roomId } = await params;

  const [hotelResult, roomResult] = await Promise.all([
    getHotelById(hotelId),
    getRoomById(roomId),
  ]);

  if (!hotelResult.success || !roomResult.success) return notFound();

  const hotel = hotelResult.hotel as IHotel;
  const room = roomResult.room as IRoom;

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src={room.images?.[0] || hotel.image}
          alt={room.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#D4A373] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {room.bedType}
            </span>
            <span className="text-sm font-medium">at {hotel.name}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium max-w-4xl tracking-tight">
            {room.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <Maximize className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">{room.area} sqm</span>
                <span className="text-xs text-gray-500">Room Size</span>
              </div>
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <Users className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">{room.capacity} Guests</span>
                <span className="text-xs text-gray-500">Max Capacity</span>
              </div>
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <BedDouble className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">{room.bedType}</span>
                <span className="text-xs text-gray-500">Bed Type</span>
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1a2b4b] mb-4">About This Room</h2>
              <p className="text-gray-600 leading-relaxed">
                {room.description}
              </p>
            </section>

            {/* Amenities Grid */}
            {room.amenities?.length > 0 && (
              <section>
                <h2 className="text-xl font-serif font-bold text-[#1a2b4b] mb-6">Room Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3 border border-gray-100 bg-white p-4 rounded-lg">
                      <Check className="w-4 h-4 text-[#D4A373]" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Section */}
            {room.images?.length > 0 && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-[#1a2b4b] mb-6">Gallery</h2>
                <div className="grid grid-cols-3 gap-4">
                  {room.images.map((img, i) => (
                    <div key={i} className="relative h-40 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${room.title} gallery ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 33vw, 250px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Booking Card */}
          <aside className="lg:sticky lg:top-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-gray-400 text-sm mb-1">Starting from</p>
              <div className="text-4xl font-serif font-bold text-[#D4A373] mb-1">
                MYR {room.price.toLocaleString()}
              </div>
              <p className="text-gray-400 text-xs mb-8 uppercase tracking-widest">per night</p>

              <div className="space-y-3">
                {/* Real Color for WhatsApp: Green */}
                <a href="https://wa.me/60177085596?text=Hello, I am interested in booking a room."
    target="_blank"
    rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Contact via WhatsApp
                </a>
                <a href="tel:+60177085596"  className="w-full flex items-center justify-center gap-2 bg-[#1a2b4b] text-white py-4 rounded-xl font-bold text-sm">
                  <Phone className="w-4 h-4" />
                  Call Hotel
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}