let Education = require("../model/EducationModel");
let Experience = require("../model/ExperienceModel");
let Profile = require("../model/ProfileModel");
let Skill = require("../model/SkillModel");

async function index(req, res) {
  let skills = await Skill.find();
  let education = await Education.findOne();
  let profile = await Profile.findOne();
  let experiences = await Experience.find();
  res.render("index", {
    title: "MyCv",
    skills: skills,
    education: education,
    profile: profile,
    experiences: experiences,
  });
}
module.exports = {
  index,
};