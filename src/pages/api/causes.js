import DBConnect from "../lib/dbconnect";
import Donation from "../model/Donation";

export default async function handler(req, res) {

  if (req.method !== "GET") {
    return res.status(405).json({ success: false });
  }

  try {

    await DBConnect();

    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "UserId required"
      });
    }

    const donations = await Donation.find({ userId })
      .sort({ createdAt: -1 });

    let totalAmount = 0;

    donations.forEach(d => {
      totalAmount += Number(d.amount);
    });

    return res.status(200).json({
      success: true,
      donations,
      totalAmount
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}