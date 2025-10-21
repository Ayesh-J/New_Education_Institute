import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import galleryRoutes from "./routes/galleryRoutes.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nei_gallery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/gallery", galleryRoutes);

// Admin login (password from .env)
app.post("/admin-login", (req, res) => {
  const { password } = req.body;
  return res.json({ success: password === process.env.ADMIN_PASSWORD });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
