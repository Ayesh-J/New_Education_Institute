// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nei_project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected ");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDB;
