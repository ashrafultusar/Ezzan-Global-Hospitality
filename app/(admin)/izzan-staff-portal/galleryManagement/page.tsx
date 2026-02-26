import { connectDB } from "@/db/dbConfig";
import Gallery from "@/models/Gallery";
import { requireStaff } from "@/lib/access-helper";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon, Plus } from "lucide-react";

import DeleteGalleryButton from "@/components/admin/gallery/DeleteGalleryButton";

export default async function GalleryManagement() {
    await requireStaff();
    await connectDB();
    const images = await Gallery.find().sort({ createdAt: -1 });

    return (
        <div className="p-6 max-w-7xl mx-auto">
        
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
                    <p className="text-gray-500 text-sm">Total {images.length} images in your gallery</p>
                </div>
                <Link
                    href="/izzan-staff-portal/add-gallery"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md font-semibold"
                >
                    <Plus size={20} />
                    Add Photo
                </Link>
            </div>

            <hr className="mb-10 border-gray-100" />

            {/* --- LIST SECTION --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img) => (
                    <div key={img._id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm group hover:shadow-md transition">
                        <div className="relative h-52">
                            <Image 
                                src={img.src} 
                                alt="Gallery Image" 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            
                            {/* Actions Overlay */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <DeleteGalleryButton id={img._id.toString()} />
                            </div>

                            <div className="absolute bottom-2 left-2">
                                <span className="bg-black/70 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md backdrop-blur-sm">
                                    {img.category || "All"}
                                </span>
                            </div>
                        </div>
                        <div className="p-4 bg-white">
                            <p className="text-sm font-semibold text-gray-700 truncate">
                                {img.title || "Untitled"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {images.length === 0 && (
                <div className="text-center py-32 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl">
                    <ImageIcon className="mx-auto mb-4 text-gray-200" size={60} />
                    <p className="text-lg">No images in gallery yet.</p>
                    <Link href="/izzan-staff-portal/add-gallery" className="text-blue-600 font-medium underline mt-2 inline-block">
                        Upload your first photo
                    </Link>
                </div>
            )}
        </div>
    );
}