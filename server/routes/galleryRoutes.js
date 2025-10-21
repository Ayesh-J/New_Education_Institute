import express from "express";
import Gallery from "../models/GalleryModal.js";

const router = express.Router();

// GET all gallery images
router.get("/", async (req, res) => {
  try {
    const images = await Gallery.find().sort({ uploadedAt: -1 });
    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch gallery" });
  }
});

// POST upload new image (admin only)
router.post("/upload", async (req, res) => {
  try {
    const { title, image } = req.body; // image = base64 string from frontend
    if (!image) return res.status(400).json({ message: "No image provided" });

    const newImage = new Gallery({ title, image });
    await newImage.save();

    res.status(201).json({ message: "Image uploaded successfully", newImage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save image" });
  }
});

// DELETE image by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Gallery.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Image not found" });
    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete image" });
  }
});

// PATCH update image title by ID
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updated = await Gallery.findByIdAndUpdate(id, { title }, { new: true });
    if (!updated) return res.status(404).json({ message: "Image not found" });
    res.json({ message: "Title updated successfully", updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update title" });
  }
});

export default router;
