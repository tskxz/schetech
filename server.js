const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

// Connect to the DB
mongoose.connect(process.env.MONGO_URI).then((conn) => {
  console.log("Connected to MongoDB");
});

const app = require("./app");

// Starting the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
