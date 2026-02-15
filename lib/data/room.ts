import { unstable_cache } from "next/cache";
import { cache } from "react";
import { connectDB } from "@/db/dbConfig";
import Room from "@/models/Room";

// ============================================
// Data Cache (Next.js Cache - Shared across requests)
// ============================================

const getRoomsConfig = unstable_cache(
    async () => {
        await connectDB();
        const rooms = await Room.find({}).populate("hotelId", "name").sort({ createdAt: -1 });
        return { success: true, rooms: JSON.parse(JSON.stringify(rooms)) };
    },
    ["rooms-list"],
    { tags: ["rooms"] }
);

const getRoomByIdConfig = async (id: string) => {
    return await unstable_cache(
        async () => {
            await connectDB();
            try {
                const room = await Room.findById(id);
                if (!room) return { success: false, message: "Room not found" };
                return { success: true, room: JSON.parse(JSON.stringify(room)) };
            } catch {
                return { success: false, message: "Invalid ID" };
            }
        },
        [`room-details-${id}`],
        { tags: ["rooms", `room-${id}`] }
    )();
};

/**
 * Fetches all rooms belonging to a specific hotel.
 * Uses projection to return only fields needed for room cards.
 * Cached per hotel with both hotel-specific and global "rooms" tags.
 */
const getRoomsByHotelIdConfig = async (hotelId: string) => {
    return await unstable_cache(
        async () => {
            await connectDB();
            const rooms = await Room.find({ hotelId })
                .select("title description price area capacity amenities bedType images")
                .sort({ createdAt: -1 })
                .lean();
            return { success: true, rooms: JSON.parse(JSON.stringify(rooms)) };
        },
        [`hotel-${hotelId}-rooms`],
        { tags: ["rooms", `hotel-${hotelId}-rooms`] }
    )();
};

// ============================================
// Request Memoization (React Cache - Per Request)
// ============================================

export const getRooms = cache(async () => {
    return await getRoomsConfig();
});

export const getRoomById = cache(async (id: string) => {
    return await getRoomByIdConfig(id);
});

export const getRoomsByHotelId = cache(async (hotelId: string) => {
    return await getRoomsByHotelIdConfig(hotelId);
});
