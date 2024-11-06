const express = require("express");
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const repairRoutes = require("./routes/repairRoutes");

// Initialize express app
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/api/", (req, res) => {
  res.json({
    message: "Welcome to the API schetech",
  });
});

app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/repairs", repairRoutes);

module.exports = app;
