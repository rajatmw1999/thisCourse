const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const FeaturedCourses = require("../models/roadmap/FeaturedCourses");

router.post("/addfeaturedcourses", (req, res, next) => {
  const featuredcourse = new FeaturedCourses({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  featuredcourse
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /featuredcourses",
        createdFeaturedCourse: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/featuredCoursesById", (req, res) => {
  const id = req.body.id;
  RoadmapData.find({ _id: id })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({
            message: "No valid entry found for provided FeaturedCourses",
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
