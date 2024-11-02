const express = require("express");
const Appointment = require("../models/Appointment");
const appointmentController = require("../controllers/appointmentController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    appointmentController.getAllAppointments
  )
  .post(
    authController.protect,
    appointmentController.setAppointmentUserIds,
    appointmentController.createAppointment
  );

router
  .route("/:id")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    appointmentController.updateAppointment
  );

module.exports = router;
