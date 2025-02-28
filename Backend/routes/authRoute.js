const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");

router.post("/register", authController.createUser);
router.post("/login", authController.Login);
module.exports = router;
