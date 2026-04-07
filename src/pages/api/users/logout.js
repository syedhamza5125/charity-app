
import { serialize } from "cookie";
export default async function handler(req, res) {
    if (req.method !== "POST") 
    res.setHeader("Set-Cookie", serialize("token", "", {
        httpOnly: true,
        path: "/",
        maxAge: 0,
    }));
    return res.status(200).json({ success: true, message: "Logout successful" });
}