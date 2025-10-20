import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Hardcoded password (you can move this to process.env.ADMIN_PASSWORD later)
const ADMIN_PASSWORD = "admin123";

app.post("/admin-login", (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
