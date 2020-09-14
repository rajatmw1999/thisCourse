const express = require("express");
const router = express.Router();

const apnacourse = require("../../middleware/apnacourse");
const arcademics = require("../../middleware/arcademics");
const bitdegree = require("../../middleware/bitdegree");
const codecademy = require("../../middleware/codeacademy");
const coursera = require("../../middleware/coursera");
const digigrad = require("../../middleware/digigrad");
const edx = require("../../middleware/edx");
const harvard = require("../../middleware/harvard");
const khanacademy = require("../../middleware/khanAcademy");
const openyale = require("../../middleware/openYale");
const skillshare = require("../../middleware/skillshare");
const udacity = require("../../middleware/udacity");
const udemy = require("../../middleware/udemy");
const verbling = require("../../middleware/verbling");

// Not Working
//   codecademy(req, res, next, "data structure", "academics");

router.get("/", (req, res, next) => {
  //   apnacourse(req, res, next, "data structure", "academics");
  //   arcademics(req, res, next, "data structure", "academics");
  //   bitdegree(req, res, next, "data structure", "academics");
  //   codecademy(req, res, next, "data structure", "academics");
  //   digigrad(req, res, next, "data structure", "academics");
  //   edx(req, res, next, "data structure", "academics");
  //   harvard(req, res, next, "data structure", "academics");
  //   khanacademy(req, res, next, "data structure", "academics");
  openyale(req, res, next, "data structure", "academics");
  // skillshare(req,res,next,'data structure','academics');
  // udacity(req,res,next,'data structure','academics');
  // verbling(req,res,next,'data structure','academics');

  // coursera(req,res,next,'data structure','academics');
  // udemy(req, res, next, "data structure", "academics");

  console.log("Inside Academics");
  res.status(200).json({
    message: "Search Results for academics !",
    // query: query.q,
  });
});

module.exports = router;
