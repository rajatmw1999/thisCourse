const mongoose = require("mongoose");

const Featured_Courses = new mongoose.Schema({
  Name: {
    type: String,
  },
  Link: {
    type: URL,
  },
  Company: {
    type: String,
  },
  ImageURL: {
    type: URL,
  },
  NumberOfHours: {
    type: Number,
  },
  Description: {
    type: String,
  },
  Price: {
    type: Number,
  },
  Duration: {
    type: Number,
  },
  NameOfSkill: {
    type: String,
  },
  Category: {
    type: String,
  },
});

module.exports = FeaturedCourses = mongoose.model(
  "FeaturedCourses",
  Featured_Courses
);
