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

router.get("/", (req, res, next) => {
  //   apnacourse(req, res, next, "google ads", "academics");
  //   arcademics(req, res, next, "google ads", "academics");
  //   bitdegree(req, res, next, "google ads", "academics");
  //   codecademy(req, res, next, "google ads", "academics");
  // coursera(req,res,next,'google ads','academics');
  //   digigrad(req, res, next, "google ads", "academics");
  //   edx(req, res, next, "google ads", "academics");
  //   harvard(req, res, next, "google ads", "academics");
  //   khanacademy(req, res, next, "google ads", "academics");
  //   openyale(req, res, next, "google ads", "academics");
  //   skillshare(req, res, next, "google ads", "academics");
  //   udacity(req, res, next, "google ads", "academics");
  // udemy(req, res, next, "google ads", "academics");
  //   verbling(req, res, next, "google ads", "academics");

  //   apnacourse(req, res, next, "facebook ads", "academics");
  //   arcademics(req, res, next, "facebook ads", "academics");
  //   bitdegree(req, res, next, "facebook ads", "academics");
  //   codecademy(req, res, next, "facebook ads", "academics");
  // coursera(req,res,next,'facebook ads','academics');
  //   digigrad(req, res, next, "facebook ads", "academics");
  //   edx(req, res, next, "facebook ads", "academics");
  //   harvard(req, res, next, "facebook ads", "academics");
  //   khanacademy(req, res, next, "facebook ads", "academics");
  //   openyale(req, res, next, "facebook ads", "academics");
  //   skillshare(req, res, next, "facebook ads", "academics");
  //   udacity(req, res, next, "facebook ads", "academics");
  // udemy(req, res, next, "facebook ads", "academics");
  //   verbling(req, res, next, "facebook ads", "academics");

  //   apnacourse(req, res, next, "social media marketing", "academics");
  //   arcademics(req, res, next, "social media marketing", "academics");
  //   bitdegree(req, res, next, "social media marketing", "academics");
  //   codecademy(req, res, next, "social media marketing", "academics");
  // coursera(req,res,next,'social media marketing','academics');
  //   digigrad(req, res, next, "social media marketing", "academics");
  //   edx(req, res, next, "social media marketing", "academics");
  //   harvard(req, res, next, "social media marketing", "academics");
  //   khanacademy(req, res, next, "social media marketing", "academics");
  //   openyale(req, res, next, "social media marketing", "academics");
  //   skillshare(req, res, next, "social media marketing", "academics");
  //   udacity(req, res, next, "social media marketing", "academics");
  // udemy(req, res, next, "social media marketing", "academics");
  //   verbling(req, res, next, "social media marketing", "academics");

  //   apnacourse(req, res, next, "email marketing", "academics");
  //   arcademics(req, res, next, "email marketing", "academics");
  //   bitdegree(req, res, next, "email marketing", "academics");
  //   codecademy(req, res, next, "email marketing", "academics");
  // coursera(req,res,next,'email marketing','academics');
  //   digigrad(req, res, next, "email marketing", "academics");
  //   edx(req, res, next, "email marketing", "academics");
  //   harvard(req, res, next, "email marketing", "academics");
  //   khanacademy(req, res, next, "email marketing", "academics");
  //   openyale(req, res, next, "email marketing", "academics");
  //   skillshare(req, res, next, "email marketing", "academics");
  //   udacity(req, res, next, "email marketing", "academics");
  // udemy(req, res, next, "email marketing", "academics");
  //   verbling(req, res, next, "email marketing", "academics");

  //   apnacourse(req, res, next, "seo", "academics");
  //   arcademics(req, res, next, "seo", "academics");
  //   bitdegree(req, res, next, "seo", "academics");
  //   codecademy(req, res, next, "seo", "academics");
  // coursera(req,res,next,'seo','academics');
  //   digigrad(req, res, next, "seo", "academics");
  //   edx(req, res, next, "seo", "academics");
  //   harvard(req, res, next, "seo", "academics");
  //   khanacademy(req, res, next, "seo", "academics");
  //   openyale(req, res, next, "seo", "academics");
  //   skillshare(req, res, next, "seo", "academics");
  //   udacity(req, res, next, "seo", "academics");
  // udemy(req, res, next, "seo", "academics");
  //   verbling(req, res, next, "seo", "academics");

  //   apnacourse(req, res, next, "affiliate marketing", "academics");
  //   arcademics(req, res, next, "affiliate marketing", "academics");
  //   bitdegree(req, res, next, "affiliate marketing", "academics");
  //   codecademy(req, res, next, "affiliate marketing", "academics");
  // coursera(req,res,next,'affiliate marketing','academics');
  //   digigrad(req, res, next, "affiliate marketing", "academics");
  //   edx(req, res, next, "affiliate marketing", "academics");
  //   harvard(req, res, next, "affiliate marketing", "academics");
  //   khanacademy(req, res, next, "affiliate marketing", "academics");
  //   openyale(req, res, next, "affiliate marketing", "academics");
  //   skillshare(req, res, next, "affiliate marketing", "academics");
  //   udacity(req, res, next, "affiliate marketing", "academics");
  // udemy(req, res, next, "affiliate marketing", "academics");
  //   verbling(req, res, next, "affiliate marketing", "academics");

  //   apnacourse(req, res, next, "content marketing", "academics");
  //   arcademics(req, res, next, "content marketing", "academics");
  //   bitdegree(req, res, next, "content marketing", "academics");
  //   codecademy(req, res, next, "content marketing", "academics");
  //   coursera(req,res,next,'content marketing','academics');
  //   digigrad(req, res, next, "content marketing", "academics");
  //   edx(req, res, next, "content marketing", "academics");
  //   harvard(req, res, next, "content marketing", "academics");
  //   khanacademy(req, res, next, "content marketing", "academics");
  //   openyale(req, res, next, "content marketing", "academics");
  //   skillshare(req, res, next, "content marketing", "academics");
  //   udacity(req, res, next, "content marketing", "academics");
  // udemy(req, res, next, "content marketing", "academics");
  //   verbling(req, res, next, "content marketing", "academics");

  //   apnacourse(req, res, next, "freelancing", "academics");
  //   arcademics(req, res, next, "freelancing", "academics");
  //   bitdegree(req, res, next, "freelancing", "academics");
  //   codecademy(req, res, next, "freelancing", "academics");
  // coursera(req,res,next,'freelancing','academics');
  //   digigrad(req, res, next, "freelancing", "academics");
  //   edx(req, res, next, "freelancing", "academics");
  //   harvard(req, res, next, "freelancing", "academics");
  //   khanacademy(req, res, next, "freelancing", "academics");
  //   openyale(req, res, next, "freelancing", "academics");
  //   skillshare(req, res, next, "freelancing", "academics");
  //   udacity(req, res, next, "freelancing", "academics");
  // udemy(req, res, next, "freelancing", "academics");
  //   verbling(req, res, next, "freelancing", "academics");

  //   apnacourse(req, res, next, "growth hacking", "academics");
  //   arcademics(req, res, next, "growth hacking", "academics");
  //   bitdegree(req, res, next, "growth hacking", "academics");
  //   codecademy(req, res, next, "growth hacking", "academics");
  // coursera(req,res,next,'growth hacking','academics');
  //   digigrad(req, res, next, "growth hacking", "academics");
  //   edx(req, res, next, "growth hacking", "academics");
  //   harvard(req, res, next, "growth hacking", "academics");
  //   khanacademy(req, res, next, "growth hacking", "academics");
  //   openyale(req, res, next, "growth hacking", "academics");
  //   skillshare(req, res, next, "growth hacking", "academics");
  //   udacity(req, res, next, "growth hacking", "academics");
  // udemy(req, res, next, "growth hacking", "academics");
  //   verbling(req, res, next, "growth hacking", "academics");

  console.log("Inside Marketing");
  res.status(200).json({
    message: "Search Results for Marketing !",
    // query: query.q,
  });
});

module.exports = router;
