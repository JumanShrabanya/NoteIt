const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
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

module.exports = { createUser };
