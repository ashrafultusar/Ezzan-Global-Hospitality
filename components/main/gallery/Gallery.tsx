"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { getGalleryImages } from "@/lib/data/gallery";


interface GalleryImage {
  _id: string;
  category: string;
  src: string;
  title: string;
}

const CATEGORIES = ["All", "Hotels", "Rooms", "Events"] as const;
type Category = (typeof CATEGORIES)[number];

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState<Category>("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const result = await getGalleryImages();
        
        console.log("Database Data:", result); 

        if (result.success && Array.isArray(result.data)) {
          setImages(result.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredImages = useMemo(() => {
    if (filter === "All") return images;
    return images.filter((img) => img.category === filter);
  }, [filter, images]);

  return (
    <section className="bg-[#fdfbf7] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
        <p className="text-[#eab308] uppercase tracking-[0.3em] text-xs font-bold mb-3">Gallery</p>
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Visual Journey</h2>
      </div>

      {/* Filters */}
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

      <div className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#eab308]"></div>
            <p className="mt-4 text-gray-500">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">
            Failed to load images. Please refresh.
          </div>
        ) : filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image._id}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-500"
              >
                <Image
                  src={image.src}
                  alt={image.title || "Gallery Image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                {image.title && (
    <p className="text-white text-lg font-medium mb-1">{image.title}</p>
  )}
                  <p className="text-[#eab308] text-sm font-semibold uppercase">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400">No images found.</p>
          </div>
        )}
      </div>
    </section>
  );
}