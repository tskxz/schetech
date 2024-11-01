const express = require("express");
const userRoutes = require("./routes/userRoutes");

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

module.exports = app;
