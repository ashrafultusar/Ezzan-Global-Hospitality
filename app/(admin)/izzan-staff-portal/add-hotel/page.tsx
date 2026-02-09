import HotelForm from "@/components/admin/hotels/HotelForm";
import { requireStaff } from "@/lib/access-helper";

export default async function AddHotelPage() {
    await requireStaff();
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Add New Hotel</h1>
                <p className="text-gray-500 mt-1">Create a new hotel listing</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <HotelForm mode="create" />
            </div>
        </div>
    );
}
