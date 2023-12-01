const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    default: null, // Default value is set to null, making it optional
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming User model is used for employees and managers
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", userSchema);

module.exports = User;
