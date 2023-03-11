const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var experience = new Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  company: {
    type: String,
  },
  desc: {
    type: String,
  },
});

var ExperienceModel = mongoose.model("experiences", experience);
module.exports = ExperienceModel;