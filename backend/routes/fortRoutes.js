const express = require("express");

const {
  getAllForts,
  getFortById,
} = require("../controllers/fortController");

const router = express.Router();

router.get("/", getAllForts);

router.get("/:id", getFortById);

module.exports = router;