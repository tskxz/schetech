const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  password: { type: String, required: true, minLength: 8, select: false },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
    select: false,
  },
  active: { type: Boolean, default: true, select: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
