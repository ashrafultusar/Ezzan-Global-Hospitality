import React from "react";
import Image from "next/image";
import Link from "next/link";

const RoomsAndSuites = () => {
  const roomTypes = [
    "Studio Apartment",
    "One Bedroom Apartment",
    "Two Bedroom Apartment",
    "Three Bedroom Apartment",
    "Family Suites Apartment",
  ];

  return (
    <section className="bg-[#F9F6F1] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Center Heading */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-bold">
            Accommodation
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2B48]">
            Luxury Homestay
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-gray-600 leading-relaxed max-w-lg">
              From elegant deluxe rooms to lavish presidential suites, our homestay
              offer a diverse range of accommodations to suit every preference.
              Each room is thoughtfully designed with premium amenities and
              stunning views.
            </p>

            {/* Room List */}
            <ul className="space-y-3">
              {roomTypes.map((room, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#1A2B48] font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  {room}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              href="/homestay"
              className="inline-flex items-center justify-center group mt-8 
              bg-[#EAB308] hover:bg-[#D4AF37] 
              text-[#1A2B48] font-bold 
              px-8 py-4 rounded-lg 
              gap-3 transition-all duration-300 
              shadow-md hover:shadow-lg active:scale-95"
            >
              Browse Rooms
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
            {/* First Image */}
            <div className="absolute top-0 left-0 w-[70%] h-[70%] z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/assets/home/roomandsuites/roomandsuites1.jpg"
                alt="Luxury Bedroom"
                fill
                className="object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[70%] z-20 rounded-2xl overflow-hidden shadow-2xl border-8 border-[#F9F6F1] transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/assets/home/roomandsuites/roomandsuites2.jpg"
                alt="Luxury Suite Living Room"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsAndSuites;