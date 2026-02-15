import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";

// ============================================
// Data Cache (Next.js Cache - Shared across requests)
// ============================================

const getHotelsConfig = unstable_cache(
    async () => {
        await connectDB();
        const hotels = await Hotel.find({}).sort({ createdAt: -1 });
        return { success: true, hotels: JSON.parse(JSON.stringify(hotels)) };
    },
    ["hotels-list"],
    { tags: ["hotels"] }
);

const getHotelByIdConfig = async (id: string) => {
    return await unstable_cache(
        async () => {
            await connectDB();
            try {
                const hotel = await Hotel.findById(id);
                if (!hotel) return { success: false, message: "Hotel not found" };
                return { success: true, hotel: JSON.parse(JSON.stringify(hotel)) };
            } catch {
                return { success: false, message: "Invalid ID" };
            }
        },
        [`hotel-details-${id}`],
        { tags: ["hotels", `hotel-${id}`] }
    )();
};

/**
 * Optimized query for the Homestay listing page.
 * Fetches only the fields needed for hotel cards — no rooms, no timestamps.
 */
const getHotelsForListingConfig = unstable_cache(
    async () => {
        await connectDB();
        const hotels = await Hotel.find({})
            .select("name location description image stars tags")
            .sort({ createdAt: -1 })
            .lean();
        return { success: true, hotels: JSON.parse(JSON.stringify(hotels)) };
    },
    ["hotels-listing"],
    { tags: ["hotels"] }
);

// ============================================
// Request Memoization (React Cache - Per Request)
// ============================================

export const getHotels = cache(async () => {
    return await getHotelsConfig();
});

export const getHotelById = cache(async (id: string) => {
    return await getHotelByIdConfig(id);
});

export const getHotelsForListing = cache(async () => {
    return await getHotelsForListingConfig();
});
