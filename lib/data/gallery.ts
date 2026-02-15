"use server";

import { connectDB } from "@/db/dbConfig";
import Gallery from "@/models/Gallery";



export const getGalleryImages = async () => {
    try {
        await connectDB();
        
        const images = await Gallery.find({}).sort({ createdAt: -1 });
        
        return { 
            success: true, 
            data: JSON.parse(JSON.stringify(images)) 
        };
    } catch (error) {
        console.error("Error fetching gallery:", error);
        return { success: false, data: [] };
    }
};