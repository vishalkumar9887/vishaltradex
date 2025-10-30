require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./model/UserModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ Default route
app.get("/", (req, res) => {
  res.send("VishalTradeX Backend is Running ✅");
});

// ✅ SIGNUP
app.post("/api/signup", async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await UserModel.findOne({ phone });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ phone, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Signup successful", token });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await UserModel.findOne({ phone });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Other routes
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved!");
});

// ✅ Connect DB first, then start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB Connection Error:", err));
