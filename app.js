const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Routes
app.get("/api/", (req, res) => {
  res.json({
    message: "Welcome to the API schetech",
  });
});

app.use("/api/users", userRoutes);

module.exports = app;
