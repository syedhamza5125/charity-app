// /lib/dbconnect.js
import mongoose from 'mongoose';

export default async function DBConnect() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'mydatabase',
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
}
