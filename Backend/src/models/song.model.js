const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Song url is required"],
  },
  posterUrl: {
    type: String,
    required: [true, "Poster url is required"],
  },
  title: {
    type: String,
    required: [true, "Song title is required"],
  },
  mood: {
    type: String,
    enum: {
      value: ["sad", "happy", "surprised"],
      message: "Enum this is"
    },
  },
});

const songModel = mongoose.model("songs", songSchema);

module.exports = songModel;
