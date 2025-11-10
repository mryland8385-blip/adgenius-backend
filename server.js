// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route (you can add your AI/image routes later)
app.get("/", (req, res) => {
  res.json({ message: "AdGenius Backend is running!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
