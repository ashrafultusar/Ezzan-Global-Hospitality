import { Schema, model, models } from "mongoose";

const GallerySchema = new Schema(
    {
        src: { type: String, required: true },
        title: { type: String, default: "" }, 
        
        category: { type: String, default: "All" }, 
    },
    { timestamps: true }
);

const Gallery = models.Gallery || model("Gallery", GallerySchema);

export default Gallery;