import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

interface RoomCardProps {
  hotelId: string;
  room: {
    id: string;
    name: string;
    price: string;
    image: string;
    amenities: string[];
  };
}

export default function RoomCard({ hotelId, room }: RoomCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <p className="text-[#1a2b4b] font-bold text-sm">{room.price}<span className="text-[10px] font-normal text-gray-500">/night</span></p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-[#f2b830] text-[#f2b830]" />
          ))}
        </div>
        
        <h3 className="text-xl font-serif font-bold text-[#1a2b4b] mb-3 group-hover:text-[#f2b830] transition-colors">
          {room.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.slice(0, 3).map((item) => (
            <span key={item} className="text-[10px] uppercase tracking-wider bg-gray-50 px-2 py-1 rounded text-gray-400">
              {item}
            </span>
          ))}
        </div>

        <Link 
          href={`/homestay/${hotelId}/${room.id}`}
          className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-[#1a2b4b] text-white text-sm font-bold hover:bg-[#f2b830] hover:text-[#1a2b4b] transition-all duration-300"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}