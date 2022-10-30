const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const entriesRoute = require("./routes/entries");
app.use("/entries", entriesRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB!");
});

app.listen(3000);
