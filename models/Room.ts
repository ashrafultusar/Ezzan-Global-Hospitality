import { Schema, model, models } from "mongoose";

const RoomSchema = new Schema(
    {
        title: { type: String, required: true },
        hotelId: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        area: { type: Number, required: true },
        capacity: { type: Number, required: true },
        amenities: { type: [String], default: [] },
        bedType: { type: String, required: true },
        images: {
            type: [String],
            validate: [(v: string[]) => v.length <= 5, "Max 5 images allowed"],
            default: []
        },
    },
    { timestamps: true }
);

const Room = models.Room || model("Room", RoomSchema);

export default Room;
