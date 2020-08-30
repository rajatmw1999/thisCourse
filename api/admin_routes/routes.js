const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FeaturedCourses = require("../models/roadmap/FeaturedCourses");

//Route 1
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

//Route 2
router.post("/featuredCoursesById", (req, res) => {
  const id = req.body.id;
  FeaturedCourses.find({ _id: id })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided FeaturedCourses",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//Route 3
router.post("/featuredCoursesByCategorySkill", (req, res) => {
  const category = req.body.category;
  const skillname = req.body.skillName;
  FeaturedCourses.find({ NameOfSkill: skillname, Category: category })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided FeaturedCourses",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//Route 4
router.delete("/deleteFeaturedCoursesById", (req, res, next) => {
  const id = req.body.productId;
  FeaturedCourses.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
