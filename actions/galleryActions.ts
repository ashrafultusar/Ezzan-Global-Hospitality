"use server";

import { connectDB } from "@/db/dbConfig";
import Gallery from "@/models/Gallery";
import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
import { requireStaff } from "@/lib/access-helper";
import sanitize from "mongo-sanitize";

export async function addGalleryImage(formData: FormData) {
    try {
        await requireStaff();
        await connectDB();

        const title = sanitize(formData.get("title") as string);
        const category = sanitize(formData.get("category") as string);
        const imageFile = formData.get("image") as File;

        if (!imageFile || imageFile.size === 0) {
            return { success: false, message: "Please select an image." };
        }

        const imageUrl = await uploadImage(imageFile, "gallery");
        if (!imageUrl) return { success: false, message: "Upload failed." };

        await Gallery.create({
            src: imageUrl,
            title: title || "",
            category: category || "All",
        });

        revalidatePath("/izzan-staff-portal/gallery");
        return { success: true, message: "Photo added successfully!" };
    } catch (error) {
        return { success: false, message: "Failed to add photo." };
    }
}

export async function deleteGalleryImage(id: string) {
    try {
        await requireStaff();
        await connectDB();
        await Gallery.findByIdAndDelete(id);
        revalidatePath("/izzan-staff-portal/gallery");
        return { success: true, message: "Deleted successfully" };
    } catch (error) {
        return { success: false, message: "Delete failed" };
    }
}