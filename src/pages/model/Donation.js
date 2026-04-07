// models/Donation.js
import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },

  causeId: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Donation || mongoose.model("Donation", DonationSchema);