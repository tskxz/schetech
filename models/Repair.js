const mongoose = require("mongoose");

const repairSchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.ObjectId,
    ref: "Appointment",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  issues_found: {
    type: [String],
    required: true,
  },
  budget_estimate: {
    type: Number,
    required: true,
    min: 0,
  },
  authorization_status: {
    type: String,
    enum: ["pending", "confirmed", "rejected"], // Status permitido
    default: "pending",
  },
  client_authorized: {
    type: Boolean,
    default: false,
  },
});

const Repair = mongoose.model("Repair", repairSchema);

module.exports = Repair;
