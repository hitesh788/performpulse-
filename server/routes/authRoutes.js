const express = require("express");
const router = express.Router();

const {
  registerUser,
  login,
} = require("../controllers/authController");
module.exports = router;
