
import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISuccessStory extends Document {
    studentName: string;
    university: string;
    subject: string;
    image: string;
    story: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}

const SuccessStorySchema = new Schema<ISuccessStory>(
    {
        studentName: { type: String, required: true },
        university: { type: String, required: true },
        subject: { type: String, required: true },
        image: { type: String, required: true },
        story: { type: String, required: true },
        rating: { type: Number, default: 5 },
    },
    { timestamps: true }
);

const SuccessStory: Model<ISuccessStory> = mongoose.models.SuccessStory || mongoose.model<ISuccessStory>("SuccessStory", SuccessStorySchema);

export default SuccessStory;
