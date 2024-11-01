const fs = require("fs");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then((conn) => {
  console.log("Connected to MongoDB");
});

// Read JSON files
const users = JSON.parse(fs.readFileSync("./data/users.json"));

// Import Data
const importData = async () => {
  try {
    await User.create(users);
    console.log("Data imported successfully");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
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
