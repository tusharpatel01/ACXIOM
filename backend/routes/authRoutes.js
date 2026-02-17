import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// this is the register logic, we will use this to create users with different roles (admin/user)
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  res.json({
    message: "User Registered Successfully",
    user
  });
});

// this is the login logic, we will use this to authenticate users and generate JWT tokens
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ message: "User Not Found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(400).json({ message: "Invalid Password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, { httpOnly: true });

  res.json({
    message: "Login Successful",
    user: {
      id: user._id,
      name: user.name,
      role: user.role
    }
  });
});
// this is the logout logic, we will use this to clear the JWT token from cookies
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout Successful" });
});

export default router;
