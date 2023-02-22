import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoutes from "./routes/auth.js";

const app = express();

//to access environment variables
dotenv.config();

const PORT = 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// DB connection
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to MONGO-DB Database");
  }
);

//to allow cross origin
app.use(cors());

//to allow retrieving bytes in json format
app.use(express.json());

//api routes
app.get("/", (req, res) => {
  res.send("hey , It's alive");
});

app.use("/api/users", AuthRoutes);
