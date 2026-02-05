"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

// --- Types ---
interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  stars: number;
  tags: string[];
}

// --- Data based on your image ---
const HOTELS: Hotel[] = [
  {
    id: 1,
    name: "Grand Millennium Kuala Lumpur",
    location: "Kuala Lumpur, Malaysia",
    description: "Luxury in the heart of KL with stunning KLCC views",
    image: "/assets/gallery/image1.jpg",
    stars: 5,
    tags: ["Free WiFi", "Swimming Pool", "Spa", "Fitness Center"],
  },
  {
    id: 2,
    name: "Paradise Resort Langkawi",
    location: "Langkawi, Kedah, Malaysia",
    description: "Beachfront paradise with crystal clear waters",
    image: "/assets/gallery/image2.jpg",
    stars: 5,
    tags: ["Private Beach", "Water Sports", "Spa", "Multiple Restaurants"],
  },
  {
    id: 3,
    name: "Heritage Grand Penang",
    location: "George Town, Penang, Malaysia",
    description: "Colonial charm meets modern luxury",
    image: "/assets/gallery/image3.jpg",
    stars: 5,
    tags: ["Heritage Tours", "Rooftop Bar", "Spa", "Pool"],
  },
  {
    id: 4,
    name: "Waterfront Luxury Johor Bahru",
    location: "Johor Bahru, Malaysia",
    description: "Modern waterfront luxury near Singapore",
    image: "/assets/gallery/image5.jpg",
    stars: 5,
    tags: ["Infinity Pool", "Business Center", "Spa", "Multiple Restaurants"],
  },
  {
    id: 5,
    name: "Rainforest Eco Lodge Sabah",
    location: "Kota Kinabalu, Sabah, Malaysia",
    description: "Eco-luxury in Borneo's pristine rainforest",
    image: "/assets/gallery/image7.jpg",
    stars: 5,
    tags: ["Nature Trails", "Wildlife Tours", "Spa", "Organic Restaurant"],
  },
];

export default function HotelCollection() {
  return (
    <section className="bg-[#fdfbf7] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#1a2b4b] text-white py-16 text-center px-4">
        <p className="text-[#f2b830] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-3">
          OUR COLLECTION
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-4 font-medium">
          Luxury Hotels in Malaysia
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light">
          Explore our handpicked selection of Malaysia&apos;s finest 5-star hotels, each offering unique experiences and world-class hospitality.
        </p>
      </div>

      {/* Hotel Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {HOTELS.map((hotel) => (
          <div 
            key={hotel.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row border border-gray-100"
          >
            {/* Image Container */}
            <div className="relative w-full md:w-[40%] h-64 md:h-auto overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              {/* Star Badge */}
              <div className="absolute top-4 left-4 bg-[#f2b830] text-[#1a2b4b] px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                <span className="text-[10px] font-bold">★ {hotel.stars} Star</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex items-start gap-1 text-gray-400 mb-2">
                <MapPin className="w-3 h-3 mt-1" />
                <span className="text-[11px] font-medium uppercase tracking-wider">{hotel.location}</span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-[#1a2b4b] mb-2 leading-tight">
                {hotel.name}
              </h3>
              
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 italic">
                {hotel.description}
              </p>

              {/* Tags/Amenities */}
              <div className="flex flex-wrap gap-2 mb-8">
                {hotel.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-50 text-gray-500 text-[10px] px-3 py-1.5 rounded-md border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Hotel Link */}
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[#f2b830] font-bold text-sm hover:gap-3 transition-all duration-300">
                  View Hotel <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}