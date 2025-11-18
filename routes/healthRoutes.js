import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "UP",
    dbStatus: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    uptime: `${process.uptime().toFixed(0)}s`
  });
});

export default router;
