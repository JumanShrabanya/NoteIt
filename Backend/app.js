const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const noteRoute = require("./routes/noteRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/notes", noteRoute);

module.exports = app;
