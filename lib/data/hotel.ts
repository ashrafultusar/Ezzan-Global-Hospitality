import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";

export const getHotels = async () => {
    try {
        await connectDB();
        const hotels = await Hotel.find({}).sort({ createdAt: -1 });
        return { success: true, hotels: JSON.parse(JSON.stringify(hotels)) };
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return { success: false, hotels: [] };
    }
};

export const getHotelById = async (id: string) => {
    try {
        await connectDB();
        const hotel = await Hotel.findById(id);
        if (!hotel) return { success: false, message: "Hotel not found" };
        return { success: true, hotel: JSON.parse(JSON.stringify(hotel)) };
    } catch (error) {
        console.error("Error fetching hotel:", error);
        return { success: false, message: "Server Error" };
    }
};
