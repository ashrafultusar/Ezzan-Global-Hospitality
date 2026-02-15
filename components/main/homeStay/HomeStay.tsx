import Link from "next/link";
import Image from "next/image";
import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";

export default async function  HomeStayPage() {

  await connectDB()
const hotels=await Hotel.find().sort({createdAt: -1})

  return (
    <div className="pt-18 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-10 text-[#1a2b4b]">Our Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels?.map((hotel) => (
          <Link href={`/homestay/${hotel._id}`} key={hotel._id.toString()} className="group">
            <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#1a2b4b]">{hotel.name}</h2>
                <p className="text-gray-500">{hotel.location}</p>
                <button className="mt-4 text-[#f2b830] font-semibold">View Rooms →</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}