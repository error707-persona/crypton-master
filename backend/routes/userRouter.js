const express = require("express");
const mongoose = require("mongoose");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");
const { generateToken, isAuth } = require("../utils.js");

const userRouter = express.Router();

// Sign in
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const password = req.body.password;
    const user = await User.findOne({ email: req.body.email });

    if (user)
      if (bcrypt.compareSync(password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user),
        });
        return;
      }

    res.status(401).send({ message: "Invalid email or password." });
  })
);

// Sign up
userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    // Create User
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Save user
    const createdUser = await user.save();

    // Send details and jwt token
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      token: generateToken(createdUser),
    });
  })
);

module.exports = userRouter;
