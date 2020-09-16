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

//NOT WORKING

// codecademy(req, res, next, "google ads", "marketing");**
// coursera(req, res, next, "google ads", "marketing");**
// codecademy(req, res, next, "facebook ads", "marketing");**
// coursera(req, res, next, "facebook ads", "marketing");**
// skillshare(req, res, next, "facebook ads", "marketing");**
// codecademy(req, res, next, "social media marketing", "marketing");**
// coursera(req, res, next, "social media marketing", "marketing");**
// codecademy(req, res, next, "email marketing", "marketing");**
// edx(req, res, next, "seo", "marketing");**
// skillshare(req, res, next, "seo", "marketing");**
// codecademy(req, res, next, "affiliate marketing", "marketing");**
// coursera(req, res, next, "affiliate marketing", "marketing");**
// codecademy(req, res, next, "content marketing", "marketing");**
// edx(req, res, next, "content marketing", "marketing");**
// codecademy(req, res, next, "freelancing", "marketing");**
// coursera(req, res, next, "freelancing", "marketing");**
// digigrad(req, res, next, "freelancing", "marketing");**
// edx(req, res, next, "freelancing", "marketing");**
// skillshare(req, res, next, "freelancing", "marketing");**
// codecademy(req, res, next, "growth hacking", "marketing");**

router.get("/", (req, res, next) => {
  // apnacourse(req, res, next, "google ads", "marketing");
  // arcademics(req, res, next, "google ads", "marketing");
  // bitdegree(req, res, next, "google ads", "marketing");
  // codecademy(req, res, next, "google ads", "marketing");**
  // coursera(req, res, next, "google ads", "marketing");**
  // digigrad(req, res, next, "google ads", "marketing");
  // edx(req, res, next, "google ads", "marketing");
  // harvard(req, res, next, "google ads", "marketing");
  // khanacademy(req, res, next, "google ads", "marketing");
  // openyale(req, res, next, "google ads", "marketing");
  // skillshare(req, res, next, "google ads", "marketing");
  // udacity(req, res, next, "google ads", "marketing");
  // udemy(req, res, next, "google ads", "marketing");
  // verbling(req, res, next, "google ads", "marketing");

  // apnacourse(req, res, next, "facebook ads", "marketing");
  // arcademics(req, res, next, "facebook ads", "marketing");
  // bitdegree(req, res, next, "facebook ads", "marketing");
  // codecademy(req, res, next, "facebook ads", "marketing");**
  // coursera(req, res, next, "facebook ads", "marketing");**
  // digigrad(req, res, next, "facebook ads", "marketing");
  // edx(req, res, next, "facebook ads", "marketing");
  // harvard(req, res, next, "facebook ads", "marketing");
  // khanacademy(req, res, next, "facebook ads", "marketing");
  // openyale(req, res, next, "facebook ads", "marketing");
  // skillshare(req, res, next, "facebook ads", "marketing");**
  // udacity(req, res, next, "facebook ads", "marketing");
  // udemy(req, res, next, "facebook ads", "marketing");
  // verbling(req, res, next, "facebook ads", "marketing");

  // apnacourse(req, res, next, "social media marketing", "marketing");
  // arcademics(req, res, next, "social media marketing", "marketing");
  // bitdegree(req, res, next, "social media marketing", "marketing");
  // codecademy(req, res, next, "social media marketing", "marketing");**
  // coursera(req, res, next, "social media marketing", "marketing");**
  // digigrad(req, res, next, "social media marketing", "marketing");
  // edx(req, res, next, "social media marketing", "marketing");
  // harvard(req, res, next, "social media marketing", "marketing");
  // khanacademy(req, res, next, "social media marketing", "marketing");
  // openyale(req, res, next, "social media marketing", "marketing");
  // skillshare(req, res, next, "social media marketing", "marketing");
  // udacity(req, res, next, "social media marketing", "marketing");
  // udemy(req, res, next, "social media marketing", "marketing");
  // verbling(req, res, next, "social media marketing", "marketing");

  // apnacourse(req, res, next, "email marketing", "marketing");
  // arcademics(req, res, next, "email marketing", "marketing");
  // bitdegree(req, res, next, "email marketing", "marketing");
  // codecademy(req, res, next, "email marketing", "marketing");**
  // coursera(req, res, next, "email marketing", "marketing");
  // digigrad(req, res, next, "email marketing", "marketing");
  // edx(req, res, next, "email marketing", "marketing");
  // harvard(req, res, next, "email marketing", "marketing");
  // khanacademy(req, res, next, "email marketing", "marketing");
  // openyale(req, res, next, "email marketing", "marketing");
  // skillshare(req, res, next, "email marketing", "marketing");
  // udacity(req, res, next, "email marketing", "marketing");
  // udemy(req, res, next, "email marketing", "marketing");
  // verbling(req, res, next, "email marketing", "marketing");

  // apnacourse(req, res, next, "seo", "marketing");
  // arcademics(req, res, next, "seo", "marketing");
  // bitdegree(req, res, next, "seo", "marketing");
  // codecademy(req, res, next, "seo", "marketing");
  // coursera(req, res, next, "seo", "marketing");
  // digigrad(req, res, next, "seo", "marketing");
  // edx(req, res, next, "seo", "marketing");**
  // harvard(req, res, next, "seo", "marketing");
  // khanacademy(req, res, next, "seo", "marketing");
  // openyale(req, res, next, "seo", "marketing");
  // skillshare(req, res, next, "seo", "marketing");**
  // udacity(req, res, next, "seo", "marketing");
  // udemy(req, res, next, "seo", "marketing");
  // verbling(req, res, next, "seo", "marketing");

  // apnacourse(req, res, next, "affiliate marketing", "marketing");
  // arcademics(req, res, next, "affiliate marketing", "marketing");
  // bitdegree(req, res, next, "affiliate marketing", "marketing");
  // codecademy(req, res, next, "affiliate marketing", "marketing");**
  // coursera(req, res, next, "affiliate marketing", "marketing");**
  // digigrad(req, res, next, "affiliate marketing", "marketing");
  // edx(req, res, next, "affiliate marketing", "marketing");
  // harvard(req, res, next, "affiliate marketing", "marketing");
  // khanacademy(req, res, next, "affiliate marketing", "marketing");
  // openyale(req, res, next, "affiliate marketing", "marketing");
  // skillshare(req, res, next, "affiliate marketing", "marketing");
  // udacity(req, res, next, "affiliate marketing", "marketing");
  // udemy(req, res, next, "affiliate marketing", "marketing");
  // verbling(req, res, next, "affiliate marketing", "marketing");

  // amlagvniihss   edyabm
  // apnacourse(req, res, next, "content marketing", "marketing");
  // arcademics(req, res, next, "content marketing", "marketing");
  // bitdegree(req, res, next, "content marketing", "marketing");
  // codecademy(req, res, next, "content marketing", "marketing");**
  // coursera(req, res, next, "content marketing", "marketing");
  // digigrad(req, res, next, "content marketing", "marketing");
  // edx(req, res, next, "content marketing", "marketing");**
  // harvard(req, res, next, "content marketing", "marketing");
  // khanacademy(req, res, next, "content marketing", "marketing");
  // openyale(req, res, next, "content marketing", "marketing");
  // skillshare(req, res, next, "content marketing", "marketing");
  // udacity(req, res, next, "content marketing", "marketing");
  // udemy(req, res, next, "content marketing", "marketing");
  // verbling(req, res, next, "content marketing", "marketing");

  // apnacourse(req, res, next, "freelancing", "marketing");
  // arcademics(req, res, next, "freelancing", "marketing");
  // bitdegree(req, res, next, "freelancing", "marketing");
  // codecademy(req, res, next, "freelancing", "marketing");**
  // coursera(req, res, next, "freelancing", "marketing");**
  // digigrad(req, res, next, "freelancing", "marketing");**
  // edx(req, res, next, "freelancing", "marketing");**
  // harvard(req, res, next, "freelancing", "marketing");
  // khanacademy(req, res, next, "freelancing", "marketing");
  // openyale(req, res, next, "freelancing", "marketing");
  // skillshare(req, res, next, "freelancing", "marketing");**
  // udacity(req, res, next, "freelancing", "marketing");
  // udemy(req, res, next, "freelancing", "marketing");
  // verbling(req, res, next, "freelancing", "marketing");

  // apnacourse(req, res, next, "growth hacking", "marketing");
  // arcademics(req, res, next, "growth hacking", "marketing");
  // bitdegree(req, res, next, "growth hacking", "marketing");
  // codecademy(req, res, next, "growth hacking", "marketing");**
  // coursera(req, res, next, "growth hacking", "marketing");
  // digigrad(req, res, next, "growth hacking", "marketing");
  // edx(req, res, next, "growth hacking", "marketing");
  // harvard(req, res, next, "growth hacking", "marketing");
  // khanacademy(req, res, next, "growth hacking", "marketing");
  // openyale(req, res, next, "growth hacking", "marketing");
  // skillshare(req, res, next, "growth hacking", "marketing");
  // udacity(req, res, next, "growth hacking", "marketing");
  // udemy(req, res, next, "growth hacking", "marketing");
  // verbling(req, res, next, "growth hacking", "marketing");

  console.log("Inside Marketing");
  res.status(200).json({
    message: "Search Results for Marketing !",
    // query: query.q,
  });
});

module.exports = router;
