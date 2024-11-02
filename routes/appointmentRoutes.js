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
  );

module.exports = router;
