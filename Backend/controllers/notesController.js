const Note = require("../models/note.model.js");

const CreateNote = async (req, res) => {
  try {
    const { title, note } = req.body;
    const userId = req.user.id || req.user._id;
    if (!title || !note) {
      return res.status(400).json({ message: "Provide all the details" });
    }
    const newNote = new Note({ title, note, createdBy: userId });
    await newNote.save();
    return res
      .status(201)
      .json({ message: "note created successfully!", newNote });
  } catch (error) {
    return res.status(500).json({ message: "error creating the note", error });
  }
};

module.exports = { CreateNote };
