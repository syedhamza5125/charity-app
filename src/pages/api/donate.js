import DBConnect from "../lib/dbconnect";
import Donation from "../model/Donation";
import Cause from "../model/Cause";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {

    await DBConnect();

    const { userId, cause, amount } = req.body;

    console.log("Backend Received:", req.body);

    if (!userId || !cause || !amount) {
      return res.status(400).json({
        success: false,
        message: "All fields required"
      });
    }

    await Donation.create({
      userId,
      causeId: cause,
      amount
    });

    await Cause.findOneAndUpdate(
      { name: cause },
      { $inc: { totalAmount: amount } }
    );

    return res.status(200).json({
      success: true,
      message: "Donation successful"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}