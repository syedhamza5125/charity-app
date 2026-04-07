import mongoose from "mongoose";

const CauseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  image: String,          // future use
  goalAmount: Number,     // optional
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Cause ||
mongoose.model("Cause", CauseSchema);