const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

const RoadmapData = require("../models/roadmap/RoadmapData");

//ROUTE 1
router.post("/coursesByCategory", (req, res) => {
  const category = req.body.Category;
  RoadmapData.find({ Category: category })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided Category" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// ROUTE 2
router.post("/coursesByNameOfRoapmap", (req, res) => {
  const nameOfRoapmap = req.body.NameofRoapmap;
  RoadmapData.find({ NameofRoapmap: nameOfRoapmap })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided NameofRoapmap" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// ROUTE 3
router.post("/coursesByTags", (req, res) => {
  const tags = req.body.Tags;
  RoadmapData.find({ Tags: { $all: tags } })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided NameofRoapmap" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//ROUTE 4
router.patch("/likesOfNameofRoapmap", (req, res) => {
  const nameOfRoapmap = req.body.NameofRoapmap;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  RoadmapData.update({ NameofRoapmap: nameOfRoapmap }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
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
