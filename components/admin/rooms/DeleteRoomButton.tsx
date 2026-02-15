"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { deleteRoom } from "@/actions/roomActions";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function DeleteRoomButton({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this room?")) return;

        setLoading(true);
        try {
            const result = await deleteRoom(id);
            if (result.success) {
                toast.success(result.message);
                router.refresh();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete room");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="p-2 bg-white/90 backdrop-blur-sm text-red-500 hover:text-red-600 rounded-lg shadow-sm transition disabled:opacity-50"
        >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
        </button>
    );
}
