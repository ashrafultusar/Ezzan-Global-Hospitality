import { notFound } from "next/navigation";
import Image from "next/image";
import { Users, Maximize, BedDouble, Check, MessageCircle, Phone } from "lucide-react";
import { connectDB } from "@/db/dbConfig";
import Room from "@/models/Room";


export default async function RoomDetailsPage({ params }: { params: Promise<{ hotelId: string, roomId: string }> }) {
  const { roomId } = await params;
  await connectDB();

  const room = await Room.findById(roomId).populate('hotelId');

  if (!room) return notFound();

  const hotel = room.hotelId;

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image 
         
          src={room.images?.[0] || room.image || "/placeholder-room.jpg"} 
          alt={room.title || room.name} 
          fill 
          className="object-cover brightness-75" 
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
           <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#D4A373] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                {room.bedType || "Bungalow"}
              </span>
          
              <span className="text-sm font-medium">at {hotel?.name || "Our Hotel"}</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-serif font-medium max-w-4xl tracking-tight">
             {room.title || room.name}
           </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Specs Cards (Dynamic Data) */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <Maximize className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">{room.area || "85"} sqm</span>
                <span className="text-xs text-gray-500">Room Size</span>
              </div>
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <Users className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">{room.capacity || "2"} Guests</span>
                <span className="text-xs text-gray-500">Max Capacity</span>
              </div>
              <div className="bg-[#F3F1ED] p-6 rounded-lg text-center flex flex-col items-center justify-center gap-2">
                <BedDouble className="w-6 h-6 text-[#D4A373]" />
                <span className="text-sm font-bold text-[#1a2b4b]">{room.bedType || "King Bed"}</span>
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
            <section>
              <h2 className="text-xl font-serif font-bold text-[#1a2b4b] mb-6">Room Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {room.amenities && room.amenities.map((amenity: string) => (
                  <div key={amenity} className="flex items-center gap-3 border border-gray-100 bg-white p-4 rounded-lg">
                    <Check className="w-4 h-4 text-[#D4A373]" />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Section */}
            <section>
               <h2 className="text-2xl font-serif font-bold text-[#1a2b4b] mb-6">Gallery</h2>
               <div className="grid grid-cols-3 gap-4">
                 {(room.images || [room.image]).map((img: string, i: number) => (
                    <div key={i} className="relative h-40 rounded-lg overflow-hidden border">
                       <Image src={img} alt="Gallery" fill className="object-cover" />
                    </div>
                 ))}
               </div>
            </section>
          </div>

          {/* Right Column: Booking Card */}
          <aside className="lg:sticky lg:top-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-gray-400 text-sm mb-1">Starting from</p>
              <div className="text-4xl font-serif font-bold text-[#D4A373] mb-1">
                MYR {room.price || "1,200"}
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