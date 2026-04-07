import DBConnect from "@/pages/lib/dbconnect";
import User from "@/pages/model/User";
import bcrypt from "bcryptjs";
import { loginvalidation } from "../validation";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
export default async function handler(req, res) {
    await DBConnect();
    if (req.method !== "POST") {
     return res.status(405).json({ success: false, message: "Method not allowed" });
    }
    try {
        const { email, password } = req.body;
        const { success, message } = loginvalidation(email, password);
        if (!success) {
            return res.status(400).json({ success: false, message });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "8h" });
       res.setHeader("Set-Cookie", serialize("token", token, {
            httpOnly: true,
            path: "/",
            maxAge: 60*60*24,
        }));
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: { _id: user._id, name: user.name, email: user.email },
        });

    } 
    catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}