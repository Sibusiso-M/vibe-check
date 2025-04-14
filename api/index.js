const express = require("express");
const dotenv = require("dotenv");
const { checkVibe } = require("./vibeLogic.js");

dotenv.config();
const app = express();
app.use(express.json());

app.post("/vibe", (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "Text is required" });
  } else {
    const result = checkVibe(text);
    res.json(result);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Vibe Check API running on port ${PORT}`));
