const Appointment = require("../models/Appointment");

const setAppointmentUserIds = (req, res, next) => {
  // allow nested routes
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

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

const createAppointment = async function (req, res) {
  try {
    const { user, status, scheduled_time, address } = req.body;
    const newAppointment = await Appointment.create({
      user,
      status,
      scheduled_time,
      address,
    });
    res.status(201).json({
      status: "success",
      data: {
        appointment: newAppointment,
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

module.exports = {
  getAllAppointments,
  setAppointmentUserIds,
  createAppointment,
};
