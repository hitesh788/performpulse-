const express = require("express");
const router = express.Router();

const {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/EmployeeController");

// ADD employee
router.post("/", addEmployee);

// GET all employees
router.get("/", getEmployees);

// UPDATE employee
router.put("/:id", updateEmployee);

// DELETE employee
router.delete("/:id", deleteEmployee);

module.exports = router;
