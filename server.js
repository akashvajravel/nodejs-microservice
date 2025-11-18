import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/items", itemRoutes);
app.use("/health", healthRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
