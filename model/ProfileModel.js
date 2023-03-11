const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var profile = new Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
  },
  job: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
});

var CommentModel = mongoose.model("profiles", profile);

module.exports = CommentModel;