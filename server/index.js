// server page with .env file import an express app and a server at PORT 4534
import dotenv from "dotenv";
dotenv.config();

import express from "express";

const application = express();
const PORT = process.env.PORT || 3000;

application.get("/", (req, res) => {
  res.send("Hello From Ramzi Osta!");
});

application.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
