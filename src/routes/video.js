import { Schema, model } from "mongoose"

const videoSchema = new Schema(
    {
        url: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        versionkey: false,
    },
    { timestamps: { createdAt: "created_at" } }
)

export default model("video", videoSchema)
