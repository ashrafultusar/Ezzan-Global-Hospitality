import { requireStaff } from "@/lib/access-helper";
import AddGalleryForm from "@/components/admin/gallery/AddGalleryForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function AddGalleryPage() {
    await requireStaff();

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="mb-8">
                <Link 
                    href="/izzan-staff-portal/gallery" 
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition font-medium"
                >
                    <ArrowLeft size={20} />
                    Back to Gallery
                </Link>
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Upload New Image</h1>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
                <AddGalleryForm />
            </div>
        </div>
    );
}