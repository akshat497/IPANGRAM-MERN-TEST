const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for managers
    required: true,
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming you have a User model for employees
    },
    
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
