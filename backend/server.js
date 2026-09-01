const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🏰 Forts of India API is running",
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await sequelize.authenticate();

    console.log(
      "✅ MySQL Database Connected Successfully"
    );

    app.listen(PORT, () => {
      console.log(
        `🚀 Server running on port ${PORT}`
      );
    });

  } catch (error) {

    console.error(
      "❌ Database connection failed:"
    );

    console.error(error.message);
  }
}

startServer();