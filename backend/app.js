const express = require("express");
const cors = require("cors");

const fortRoutes = require("./routes/fortRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use("/api/forts", fortRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🏰 Forts of India API is running",
  });
});

module.exports = app;