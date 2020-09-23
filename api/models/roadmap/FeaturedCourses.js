const mongoose = require("mongoose");

const Featured_Courses = new mongoose.Schema({
  name: {
    type: String,
  },
  link: {
    type: String,
  },
  company: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  numberOfHours: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: String,
  },
  priceDiscount:{
    type:String,
  },
  duration: {
    type: String,
  },
  nameOfSkill: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = FeaturedCourses = mongoose.model(
  "FeaturedCourses",
  Featured_Courses
);
