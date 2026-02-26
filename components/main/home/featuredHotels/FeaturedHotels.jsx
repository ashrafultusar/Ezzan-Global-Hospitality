import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";
import { unstable_cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";

const nextUnstableCache = unstable_cache(async () => {
  await connectDB();
  const hotelsData = await Hotel.find().sort({ createdAt: -1 }).limit(3).lean();
  const hotels = JSON.parse(JSON.stringify(hotelsData));
  return hotels;
});

const reactCache = cache(async () => {
  return await nextUnstableCache();
});

const FeaturedHotels = async () => {
  const hotels = await reactCache();

  return (
    <section className="relative py-20 px-4 bg-[#f3eee6] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">
              Our Collection
            </h4>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2B48]">
            Featured Hotels
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Experience luxury redefined at our most exclusive properties
          </p>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hotels &&
            hotels?.map((hotel) => (
              <Link
                key={hotel._id}
                href={`/homestay/${hotel._id}`}
                className="group relative block"
              >
                {/* Card Body */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={hotel.image || "/placeholder.jpg"}
                      alt={hotel.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-[#FFB400] text-white px-3 py-1 rounded flex items-center gap-1 text-sm font-bold shadow-lg">
                      <span className="text-white">★</span>{" "}
                      {hotel.rating || "5.0"}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {hotel.features &&
                        hotel.features.slice(0, 3).map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-white/20 text-white px-2 py-1 rounded-full border border-white/40"
                          >
                            {f}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-gray-400 text-xs mb-2 italic">
                      <span className="mr-1">📍</span> {hotel.location}
                    </div>

                    <h3 className="text-[#1A2B48] text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {hotel.name}
                    </h3>

                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                      {hotel.description}
                    </p>

                    <div className="flex items-center text-[#D4AF37] font-bold text-sm uppercase tracking-wider group/btn">
                      View Details
                      <span className="ml-2 transition-transform group-hover/btn:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <Link
            href="/homestay"
            className="bg-[#1A2B48] text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-3 transition-all duration-300 hover:bg-[#2c3f64] hover:shadow-xl active:scale-95 group"
          >
            Explore Venues
            <span className="transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
