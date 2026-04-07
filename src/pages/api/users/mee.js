import DBConnect from "@/pages/lib/dbconnect";
import User from "@/pages/model/User";
export default async function handler(req, res) {
    await DBConnect();
    if (req.method === 'GET') 
    {
        try {
            const userId = req.query.userId;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    else 
        res.status(405).json({ error: "Method not allowed" });
}
