const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var experience = new Schema({
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  company: {
    type: String,
  },
  desc: {
    type: String,
  },
  name:{
    type: String
  },
});

var ExperienceModel = mongoose.model("experiences", experience);
module.exports = ExperienceModel;