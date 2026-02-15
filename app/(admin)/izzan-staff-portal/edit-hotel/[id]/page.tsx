import HotelForm from "@/components/admin/hotels/HotelForm";
import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";
import { requireStaff } from "@/lib/access-helper";
import { notFound } from "next/navigation";

export default async function EditHotelPage({ params }: { params: Promise<{ id: string }> }) {
    await requireStaff();
    await connectDB();

    const { id } = await params;
    const hotel = await Hotel.findById(id);

    if (!hotel) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Edit Hotel</h1>
                <p className="text-gray-500 mt-1">Update hotel details</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <HotelForm
                    mode="edit"
                    initialData={{
                        _id: hotel._id.toString(),
                        name: hotel.name,
                        description: hotel.description,
                        location: hotel.location,
                        image: hotel.image,
                    }}
                />
            </div>
        </div>
    );
}
