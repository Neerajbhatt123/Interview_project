const mongoose = require("mongoose");

const testScoreSchema = new mongoose.Schema({
  round1: {
    type: Number,
    required: true,
  },
  round2: {
    type: Number,
    required: true,
  },
  round3: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("TestScore", testScoreSchema);
