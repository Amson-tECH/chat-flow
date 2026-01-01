import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

//routes
app.get("/", (_req, res) => {
  res.json({ message: "Hello Server" });
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
