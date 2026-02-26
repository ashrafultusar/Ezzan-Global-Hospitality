import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import Gallery from "@/models/Gallery";
import { IGalleryImage } from "@/types/gallery.types";

export const getGalleryImagesConfig = unstable_cache(
    async () => {
        await connectDB();
        const images = await Gallery.find({})
            .select("title category src")
            .sort({ createdAt: -1 })
            .lean();

        return {
            success: true,
            data: JSON.parse(JSON.stringify(images)) as IGalleryImage[]
        };
    },
    ["gallery-images"],
    { tags: ["gallery"] }
);

export const getGalleryImages = cache(async () => {
    return await getGalleryImagesConfig();
});