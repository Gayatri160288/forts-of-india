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

// POST /api/forts
const createFort = async (req, res) => {
  try {
    const {
      name,
      state,
      location,
      type,
      description,
      image,
    } = req.body;

    if (
      !name ||
      !state ||
      !location ||
      !type ||
      !description ||
      !image
    ) {
      return res.status(400).json({
        success: false,
        message: "All fort fields are required",
      });
    }

    const fort = await Fort.create({
      name,
      state,
      location,
      type,
      description,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Fort created successfully",
      data: fort,
    });
  } catch (error) {
    console.error("Error creating fort:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create fort",
    });
  }
};

// PUT /api/forts/:id
const updateFort = async (req, res) => {
  try {
    const fort = await Fort.findByPk(req.params.id);

    if (!fort) {
      return res.status(404).json({
        success: false,
        message: "Fort not found",
      });
    }

    const {
      name,
      state,
      location,
      type,
      description,
      image,
    } = req.body;

    if (
      !name ||
      !state ||
      !location ||
      !type ||
      !description ||
      !image
    ) {
      return res.status(400).json({
        success: false,
        message: "All fort fields are required",
      });
    }

    await fort.update({
      name,
      state,
      location,
      type,
      description,
      image,
    });

    res.status(200).json({
      success: true,
      message: "Fort updated successfully",
      data: fort,
    });
  } catch (error) {
    console.error("Error updating fort:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update fort",
    });
  }
};

// DELETE /api/forts/:id
const deleteFort = async (req, res) => {
  try {
    const fort = await Fort.findByPk(req.params.id);

    if (!fort) {
      return res.status(404).json({
        success: false,
        message: "Fort not found",
      });
    }

    await fort.destroy();

    res.status(200).json({
      success: true,
      message: "Fort deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting fort:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete fort",
    });
  }
};

module.exports = {
  getAllForts,
  getFortById,
  createFort,
  updateFort,
  deleteFort,
};