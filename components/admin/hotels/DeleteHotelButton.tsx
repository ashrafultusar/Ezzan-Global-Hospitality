"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { deleteHotel } from "@/actions/hotelActions";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface DeleteHotelButtonProps {
    id: string;
}

export default function DeleteHotelButton({ id }: DeleteHotelButtonProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this hotel? This action cannot be undone.")) return;

        setLoading(true);
        try {
            const result = await deleteHotel(id);
            if (result.success) {
                toast.success(result.message);
                router.refresh();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete hotel");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition disabled:opacity-50 flex items-center gap-1"
        >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
            Delete
        </button>
    );
}
