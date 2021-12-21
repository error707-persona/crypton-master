const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, { autoCreate: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to Atlas: ", err.message));

// Routes

// Error Handler
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

// Hosting server
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server hosted at http://localhost:${port}`)
);
