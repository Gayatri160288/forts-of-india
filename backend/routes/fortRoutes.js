const express = require("express");

const {
  getAllForts,
  getFortById,
  createFort,
  updateFort,
  deleteFort,
} = require("../controllers/fortController");

const router = express.Router();

// GET all forts
router.get("/", getAllForts);

// GET one fort
router.get("/:id", getFortById);

// CREATE fort
router.post("/", createFort);

// UPDATE fort
router.put("/:id", updateFort);

// DELETE fort
router.delete("/:id", deleteFort);

module.exports = router;