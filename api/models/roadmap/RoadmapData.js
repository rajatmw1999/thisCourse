const mongoose = require("mongoose");

const Roadmap_Data = new mongoose.Schema({
  NameOfRoadmap: {
    type: String,
  },
  NameofAuthor: {
    type: String,
  },
  DatePublished: {
    type: String,
  },
  ImageofAuthor:{
    type:String
  },
  DescofAuthor:{
    type:String
  },
  WorkofAuthor:{
    type:String
  },
  Likes: {
    type: Number,
  },
  ImageLink: {
    type: String,
  },
  Category: {
    type: String,
  },
  Tags: {
    type:String
  },
  Text: {
    type:String,
  },
  TimelineTopics:String,
  TimelineData:String
});

module.exports = RoadmapData = mongoose.model("RoadmapData", Roadmap_Data);
