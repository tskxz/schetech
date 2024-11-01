const express = require("express");
const User = require("../models/User");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers);

module.exports = router;
