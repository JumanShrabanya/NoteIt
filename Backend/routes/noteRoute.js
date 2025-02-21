const express = require("express");
const router = express.Router();
const getToken = require("../middleware/getToken.js");
const notesController = require("../controllers/notesController.js");

router.post("/createNote", getToken, notesController.CreateNote);
router.get("/", getToken, notesController.ShowNotes);

module.exports = router;
