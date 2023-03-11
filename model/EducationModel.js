const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var educationSchema = new Schema({
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  school: {
    type: String,
  },
  description: {
    type: String,
  },
});

var EducationModel = mongoose.model("educations", educationSchema);
module.exports = EducationModel;