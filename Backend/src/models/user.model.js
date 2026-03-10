const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username must be unique"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
});

// Runs BEFORE a user document is saved to the database.
// Common use cases: hashing passwords, validating or modifying data (e.g., formatting username).
// userSchema.pre("save", function (next) {});

// Runs AFTER a user document has been successfully saved to the database.
// Common use cases: logging activity, sending welcome emails, triggering notifications.
// userSchema.post("save", function (doc, next) {});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
