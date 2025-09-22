import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.CORS, // React frontend URL (Vite default port)
    credentials: true,               // allow cookies/auth headers if needed
  })
);
app.use(express.json());

// Routes
// app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});


app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
