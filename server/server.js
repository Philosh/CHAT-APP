const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`.yellow.bold));
