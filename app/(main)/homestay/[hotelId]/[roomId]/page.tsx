import { notFound } from "next/navigation";
import Image from "next/image";
import { HOTELS } from "@/data/hotels";

export default async function RoomDetailsPage({ params }: { params: Promise<{ hotelId: string, roomId: string }> }) {
  // params unwrapping for Next.js 15
  const { hotelId, roomId } = await params;
  
  const hotel = HOTELS.find(h => h.id === hotelId);
  const room = hotel?.rooms.find(r => r.id === roomId);

  if (!room) return notFound();

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image Gallery */}
          <div className="sticky top-32">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={room.image} alt={room.name} fill className="object-cover" />
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <p className="text-[#f2b830] font-bold mb-2 uppercase tracking-widest text-sm">{hotel?.name}</p>
              <h1 className="text-5xl font-serif text-[#1a2b4b]">{room.name}</h1>
            </div>

            <div className="text-3xl font-bold text-[#1a2b4b]">
              {room.price} <span className="text-lg text-gray-400 font-normal">/ Night</span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg italic">
              &quot;{room.description}&quot;
            </p>

            <div className="border-y border-gray-100 py-8">
              <h3 className="font-bold text-[#1a2b4b] mb-4">Included Amenities:</h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2 text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f2b830]" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#1a2b4b] text-white py-5 rounded-2xl font-bold text-xl hover:bg-[#f2b830] hover:text-[#1a2b4b] transition-all shadow-xl active:scale-95">
              Confirm Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}