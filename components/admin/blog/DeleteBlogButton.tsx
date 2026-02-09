"use client";

import { Trash2, Loader2 } from "lucide-react";
import { deleteBlog } from "@/actions/blogActions";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteBlogButton({ id }: { id: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        setLoading(true);
        try {
            const result = await deleteBlog(id);
            if (result.success) {
                toast.success(result.message || "Blog deleted successfully");
                router.refresh();
            } else {
                toast.error(result.message || "Failed to delete blog");
            }
        } catch (error) {
            toast.error("Error deleting blog");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="flex items-center justify-center gap-2 px-4 py-2 sm:p-2.5 text-red-500 bg-red-50 sm:bg-transparent hover:bg-red-50 rounded-xl transition-all flex-1 sm:flex-none disabled:opacity-50"
        >
            {loading ? <Loader2 size={18} className="animate-spin shrink-0" /> : <Trash2 size={18} className="shrink-0" />}
            <span className="sm:hidden text-sm font-semibold">Delete</span>
        </button>
    );
}
