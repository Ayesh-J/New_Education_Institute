// models/Gallery.js
import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: { type: String },               // Optional: image title
  image: { type: String, required: true }, // Base64 string or image URL
  uploadedAt: { type: Date, default: Date.now },
});

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
