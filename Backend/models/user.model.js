const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      requird: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
