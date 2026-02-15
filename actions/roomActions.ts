/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { connectDB } from "@/db/dbConfig";
import { z } from "zod";
import sanitize from "mongo-sanitize";

import Room from "@/models/Room";
import { uploadImage } from "@/lib/cloudinary";
import { revalidateTag } from "next/cache";
import { requireStaff } from "@/lib/access-helper";

const RoomSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    hotelId: z.string().min(1, "Hotel is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.coerce.number().min(0, "Price must be positive"),
    area: z.coerce.number().min(0, "Area must be positive"),
    capacity: z.coerce.number().min(1, "Capacity must be at least 1"),
    amenities: z.array(z.string()).optional(),
    bedType: z.string().min(1, "Bed type is required"),
});

export async function createRoom(formData: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const rawData = sanitize({
            title: formData.get("title"),
            hotelId: formData.get("hotelId"),
            description: formData.get("description"),
            price: formData.get("price"),
            area: formData.get("area"),
            capacity: formData.get("capacity"),
            bedType: formData.get("bedType"),
        });

        const amenities = JSON.parse(formData.get("amenities") as string || "[]");
        const validatedFields = RoomSchema.safeParse({ ...rawData, amenities });

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const imageUrls: string[] = [];
        const imageFiles = formData.getAll("images") as File[];

        for (const file of imageFiles) {
            if (file.size > 0) {
                const url = await uploadImage(file, "rooms");
                if (url) imageUrls.push(url);
            }
        }

        if (imageUrls.length > 5) {
            return { success: false, message: "Max 5 images allowed." };
        }

        await Room.create({
            title: validatedFields.data.title,
            hotelId: validatedFields.data.hotelId,
            description: validatedFields.data.description,
            price: validatedFields.data.price,
            area: validatedFields.data.area,
            capacity: validatedFields.data.capacity,
            amenities: validatedFields.data.amenities,
            bedType: validatedFields.data.bedType,
            images: imageUrls,
        });

        revalidateTag("rooms", "max");
        return { success: true, message: "Room created successfully!" };
    } catch (error) {
        console.error("Error creating room:", error);
        return { success: false, message: "Failed to create room." };
    }
}

export async function updateRoom(id: string, formData: FormData) {
    try {
        await requireStaff()
        await connectDB();

        const rawData = sanitize({
            title: formData.get("title"),
            hotelId: formData.get("hotelId"),
            description: formData.get("description"),
            price: formData.get("price"),
            area: formData.get("area"),
            capacity: formData.get("capacity"),
            bedType: formData.get("bedType"),
        });

        const amenities = JSON.parse(formData.get("amenities") as string || "[]");
        const validatedFields = RoomSchema.safeParse({ ...rawData, amenities });

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const existingImages = JSON.parse(formData.get("existingImages") as string || "[]");
        const newImages = formData.getAll("newImages") as File[];
        const newImageUrls: string[] = [];

        for (const file of newImages) {
            if (file.size > 0) {
                const url = await uploadImage(file, "rooms");
                if (url) newImageUrls.push(url);
            }
        }

        const finalImages = [...existingImages, ...newImageUrls];

        if (finalImages.length > 5) {
            return { success: false, message: "Max 5 images allowed." };
        }

        const updateData: any = {
            title: validatedFields.data.title,
            hotelId: validatedFields.data.hotelId,
            description: validatedFields.data.description,
            price: validatedFields.data.price,
            area: validatedFields.data.area,
            capacity: validatedFields.data.capacity,
            amenities: validatedFields.data.amenities,
            bedType: validatedFields.data.bedType,
            images: finalImages,
        };

        await Room.findByIdAndUpdate(id, updateData);

        revalidateTag("rooms", "max");
        revalidateTag(`room-${id}`, "max");
        return { success: true, message: "Room updated successfully!" };
    } catch (error) {
        console.error("Error updating room:", error);
        return { success: false, message: "Failed to update room." };
    }
}

export async function deleteRoom(id: string) {
    try {
        await requireStaff()
        await connectDB();
        await Room.findByIdAndDelete(id);
        revalidateTag("rooms", "max");
        revalidateTag(`room-${id}`, "max");
        return { success: true, message: "Room deleted successfully" };
    } catch (error) {
        console.error("Error deleting room:", error);
        return { success: false, message: "Failed to delete room" };
    }
}
