"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { addGalleryImage } from "@/actions/galleryActions";
import { toast } from "react-hot-toast";
import { Loader2, Camera, LayoutGrid, Save, UploadCloud, ChevronDown } from "lucide-react";
import Image from "next/image";

// Fixed categories as per your request
const CATEGORIES = ["Events", "Hotels", "Rooms"];

export default function AddGalleryForm() {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const imageFile = formData.get("image") as File;
        
        if (!imageFile || imageFile.size === 0) {
            toast.error("Please upload an image");
            return;
        }

        setLoading(true);

        try {
            const res = await addGalleryImage(formData);
            
            if (res.success) {
                toast.success("Gallery image added!");
                router.push("/izzan-staff-portal/galleryManagement");
                router.refresh();
            } else {
                toast.error(res.message || "Failed to upload");
                setLoading(false); 
            }
        } catch (error) {
            toast.error("Something went wrong");
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Area */}
            <div 
                onClick={() => !loading && fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-10 transition-all cursor-pointer group overflow-hidden ${
                    preview ? 'border-blue-400 bg-blue-50/10' : 'border-gray-200 bg-gray-50/30 hover:bg-gray-50 hover:border-blue-300'
                } ${loading ? 'opacity-70 pointer-events-none' : ''}`}
            >
                <input
                    type="file"
                    name="image"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                />
                
                {preview ? (
                    <div className="relative h-48 w-full">
                        <Image src={preview} alt="Preview" fill className="object-contain rounded-lg" />
                        {!loading && (
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <UploadCloud className="text-white drop-shadow-md" size={32} />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-4 border border-gray-100">
                            <Camera className="text-blue-500" size={24} />
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Upload Gallery Image</p>
                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">Max Size: 5MB</p>
                    </div>
                )}
            </div>

            {/* Photo Title */}
            <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a2a4d]">Photo Title</label>
                <input
                    name="title"
                    type="text"
                    disabled={loading}
                    placeholder="e.g. Grand Plaza View"
                    className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm text-gray-600 disabled:bg-gray-50"
                />
            </div>

            {/* Category Dropdown */}
            <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a2a4d]">Category</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <LayoutGrid size={18} />
                    </span>
                    <select
                        name="category"
                        required
                        disabled={loading}
                        className="w-full p-3.5 pl-11 pr-10 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition text-sm text-gray-600 appearance-none cursor-pointer disabled:bg-gray-50"
                    >
                        <option value="" disabled selected>Select a category</option>
                        {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <ChevronDown size={18} />
                    </span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
                <button
                    type="button"
                    onClick={() => router.back()}
                    disabled={loading}
                    className="px-6 py-2.5 text-sm font-semibold text-gray-500 hover:text-gray-700 transition disabled:opacity-50"
                >
                    Cancel
                </button>
                
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-8 py-2.5 bg-[#2563eb] text-white rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 disabled:bg-blue-400 disabled:cursor-not-allowed font-bold text-sm min-w-[140px] justify-center"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={18} />
                            Uploading...
                        </>
                    ) : (
                        <>
                            <Save size={18} />
                            Add Image
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}