import DBConnect from "@/pages/lib/dbconnect";
import User from "@/pages/model/User";
export default async function handler(req, res) {
    if (req.method === 'PUT') {
        try {
            await DBConnect();
            const { userId, name, email, phone, address } = req.body;
            const updatedUser = await User.findByIdAndUpdate(userId, { name, email, phone, address },);
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}