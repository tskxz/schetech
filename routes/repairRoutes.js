const express = require("express");
const authController = require("../controllers/authController");
const repairController = require("../controllers/repairController");

const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    repairController.getAllRepairs
  );

module.exports = router;