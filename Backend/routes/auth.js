const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const handleResponse = require("../services/handleResponse");
const JWT_SECRET = "akshat@09";



// Route 1 - Create User
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return handleResponse(res, false, null, result.array());
      }

      const { name, email, password, role, location, phone } = req.body;

      let user = await User.findOne({ email });

      if (user) {
        return handleResponse(res, false, null, "User already exists");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        location,
        phone,
      });

      const data = {
        id: user.id,
        role: user.role,
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      return handleResponse(res, true, { authtoken });
    } catch (error) {
      console.error(error);
      return handleResponse(res, false, null, "Internal error occurred");
    }
  }
);

// Route 2 - User Login
router.post(
  "/login",
  [
    body("email", "Invalid email").isEmail(),
    body("password", "Can't be blank").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return handleResponse(res, false, null, errors.array());
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return handleResponse(res, false, null, "Invalid credentials");
      }

      const data = {
        id: user.id,
        role: user.role,
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      return handleResponse(res, true, { authtoken });
    } catch (error) {
      console.error(error);
      return handleResponse(res, false, null, "Internal error occurred");
    }
  }
);

// Route 3 - Fetch User
router.get("/fetchuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user;
    const user = await User.findById(userId.id).select("-password");
    return handleResponse(res, true, { user });
  } catch (error) {
    console.error({ error });
    return handleResponse(res, false, null, "Internal error occurred");
  }
});

router.get("/fetch-all-user", fetchuser, async (req, res) => {
  try {
    const userId = req.user;
    const user = await User.find().select("-password");
    return handleResponse(res, true, { user });
  } catch (error) {
    console.error({ error });
    return handleResponse(res, false, null, "Internal error occurred");
  }
})


module.exports = router;
