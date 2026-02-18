const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  designation: String,
  role: {
    type: String,
    default: "employee",
  },
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
