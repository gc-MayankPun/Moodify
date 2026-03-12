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
      values: ["sad", "happy", "surprised"],
      message: "Mood must be sad. happy or surprised"
    },
  },
});

const songModel = mongoose.model("songs", songSchema);

module.exports = songModel;
