"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { deleteGalleryImage } from "@/actions/galleryActions";
import { toast } from "react-hot-toast";

export default function DeleteGalleryButton({ id }: { id: string }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this image?")) return;

        setIsDeleting(true);
        try {
            const res = await deleteGalleryImage(id);
            if (res.success) {
                toast.success("Image deleted successfully");
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition disabled:opacity-50"
            title="Delete Image"
        >
            {isDeleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
        </button>
    );
}