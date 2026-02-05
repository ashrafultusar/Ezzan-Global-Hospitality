import { HOTELS } from "@/data/hotels";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function HotelRoomsPage({ params }: { params: Promise<{ hotelId: string }> }) {
  // Next.js 15+ এ params await করতে হয়
  const { hotelId } = await params;
  const hotel = HOTELS.find((h) => h.id === hotelId);

  if (!hotel) return notFound();

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-[#1a2b4b] mb-2">{hotel.name}</h1>
        <p className="text-gray-500 mb-12">{hotel.location}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hotel.rooms.map((room) => (
            <Link key={room.id} href={`/homestay/${hotelId}/${room.id}`} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-2xl">
                <div className="relative h-64 w-full">
                  <Image src={room.image} alt={room.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1a2b4b] mb-2">{room.name}</h3>
                  <p className="text-[#f2b830] text-xl font-bold mb-4">{room.price} / Night</p>
                  <button className="text-[#1a2b4b] font-bold border-b-2 border-[#f2b830] pb-1">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}