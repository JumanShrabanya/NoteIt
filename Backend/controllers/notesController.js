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

const ShowNotes = async (req, res) => {
  try {
    const userId = req.user._id;
    const notes = await Note.find({ createdBy: userId });
    if (notes.length !== 0) {
      return res.status(201).json({ message: "Available notes", notes });
    } else {
      return res.status(404).json({ message: "No notes created till now!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error getting the notes", error });
  }
};

module.exports = { CreateNote, ShowNotes };
