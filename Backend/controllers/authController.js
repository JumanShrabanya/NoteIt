const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all the details" });
    }
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();
    return res.status(201).json({ message: "User created succefully!", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "failed to create the user", error });
  }
};

// for the login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password!" });
    }

    // Find user by email
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    // Compare password
    const correctPassword = await bcrypt.compare(
      password,
      existedUser.password
    );
    if (!correctPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: existedUser._id, email: existedUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res
      .status(200)
      .json({ message: "Login successful!", token, user: existedUser });
  } catch (error) {
    console.error("Error logging in:", error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "An error occurred while logging in." });
  }
};

module.exports = { createUser, Login };
