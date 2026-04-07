import DBConnect from "../lib/dbconnect";
import Donation from "../model/Donation";

export default async function handler(req, res) {

  if (req.method !== "GET") {
    return res.status(405).json({ success: false });
  }

  try {

    await DBConnect();

    const { userId } = req.query;

    const result = await Donation.aggregate([
      {
        $match: {
          userId: userId   // ✅ string match (no ObjectId)
        }
      },
      {
        $group: {
          _id: "$causeId",
          total: { $sum: "$amount" }
        }
      }
    ]);

    return res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}