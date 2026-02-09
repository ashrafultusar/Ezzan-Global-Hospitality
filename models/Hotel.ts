import mongoose, { Schema, model, models } from "mongoose";

const HotelSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

const Hotel = models.Hotel || model("Hotel", HotelSchema);

export default Hotel;
