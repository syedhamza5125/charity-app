import DBConnect from "../lib/dbconnect";
import Donation from "../model/Donation";
import User from "../model/User";

export default async function handler(req, res) {

  if (req.method !== "GET") {
    return res.status(405).json({ success: false });
  }

  try {

    await DBConnect();

    // ✅ 1️⃣ Total Users
    const totalUsers = await User.countDocuments();

    // ✅ 2️⃣ All Donations
    const donations = await Donation.find();

    // ✅ 3️⃣ Total Donation Amount (No Aggregation)
    let totalDonation = 0;

    donations.forEach(d => {
      totalDonation += Number(d.amount);
    });

    // ✅ 4️⃣ Recent Donations (Last 5)
    const recentDonations = await Donation.find()
      .sort({ createdAt: -1 })
      .limit(5);

    return res.status(200).json({
      success: true,
      totalUsers,
      totalDonation,
      recentDonations
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}