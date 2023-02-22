import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const token_key = "nitesh";

export default async function signin(req, res) {
  // check if email exists
  console.log("email - ", req.body.email);
  const user = await User.findOne({ email: req.body.email });
  console.log({ user });
  if (!user) res.status(400).json({ message: "email doesn't exist ok" });
  //   check if password matches
  else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      res.status(400).json({ message: "password didn't match ok" });
    else {
      // if all goes well upto now , create a json web token
      const token = jwt.sign({ _id: user._id, email: user.email }, token_key);

      //return the token as the response
      res.status(200).json({ email: req.body.email, token });
    }
  }
}
