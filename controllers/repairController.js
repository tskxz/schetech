const Repair = require("../models/Repair");

const getAllRepairs = async function (req, res) {
  try {
    const repairs = await Repair.find();
    res.status(200).json({
      status: "success",
      results: repairs.length,
      data: { repairs },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: err,
    });
    return;
  }
};

const getRepair = async function (req, res) {
  try {
    const repair = await Repair.findById(req.params.id);
    if (!repair) {
      return res.status(404).json({
        status: "fail",
        message: "Repair not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        repair,
      },
    });
  } catch (err) {
    res,
      status(500).json({
        status: "error",
        message: err,
      });
  }
};

const createRepair = async function (req, res) {
  try {
    const { appointment, description, issues_found, budget_estimate } =
      req.body;
    const newRepair = await Repair.create({
      appointment,
      description,
      issues_found,
      budget_estimate,
    });
    res.status(201).json({
      status: "success",
      data: { repair: newRepair },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: err,
    });
    return;
  }
};

const updateRepair = async function (req, res) {
  try {
    const updatedRepair = await Repair.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedRepair) {
      return res.status(404).json({
        status: "error",
        message: "Repair not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        repair: updatedRepair,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err,
    });
    return;
  }
};

const deleteRepair = async function (req, res) {
  try {
    const deletedRepair = await Repair.findByIdAndDelete(req.params.id);
    if (!deletedRepair) {
      return res.status(404).json({
        status: "error",
        message: "Repair not found",
      });
    } else {
      res.status(204).json({
        status: "success",
        message: "Repair deleted successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err,
    });
    return;
  }
};

module.exports = {
  getAllRepairs,
  getRepair,
  createRepair,
  updateRepair,
  deleteRepair,
};
