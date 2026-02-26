import Link from "next/link";
import Image from "next/image";
import { getHotelsForListing } from "@/lib/data/hotel";
import { IHotel } from "@/types/hotel.types";

export default async function HomeStayPage() {
  const { hotels } = await getHotelsForListing();

  return (
    <div className="pt-18 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10 text-[#1a2b4b]">Our Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels?.map((hotel: IHotel) => (
          <Link href={`/homestay/${hotel._id}`} key={hotel._id} className="group">
            <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2b4b]">{hotel.name}</h2>
                <p className="text-gray-500">{hotel.location}</p>
                {hotel.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {hotel.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#f3eee6] text-[#1a2b4b] px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <button className="mt-4 text-[#f2b830] font-semibold">View Rooms →</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}