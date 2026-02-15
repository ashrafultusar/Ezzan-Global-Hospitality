import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";
import Link from "next/link";
import { Plus } from "lucide-react";
import Image from "next/image";

import { requireStaff } from "@/lib/access-helper";

import DeleteHotelButton from "@/components/admin/hotels/DeleteHotelButton";

export default async function HotelsPage() {
    await requireStaff()
    await connectDB();
    const hotels = await Hotel.find().sort({ createdAt: -1 });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Hotels</h1>
                <Link
                    href="/izzan-staff-portal/add-hotel"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    <Plus size={20} />
                    Add Hotel
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                    <div
                        key={hotel._id}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={hotel.image}
                                alt={hotel.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                {hotel.name}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">{hotel.location}</p>
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                {hotel.description}
                            </p>
                            <div className="flex justify-end gap-2">
                                <Link
                                    href={`/izzan-staff-portal/edit-hotel/${hotel._id}`}
                                    className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                                >
                                    Edit
                                </Link>
                                <DeleteHotelButton id={hotel._id.toString()} />
                            </div>
                        </div>
                    </div>
                ))}

                {hotels.length === 0 && (
                    <div className="col-span-full text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">No hotels found. Add one to get started!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
