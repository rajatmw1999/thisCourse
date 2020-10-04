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
  Timeline: [
    {
      name: {
        type: String,
      },
      desc: {
        type: String,
      },
      time: {
        type: Number,
      },
    },
  ],
});

module.exports = RoadmapData = mongoose.model("RoadmapData", Roadmap_Data);
