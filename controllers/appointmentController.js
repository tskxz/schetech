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

const updateAppointment = async function (req, res) {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedAppointment) {
      return res.status(404).json({
        status: "error",
        message: "Appointment not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        appointment: updatedAppointment,
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

const deleteAppointment = async function (req, res) {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAppointment) {
      return res.status(404).json({
        status: "error",
        message: "Appointment not found",
      });
    } else {
      res.status(204).json({
        status: "success",
        message: "Appointment deleted successfully",
      });
    }
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
  updateAppointment,
  deleteAppointment,
};
