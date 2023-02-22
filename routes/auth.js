import express from "express";
import User from "../models/user.js";
import signup from "../controllers/signup.js";
import signin from "../controllers/signin.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
});

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
