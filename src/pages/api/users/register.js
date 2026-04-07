import { signupvalidation } from "../validation";
import bcrypt from "bcryptjs";
import DBConnect from "@/pages/lib/dbconnect";
import User from "@/pages/model/User";
export default async function handler(req, res) {
  await DBConnect();
   console.log("METHOD:", req.method);  // ✅ yahan 
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }
  try {
    const { name, email, password } = req.body;
    const { success, message } = signupvalidation(name, email, password);
    if (!success) {
      return res.status(400).json({ success: false, message });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json({ success: true, data: newUser });
    
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}