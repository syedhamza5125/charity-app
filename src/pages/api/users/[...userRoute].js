// /pages/api/user/[...userRoute].js
import DBConnect from "@/pages/lib/dbconnect";
import User from "@/pages/model/User";
export default async function handler(req, res) {
  await DBConnect();

  const { method, query: { userRoute } } = req;
  const route = userRoute?.[0]; // first dynamic part

  try {
    // ✅ GET ALL USERS
    if (method === "GET" && route === "getall") {
      const users = await User.find();
      return res.status(200).json({ success: true, data: users });
    }

    // ✅ REGISTER USER
    if (method === "POST" && route === "register") {
      const { name, email, password } = req.body;
      const newUser = await User.create({ name, email, password });
      return res.status(201).json({ success: true, data: newUser });
    }

    // ❌ Route not found
    return res.status(404).json({ success: false, message: "Route not found" });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
