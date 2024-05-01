const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema({
  rank: { type: Number, required: true },
  name: { type: String, required: true },
  played: { type: Number, required: true },
  score: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Teams", teamsSchema);
