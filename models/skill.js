const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSkill = new Schema({
  name: {
    type: String,
  },
  percent: {
    type: String,
  },
});

var SkillModel = mongoose.model("skills", userSkill);

module.exports = SkillModel;