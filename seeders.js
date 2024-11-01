const fs = require("fs");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Appointment = require("./models/Appointment");
const Repair = require("./models/Repair");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then((conn) => {
  console.log("Connected to MongoDB");
});

// Read JSON files
const users = JSON.parse(fs.readFileSync("./data/users.json"));
const appointments = JSON.parse(fs.readFileSync("./data/appointments.json"));
const repairs = JSON.parse(fs.readFileSync("./data/repairs.json"));

// Import Data
const importData = async () => {
  try {
    await User.create(users);
    await Appointment.create(appointments);
    await Repair.create(repairs);
    console.log("Data imported successfully");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Appointment.deleteMany();
    await Repair.deleteMany();
    console.log("Data successfuly deleted!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] == "--delete") {
  deleteData();
} else {
  importData();
}
