"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

// --- Types & Interfaces ---
interface GalleryImage {
  id: number;
  category: "Hotels" | "Rooms" | "Events";
  src: string;
  title: string;
}

type Category = "All" | GalleryImage["category"];

// --- Data ---
// Sob image-er ID unique (alada) hote hobe jate filtering logic thik thake
const IMAGES: GalleryImage[] = [
  { id: 1, category: "Hotels", src: "/assets/gallery/image1.jpg", title: "Luxury Resort" },
  { id: 2, category: "Rooms", src: "/assets/gallery/image2.jpg", title: "Cozy Suite" },
  { id: 3, category: "Rooms", src: "/assets/gallery/image3.jpg", title: "Living Area" },
  
  // Events category - sob unique ID deya hoyeche
  { id: 4, category: "Events", src: "/assets/gallery/enents/image1.jpg", title: "Grand Ballroom" },
  { id: 5, category: "Events", src: "/assets/gallery/enents/image2.jpg", title: "Royal Banquet" },
  { id: 6, category: "Events", src: "/assets/gallery/enents/image3.jpg", title: "Corporate Hall" },
  { id: 7, category: "Events", src: "/assets/gallery/enents/image4.jpg", title: "Wedding Hall" },
  { id: 8, category: "Events", src: "/assets/gallery/enents/image5.jpg", title: "Outdoor Event" },
  
  { id: 9, category: "Hotels", src: "/assets/gallery/image5.jpg", title: "City View" },
  { id: 10, category: "Hotels", src: "/assets/gallery/image6.jpg", title: "Beach Front" },
  { id: 11, category: "Hotels", src: "/assets/gallery/image7.jpg", title: "Mountain View" },
  { id: 12, category: "Hotels", src: "/assets/gallery/image8.jpg", title: "Infinity Pool" },
  { id: 13, category: "Hotels", src: "/assets/gallery/image9.jpg", title: "Eco Lodge" },
];

const CATEGORIES: Category[] = ["All", "Hotels", "Rooms", "Events"];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");

  // Filtering Logic: Strict category checking
  const filteredImages = useMemo(() => {
    if (filter === "All") return IMAGES;
    // Sudhu oi category match korle show korbe, onno kisu ashbe na
    return IMAGES.filter((img) => img.category === filter);
  }, [filter]);

  return (
    <section className="bg-[#fdfbf7] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
        <p className="text-[#eab308] uppercase tracking-[0.3em] text-xs font-bold mb-3">
          Gallery
        </p>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
          Visual Journey
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Explore our stunning <span className="text-white border-b border-[#eab308]">hotels</span>, 
          luxurious rooms, and world-class event spaces.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 py-12 px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2.5 rounded-full transition-all duration-300 text-sm font-bold border-2 cursor-pointer ${
              filter === cat
                ? "bg-[#eab308] border-[#eab308] text-white shadow-lg scale-105"
                : "bg-white border-gray-100 text-gray-500 hover:border-[#eab308]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid with Animation key change */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={`${filter}-${image.id}`} // Filter change hole jate animation reset hoy
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-500 animate-in fade-in zoom-in-95"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={index < 3}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAn8Bf79X77gAAAAASUVORK5CYII=" 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500" />
            
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <p className="text-white text-lg font-medium">{image.title}</p>
              <p className="text-[#eab308] text-sm font-semibold uppercase tracking-wider">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Images Found (Fallback) */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400">No images found in this category.</p>
        </div>
      )}
    </section>
  );
}