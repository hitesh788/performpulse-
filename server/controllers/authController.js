// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // Generate Token
// const generateToken = (id, role) => {
//   return jwt.sign(
//     { id, role },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// };

// // ================= REGISTER =================
// exports.registerUser = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       password,
//       role,
//       department,
//       designation
//     } = req.body;

//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({
//         message: "User already exists",
//       });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       department,
//       designation,
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       token: generateToken(user._id, user.role),
//       role: user.role,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // ================= LOGIN =================
// exports.login = async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         message: "User not found",
//       });
//     }

//     // Password check
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({
//         message: "Invalid password",
//       });
//     }

//     // ✅ Role validation
//     if (user.role !== role) {
//       return res.status(403).json({
//         message: "You cannot login with this role",
//       });
//     }

//     res.status(200).json({
//       token: generateToken(user._id, user.role),
//       role: user.role,
//       name: user.name,
//       department: user.department,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
