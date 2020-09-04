const express = require("express");
const router = express.Router();
const Skill = require("../models/skills");
const { run_v1alpha1 } = require("googleapis");

//ROUTE 4
//RETURN ALL THE SCRAPPED COURSES STORED IN THE DATABASE.
router.get("/all", async (req, res, next) => {
  let result = await Skill.find({});
  res.json(result);
});

//ROUTE 1
//RETREIVE ALL COURSES OF A PARTICULAR SKILL
router.get("/:skillName", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    var arr = [];
    var finalarr = [];
    arr = req.params.skillName.toLowerCase().split("-");
    for (var j = 0; j < arr.length; j++) {
      for (let elm of result) {
        let skillStr = elm.nameSkill.toLowerCase();
        if (skillStr.search(arr[j]) != -1) {
          finalarr.push(elm);
        }
      }
    }

    res.status(200).json({
      data: finalarr.length > 0 ? finalarr : "Not BOSS Found.",
      arr: req.params.skillName.toLowerCase(),
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

//ROUTE 2
//RETREIVE ALL COURSES OF A PARTICULAR CATEGORY, SKILL-WISE GROUPED.
router.get("/category/:categoryName", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    let arr = [];
    for (let elm of result) {
      let categoryStr = elm.category.toLowerCase();
      const regex = /%20/gi;
      categoryStr = categoryStr.replace(regex, " ");

      if (categoryStr === req.params.categoryName.toLowerCase()) {
        arr.push(elm);
      }
    }
    res.status(200).json({
      data: arr.length > 0 ? arr : "Not Found.",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

//ROUTE 3
//RETREIVE THE DETAILS OF A PARTICULAR COURSE OF A PARTICULAR SKILL
router.get("/coursedetails/:skillName/:courseId", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    let arr = [];
    for (let elm of result) {
      let nameSkillStr = elm.nameSkill.toLowerCase();
      const regex = /%20/gi;
      nameSkillStr = nameSkillStr.replace(regex, " ");
      if (nameSkillStr === req.params.skillName.toLowerCase()) {
        let test = elm.Courses.map((obj) => {
          let str = obj.NameofCourse.toLowerCase();
          str = str.replace(/[\/\\#,+()$~%.'":*?<>{}]/g, "");
          str = str.replace(/\s\s+/g, " ");
          if (str === req.params.courseId.toLowerCase()) {
            arr.push(obj);
          }
        });
      }
    }
    res.status(200).json({
      data: arr.length > 0 ? arr[0] : "Not Found.",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

module.exports = router;
