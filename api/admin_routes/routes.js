const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
const FeaturedCourses = require("../models/roadmap/FeaturedCourses");

router.post("/", (req, res, next) => {
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
