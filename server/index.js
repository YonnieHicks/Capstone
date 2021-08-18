const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Import ^^^^^
// Instantiation
const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// Executing the Express (This must be last)
const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Listening on port ${port}`));
