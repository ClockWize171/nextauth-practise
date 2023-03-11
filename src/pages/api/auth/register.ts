import User from "model/userSchema";
import { connectMongo } from "../../../../database/connect";
import { hash } from "bcryptjs";

export default async function handler(req: any, res: any) {
  connectMongo().catch((error) =>
    res.json({ error: `connection failed. ${error}` })
  );

  // ONLY POST METHOD ALLOW
  if (req.method === "POST") {
    if (!req.body) return res.status(404).json({ error: "Data required." });
    const { username, email, password } = req.body;

    // CHECK DUPLICATE USERS
    const duplicateUser = await User.findOne({ email });
    if (duplicateUser)
      return res.status(402).json({ message: "User already exists!" });

    // HASH PASSWORD
    try {
      const doc = await User.create({
        username,
        email,
        password: await hash(password, 12),
      });
      return res.status(201).json({ status: "success", data: doc });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error });
    }
  } else {
    return res.status(500).json({ message: "Bad request!" });
  }
}
