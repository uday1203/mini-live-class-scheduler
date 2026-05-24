const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  title: String,
  description: String,
  startTime: Date,
  endTime: Date,
  students: [String],
  meetLink: String,
  eventId: String,
});

module.exports = mongoose.model("Class", classSchema);