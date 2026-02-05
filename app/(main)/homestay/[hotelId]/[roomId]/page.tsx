import { notFound } from "next/navigation";
import Image from "next/image";
import { HOTELS } from "@/data/hotels";
import { Users, Maximize, BedDouble, Check, MessageCircle, Phone } from "lucide-react";

export default async function RoomDetailsPage({ params }: { params: Promise<{ hotelId: string, roomId: string }> }) {
  const { hotelId, roomId } = await params;
  
  const hotel = HOTELS.find(h => h.id === hotelId);
  const room = hotel?.rooms.find(r => r.id === roomId);

  if (!room) return notFound();

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image 
          src={room.image} 
          alt={room.name} 
          fill 
          className="object-cover brightness-75" 
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
           <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#D4A373] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Bungalow
              </span>
              <span className="text-sm font-medium">at {hotel?.name}</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-serif font-medium max-w-4xl tracking-tight">
             {room.name}
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
                <span className="text-sm font-bold text-[#1a2b4b]">85 sqm</span>
                <span className="text-xs text-gray-500">Room Size</span>
              </div>
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <Users className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">2 Guests</span>
                <span className="text-xs text-gray-500">Max Capacity</span>
              </div>
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <BedDouble className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">King Bed</span>
                <span className="text-xs text-gray-500">Bed Type</span>
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1a2b4b] mb-4">About This Room</h2>
              <p className="text-gray-600 leading-relaxed">
                Stunning overwater bungalow with glass floor panels and direct sea access. 
                {room.description}
              </p>
            </section>

            {/* Amenities Grid */}
            <section>
              <h2 className="text-xl font-serif font-bold text-[#1a2b4b] mb-6">Room Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3 border border-gray-100 bg-white p-4 rounded-lg">
                    <Check className="w-4 h-4 text-[#D4A373]" />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
                {/* Fallback items to match screenshot layout */}
                <div className="flex items-center gap-3 border border-gray-100 bg-white p-4 rounded-lg"><Check className="w-4 h-4 text-[#D4A373]" /><span className="text-sm text-gray-700">Glass Floor</span></div>
                <div className="flex items-center gap-3 border border-gray-100 bg-white p-4 rounded-lg"><Check className="w-4 h-4 text-[#D4A373]" /><span className="text-sm text-gray-700">Sea Access</span></div>
              </div>
            </section>

            {/* Gallery Section */}
            <section>
               <h2 className="text-2xl font-serif font-bold text-[#1a2b4b] mb-6">Gallery</h2>
               <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative h-40 rounded-lg overflow-hidden">
                       <Image src={room.image} alt="Gallery" fill className="object-cover" />
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Right Column: Booking Card (Sticky) */}
          <aside className="lg:sticky lg:top-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-gray-400 text-sm mb-1">Starting from</p>
              <div className="text-4xl font-serif font-bold text-[#D4A373] mb-1">
                MYR 1,200
              </div>
              <p className="text-gray-400 text-xs mb-8 uppercase tracking-widest">per night</p>

              <div className="text-left mb-8">
                <h4 className="font-bold text-[#1a2b4b] mb-2 text-sm">Interested in this room?</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Contact us directly to check availability and make a reservation.
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Contact via WhatsApp
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-[#1a2b4b] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#0f1a2d] transition-all">
                  <Phone className="w-4 h-4" />
                  Call Hotel
                </button>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}