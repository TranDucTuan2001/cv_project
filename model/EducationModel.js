const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var educationSchema = new Schema({
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
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