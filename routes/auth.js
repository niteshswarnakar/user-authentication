import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
});

router.get("/demo", (req, res) => {
  res.json({ demo: "demo" });
});

export default router;
