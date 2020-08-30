const mongoose = require("mongoose");

const Tags_Of_Roadmaps = new mongoose.Schema({
  TagName: {
    type: String,
  },
  Reference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoadmapData",
  },
});

module.exports = TagsOfRoadmaps = mongoose.model(
  "TagsOfRoadmaps",
  Tags_Of_Roadmaps
);
