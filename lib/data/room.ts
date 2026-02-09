import { connectDB } from "@/db/dbConfig";
import Room from "@/models/Room";

export const getRooms = async () => {
    try {
        await connectDB();
        const rooms = await Room.find({}).populate("hotelId", "name").sort({ createdAt: -1 }); // Populate hotel name
        return { success: true, rooms: JSON.parse(JSON.stringify(rooms)) };
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return { success: false, rooms: [] };
    }
};

export const getRoomById = async (id: string) => {
    try {
        await connectDB();
        const room = await Room.findById(id);
        if (!room) return { success: false, message: "Room not found" };
        return { success: true, room: JSON.parse(JSON.stringify(room)) };
    } catch (error) {
        console.error("Error fetching room:", error);
        return { success: false, message: "Server Error" };
    }
};
