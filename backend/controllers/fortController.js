const Fort = require("../models/Fort");

// GET /api/forts
const getAllForts = async (req, res) => {
  try {
    const forts = await Fort.findAll({
      order: [["id", "ASC"]],
    });

    res.status(200).json({
      success: true,
      count: forts.length,
      data: forts,
    });
  } catch (error) {
    console.error("Error fetching forts:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch forts",
    });
  }
};

// GET /api/forts/:id
const getFortById = async (req, res) => {
  try {
    const fort = await Fort.findByPk(req.params.id);

    if (!fort) {
      return res.status(404).json({
        success: false,
        message: "Fort not found",
      });
    }

    res.status(200).json({
      success: true,
      data: fort,
    });
  } catch (error) {
    console.error("Error fetching fort:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch fort",
    });
  }
};

module.exports = {
  getAllForts,
  getFortById,
};