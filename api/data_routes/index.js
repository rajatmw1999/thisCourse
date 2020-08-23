const express = require("express");
const router = express.Router();
const Skill = require("../models/skills");
const { run_v1alpha1 } = require("googleapis");

router.post("/", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    let arr = [];
    for (let elm of result) {
      let skillStr = elm.nameSkill.toLowerCase();
      const regex = /%20/gi;
      skillStr = skillStr.replace(regex, " ");

      if (skillStr === req.body.skill.toLowerCase()) {
        arr.push(elm);
      }
    }
    res.status(200).json({
      data: arr.length > 0 ? arr : "Not Found",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

router.post("/category", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    let arr = [];
    for (let elm of result) {
      let categoryStr = elm.category.toLowerCase();
      const regex = /%20/gi;
      categoryStr = categoryStr.replace(regex, " ");

      if (categoryStr === req.body.category.toLowerCase()) {
        arr.push(elm);
      }
    }
    res.status(200).json({
      data: arr.length > 0 ? arr : "Not Found",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

router.post("/coursedetails", async (req, res, next) => {
  try {
    let result = await Skill.find({});
    let arr = [];
    for (let elm of result) {
      let nameSkillStr = elm.nameSkill.toLowerCase();
      const regex = /%20/gi;
      nameSkillStr = nameSkillStr.replace(regex, " ");
      if (nameSkillStr === req.body.nameSkill.toLowerCase()) {
        let test = elm.Courses.map((obj) => {
          let str = obj.NameofCourse.toLowerCase();
          str = str.replace(/[\/\\#,+()$~%.'":*?<>{}]/g, "");
          str = str.replace(/\s\s+/g, " ");
          if (str === req.body.nameofCourse.toLowerCase()) {
            arr.push(obj);
          }
        });
      }
    }
    res.status(200).json({
      data: arr.length > 0 ? arr[0] : "Not Found",
    });
  } catch (err) {
    res.status(500).json({
      error: next(err),
    });
  }
});

router.get("/all", async (req, res, next) => {
  let result = await Skill.find({});
  res.json(result);
});

module.exports = router;
