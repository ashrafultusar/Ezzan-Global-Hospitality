import mongoose, { Schema, model, models } from "mongoose";

const HotelSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        image: { type: String, required: true },
        stars: { type: Number, default: 5, min: 1, max: 7 },
        tags: { type: [String], default: [] },
    },
    { timestamps: true }
);

const Hotel = models.Hotel || model("Hotel", HotelSchema);

export default Hotel;
