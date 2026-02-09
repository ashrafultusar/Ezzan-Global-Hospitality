"use client";

import React, { useState } from "react";
import { MapPin, Save, Loader2 } from "lucide-react";
import { createHotel, updateHotel } from "@/actions/hotelActions";
import { handleServerResponse } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface HotelFormProps {
    mode: "create" | "edit";
    initialData?: {
        _id?: string;
        name: string;
        description: string;
        location: string;
        image?: string;
    };
}

const HotelForm: React.FC<HotelFormProps> = ({ mode, initialData }) => {
    const router = useRouter();
    const [preview, setPreview] = useState<string | null>(initialData?.image || null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);

    const handleImageChange = (file: File | null, previewUrl: string | null) => {
        setImageFile(file);
        setPreview(previewUrl);
    };

    const handleCompressionStateChange = (compressing: boolean) => {
        setIsCompressing(compressing);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData();

        // Manually add form fields
        const nameInput = form.querySelector('[name="name"]') as HTMLInputElement;
        const locationInput = form.querySelector('[name="location"]') as HTMLInputElement;
        const descriptionInput = form.querySelector('[name="description"]') as HTMLTextAreaElement;

        if (nameInput?.value) formData.append("name", nameInput.value);
        if (locationInput?.value) formData.append("location", locationInput.value);
        if (descriptionInput?.value) formData.append("description", descriptionInput.value);

        // Add compressed image file if available
        if (imageFile) {
            formData.append("image", imageFile, imageFile.name);
        }

        try {
            const result =
                mode === "edit" && initialData?._id
                    ? await updateHotel(initialData._id, formData)
                    : await createHotel(formData);

            handleServerResponse(result, () => {
                router.push("/izzan-staff-portal/hotels");
            });
        } catch (error) {
            console.error("Error submitting hotel:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <ImageUpload
                name="image"
                preview={preview}
                onImageChange={handleImageChange}
                onCompressionStateChange={handleCompressionStateChange}
                label="Upload Hotel Image"
                shape="rectangle"
            />

            <div className="grid grid-cols-1 gap-6">
                {/* Hotel Name */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                        Hotel Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        defaultValue={initialData?.name}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30"
                        placeholder="e.g. Grand Plaza Hotel"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                        Location
                    </label>
                    <div className="relative">
                        <input
                            name="location"
                            type="text"
                            required
                            defaultValue={initialData?.location}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30"
                            placeholder="e.g. New York, USA"
                        />
                        <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-tight">
                        Description
                    </label>
                    <textarea
                        name="description"
                        rows={6}
                        required
                        defaultValue={initialData?.description}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50/30 resize-none"
                        placeholder="Describe the hotel, amenities, and features..."
                    ></textarea>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-4 pt-4 border-t border-gray-50">
                <button
                    type="button"
                    onClick={() => router.push("/izzan-staff-portal/hotels")}
                    disabled={loading || isCompressing}
                    className="px-6 py-2.5 text-gray-500 font-medium hover:text-gray-800 transition disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading || isCompressing}
                    className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : isCompressing ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    {isCompressing ? "Optimizing..." : loading ? "Saving..." : mode === "edit" ? "Update Hotel" : "Add Hotel"}
                </button>
            </div>
        </form>
    );
};

export default HotelForm;
