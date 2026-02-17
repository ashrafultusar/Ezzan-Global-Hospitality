"use client";

import React, { useState, useEffect } from "react";
import { Save, Loader2, Plus, X, Bed, Ruler, Users, Tag, Building } from "lucide-react";
import { createRoom, updateRoom } from "@/actions/roomActions";
import { handleServerResponse } from "@/lib/utils/formHelpers";
import ImageUpload from "@/components/admin/shared/ImageUpload";
import { useRouter } from "next/navigation";

interface Hotel {
    _id: string;
    name: string;
}

interface RoomFormProps {
    mode: "create" | "edit";
    initialData?: any;
    hotels: Hotel[];
}

const RoomForm: React.FC<RoomFormProps> = ({ mode, initialData, hotels }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);

    // Image State
    const [existingImages, setExistingImages] = useState<string[]>(initialData?.images || []);
    const [newImages, setNewImages] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    // Amenities State
    const [amenities, setAmenities] = useState<string[]>(initialData?.amenities || []);
    const [amenityInput, setAmenityInput] = useState("");

    const removeExistingImage = (index: number) => {
        setExistingImages(existingImages.filter((_, i) => i !== index));
    };

    const removeNewImage = (index: number) => {
        setNewImages(newImages.filter((_, i) => i !== index));
        URL.revokeObjectURL(previewUrls[index]);
        setPreviewUrls(previewUrls.filter((_, i) => i !== index));
    };

    // Cleanup previews on unmount
    const previewUrlsRef = React.useRef(previewUrls);
    useEffect(() => {
        previewUrlsRef.current = previewUrls;
    }, [previewUrls]);

    useEffect(() => {
        return () => {
            previewUrlsRef.current.forEach(url => URL.revokeObjectURL(url));
        };
    }, []);

    const addAmenity = () => {
        if (amenityInput.trim() && !amenities.includes(amenityInput.trim())) {
            setAmenities([...amenities, amenityInput.trim()]);
            setAmenityInput("");
        }
    };

    const removeAmenity = (amenity: string) => {
        setAmenities(amenities.filter(a => a !== amenity));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        // Append amenities
        formData.append("amenities", JSON.stringify(amenities));

        if (mode === "create") {
            newImages.forEach(file => formData.append("images", file));
        } else {
            formData.append("existingImages", JSON.stringify(existingImages));
            newImages.forEach(file => formData.append("newImages", file));
        }

        try {
            const result = mode === "edit" && initialData?._id
                ? await updateRoom(initialData._id, formData)
                : await createRoom(formData);

            handleServerResponse(result, () => {
                router.push("/izzan-staff-portal/rooms");
            });
        } catch (error) {
            console.error("Error submitting room:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto pb-10">
            {/* Image Upload Section */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <label className="block text-sm font-bold text-gray-700 mb-4">Room Images (Max 5)</label>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    {/* Existing Images */}
                    {existingImages.map((url, i) => (
                        <div key={`exist-${i}`} className="h-full aspect-square">
                            <ImageUpload
                                preview={url}
                                onImageChange={() => removeExistingImage(i)}
                                className="h-full !py-0 !border-0 bg-transparent"
                                shape="rectangle"
                                label=""
                            />
                        </div>
                    ))}

                    {/* New Images */}
                    {newImages.map((file, i) => (
                        <div key={`new-${i}`} className="h-full aspect-square">
                            <ImageUpload
                                preview={previewUrls[i]}
                                onImageChange={() => removeNewImage(i)}
                                className="h-full !py-0 !border-0 bg-transparent"
                                shape="rectangle"
                                label=""
                            />
                        </div>
                    ))}

                    {/* Add Button */}
                    {(existingImages.length + newImages.length) < 5 && (
                        <div className="h-full aspect-square">
                            <ImageUpload
                                preview={null}
                                onImageChange={() => { }}
                                onFilesChange={(files, previews) => {
                                    if (existingImages.length + newImages.length + files.length > 5) {
                                        alert("Maximum 5 images allowed");
                                        return;
                                    }
                                    setNewImages([...newImages, ...files]);
                                    setPreviewUrls([...previewUrls, ...previews]);
                                }}
                                onCompressionStateChange={setIsCompressing}
                                multiple={true}
                                label="Add"
                                className="h-full"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Room Title</label>
                    <input name="title" type="text" required defaultValue={initialData?.title} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Deluxe Ocean View Suite" />
                </div>

                {/* Hotel */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Hotel</label>
                    <div className="relative">
                        <select name="hotelId" required defaultValue={initialData?.hotelId || ""} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white">
                            <option value="">Select a Hotel</option>
                            {hotels.map(hotel => (
                                <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                            ))}
                        </select>
                        <Building className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Price / Rent (per night)</label>
                    <div className="relative">
                        <span className="absolute left-3 top-3.5 text-gray-500 font-bold">$</span>
                        <input name="price" type="text" required defaultValue={initialData?.price} className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0.00" />
                    </div>
                </div>

                {/* Area */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Area (sq ft)</label>
                    <div className="relative">
                        <input name="area" type="number" required min="0" defaultValue={initialData?.area} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 450" />
                        <Ruler className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Capacity */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Capacity (Persons)</label>
                    <div className="relative">
                        <input name="capacity" type="number" required min="1" defaultValue={initialData?.capacity} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 2" />
                        <Users className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>

                {/* Bed Type */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bed Type</label>
                    <div className="relative">
                        <input name="bedType" type="text" required defaultValue={initialData?.bedType} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. King Size" />
                        <Bed className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                </div>
            </div>

            {/* Amenities */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <label className="block text-sm font-bold text-gray-700 mb-4">Room Amenities</label>
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={amenityInput}
                        onChange={(e) => setAmenityInput(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Add amenity (e.g. WiFi, AC)"
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
                    />
                    <button type="button" onClick={addAmenity} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {amenities.map((amenity, i) => (
                        <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                            <Tag size={14} /> {amenity}
                            <button type="button" onClick={() => removeAmenity(amenity)} className="hover:text-red-500"><X size={14} /></button>
                        </span>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                <textarea name="description" rows={6} required defaultValue={initialData?.description} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="Detailed room description..." />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => router.push("/izzan-staff-portal/rooms")} disabled={loading} className="px-6 py-2.5 text-gray-500 font-medium hover:text-gray-800 transition disabled:opacity-50">Cancel</button>
                <button type="submit" disabled={loading} className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition active:scale-95 disabled:bg-blue-400">
                    {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    {loading ? "Saving..." : mode === "edit" ? "Update Room" : "Add Room"}
                </button>
            </div>
        </form>
    );
};

export default RoomForm;
