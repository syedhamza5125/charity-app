import DBConnect from "@/pages/lib/dbconnect";
import User from "@/pages/model/User";
export default async function handler(req, res) {
    await DBConnect();
    if (req.method !== "POST") {
     return res.status(405).json({ success: false, message: "Method not allowed" });
    }
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        if (password !== user.password) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: user
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}