/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { connectDB } from "@/db/dbConfig";
import { z } from "zod";
import sanitize from "mongo-sanitize";

import Hotel from "@/models/Hotel";
import { uploadImage } from "@/lib/cloudinary";
import { revalidateTag } from "next/cache";
import { requireStaff } from "@/lib/access-helper";

const HotelSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    location: z.string().min(2, "Location is required"),
});

export async function createHotel(formData: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const rawData = sanitize({
            name: formData.get("name"),
            description: formData.get("description"),
            location: formData.get("location"),
        });

        const validatedFields = HotelSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const imageFile = formData.get("image") as File | null;
        let imageUrl = "";

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "hotels");
        } else {
            return { success: false, message: "Image is required." };
        }

        await Hotel.create({
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            location: validatedFields.data.location,
            image: imageUrl,
        });

        revalidateTag("hotels", "max");
        return { success: true, message: "Hotel created successfully!" };
    } catch (error) {
        console.error("Error creating hotel:", error);
        return { success: false, message: "Failed to create hotel." };
    }
}

export async function updateHotel(id: string, formData: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const rawData = sanitize({
            name: formData.get("name"),
            description: formData.get("description"),
            location: formData.get("location"),
        });

        const validatedFields = HotelSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const imageFile = formData.get("image") as File | null;
        let imageUrl = undefined;

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(imageFile, "hotels");
        }

        const updateData: any = {
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            location: validatedFields.data.location,
        };

        if (imageUrl) updateData.image = imageUrl;

        await Hotel.findByIdAndUpdate(id, updateData);

        revalidateTag("hotels", "max");
        revalidateTag(`hotel-${id}`, "max");
        return { success: true, message: "Hotel updated successfully!" };
    } catch (error) {
        console.error("Error updating hotel:", error);
        return { success: false, message: "Failed to update hotel." };
    }
}

export async function deleteHotel(id: string) {
    try {
        await requireStaff()
        await connectDB();
        await Hotel.findByIdAndDelete(id);
        revalidateTag("hotels", "max");
        revalidateTag(`hotel-${id}`, "max");
        return { success: true, message: "Hotel deleted successfully" };
    } catch (error) {
        console.error("Error deleting hotel:", error);
        return { success: false, message: "Failed to delete hotel" };
    }
}
