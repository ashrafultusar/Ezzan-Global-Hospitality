'use client';

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Search, Filter, MessageCircle, Phone } from "lucide-react";


interface RoomType {
  _id: string;
  title: string;
  description: string;
  images: string[];
  bedType: string;
  area: string;
  capacity: number;
  price: number | string;
}

interface HotelType {
  _id: string;
  name: string;
  location: string;
  image: string;
  description: string;
}

interface HotelRoomsPageProps {
  hotel: HotelType;
  rooms: RoomType[];
}

export default function HotelRoomsPage({ hotel, rooms }: HotelRoomsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");


  const filteredRooms = useMemo(() => {
    if (!rooms) return [];
    return rooms.filter((room) => {
      const matchesSearch = room.title.toLowerCase().includes(searchQuery.toLowerCase());
      const roomType = room.bedType || "General"; 
      const matchesType = selectedType === "All" || roomType === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType, rooms]);

  if (!hotel) return <div className="text-center py-20 font-serif text-2xl">Hotel not found!</div>;

  const roomTypes = ["All", ...Array.from(new Set(rooms.map((r) => r.bedType || "General")))];

  return (
    <div className="min-h-screen bg-white">
    {/* 1. Hero Section */}
<div className="relative h-[55vh] w-full flex items-end">

  <Image 
    src={hotel.image || "/placeholder.jpg"} 
    alt={hotel.name} 
    fill 
    className="object-cover" 
    priority
  />
  
 
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full text-white">
    <Link 
      href="/homestay" 
      className="text-sm mb-4 inline-block opacity-80 hover:opacity-100 hover:underline transition-opacity"
    >
      ← Back to Hotels
    </Link>
    
    <div className="mb-3">
      <span className="flex items-center gap-1 text-sm font-light drop-shadow-md">
        <MapPin size={14} className="text-white" /> {hotel.location}
      </span>
    </div>
    
    <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg tracking-tight">
      {hotel.name}
    </h1>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* About & Search Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif text-[#1a2b4b] font-bold mb-4">About This Hotel</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {hotel.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-slate-50 rounded-2xl border border-gray-100">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by room title..."
                  className="w-full pl-10 pr-4 py-2.5 bg-transparent focus:outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 bg-white px-3 rounded-xl shadow-sm border border-gray-100">
                <Filter size={14} className="text-gray-400" />
                <select 
                  className="py-2 bg-transparent text-sm focus:outline-none min-w-[100px]"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {roomTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#fdfdfc] p-8 rounded-md shadow-sm border">
              <h3 className="text-lg text-black font-bold mb-2">Contact This Hotel</h3>
              <p className="text-xs text-gray-500 mb-6">Direct inquiries and reservations.</p>
              <div className="space-y-3">
              <a 
    href="https://wa.me/60177085596?text=Hello, I am interested in booking a room."
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm hover:opacity-90 transition-all"
  >
    <MessageCircle size={18} /> WhatsApp Us
  </a>
  <a 
    href="tel:+60177085596"
    className="w-full bg-[#1a2a4d] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm hover:bg-[#15223d] transition-all"
  >
    <Phone size={18} /> Call Now
  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <h2 className="text-3xl font-serif text-[#1a2b4b] font-bold mb-8">Rooms & Suites</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <Link key={room._id} href={`/homestay/${hotel._id}/${room._id}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-72 w-full">
                  <Image 
                    src={room.images[0] || "/placeholder-room.jpg"} 
                    alt={room.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {room.bedType}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1a2b4b] mb-2">{room.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-1">{room.description}</p>
                  <div className="flex justify-between items-center pt-5 border-t border-gray-50">
                      <span className="text-gray-400 text-xs font-medium">{room.area} sq ft • {room.capacity} Guests</span>
                      <div className="text-right">
                        <p className="text-[#d48e28] font-bold text-xl leading-none">MYR {room.price}</p>
                        <span className="text-gray-400 text-[10px] uppercase">per night</span>
                      </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}