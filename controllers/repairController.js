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

module.exports = { getAllRepairs };
