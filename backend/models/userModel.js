const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    // Account Login
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Reset Password
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

// Hashing Password
userSchema.pre("save", function (next) {
  let user = this;
  let SALT_FACTOR = 10;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Compare Password
userSchema.methods.comparePassword = function (userPassword, next) {
  bcrypt.compare(userPassword, this.password, (err, isMatch) => {
    if (err) return next(err, null);
    callback(null, isMatch);
  });
};

// User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
