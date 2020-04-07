const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const cors = require("cors");
const path = require("path");

// Import Routes
const barangaysRoute = require("./routes/barangays");
const muncitiesRoute = require("./routes/muncities");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/barangays", barangaysRoute);
app.use("/muncities", muncitiesRoute);

// Middleware

// app.use("/posts", () => {
//   console.log("This is a middleware running");
// });

// Connect to DB

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "ramdam" },
  () => {
    console.log("Connected to DB.");
  }
);

// Routes
app.get("/", (req, res) => {
  res.send("Home");
});

// app.get("/posts", (req, res) => {
//   res.send("Posts");
// });

app.listen(3000);
