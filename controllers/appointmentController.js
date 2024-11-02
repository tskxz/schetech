const Appointment = require("../models/Appointment");

const getAllAppointments = async function (req, res) {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      status: "success",
      results: appointments.length,
      data: {
        appointments,
      },
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

module.exports = { getAllAppointments };
