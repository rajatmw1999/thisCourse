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
//   codecademy(req, res, next, "algorithms", "academics");
//   harvard(req, res, next, "algorithms", "academics");
//   bitdegree(req, res, next, "electronics", "academics");
//   codecademy(req, res, next, "electronics", "academics");
//   bitdegree(req, res, next, "robotics", "academics");
//   codecademy(req, res, next, "robotics", "academics");
//   codecademy(req, res, next, "structural engineering", "academics");
//   codecademy(req, res, next, "mechanical engineering", "academics");
//   skillshare(req, res, next, "mechanical engineering", "academics");
// bitdegree(req, res, next, "calculus", "academics");
// codecademy(req, res, next, "calculus", "academics");
// skillshare(req, res, next, "calculus", "academics");
// udacity(req, res, next, "calculus", "academics");
// bitdegree(req, res, next, "trigonometry", "academics");
// codecademy(req, res, next, "trigonometry", "academics");
// udacity(req, res, next, "trigonometry", "academics")
// bitdegree(req, res, next, "geometry", "academics");
// codecademy(req, res, next, "geometry", "academics");
// udacity(req, res, next, "geometry", "academics");
// bitdegree(req, res, next, "algebra", "academics");
// codecademy(req, res, next, "algebra", "academics");
// codecademy(req, res, next, "discrete math", "academics");
// bitdegree(req, res, next, "physics", "academics");
// codecademy(req, res, next, "physics", "academics");
// bitdegree(req, res, next, "biology", "academics");
// codecademy(req, res, next, "biology", "academics");
// coursera(req, res, next, "biology", "academics");
// edx(req, res, next, "biology", "academics");
// harvard(req, res, next, "biology", "academics");
// bitdegree(req, res, next, "chemistry", "academics");
// codecademy(req, res, next, "chemistry", "academics");
// edx(req, res, next, "chemistry", "academics");
// udacity(req, res, next, "chemistry", "academics");
// bitdegree(req, res, next, "anatomy", "academics");
// codecademy(req, res, next, "anatomy", "academics");
// codecademy(req, res, next, "astronomy", "academics");
// codecademy(req, res, next, "research paper writing", "academics");
// coursera(req, res, next, "research paper writing", "academics");
// udacity(req, res, next, "research paper writing", "academics");
// codecademy(req, res, next, "english", "academics");
// skillshare(req, res, next, "english", "academics");
// bitdegree(req, res, next, "german", "academics");
// codecademy(req, res, next, "german", "academics");
// bitdegree(req, res, next, "spanish", "academics");
// codecademy(req, res, next, "spanish", "academics");
// codecademy(req, res, next, "france", "academics");
// codecademy(req, res, next, "japanese", "academics");
// coursera(req, res, next, "japanese", "academics");

router.get("/", (req, res, next) => {
  //   apnacourse(req, res, next, "data structure", "academics");
  //   arcademics(req, res, next, "data structure", "academics");
  //   bitdegree(req, res, next, "data structure", "academics");
  //   codecademy(req, res, next, "data structure", "academics");
  // coursera(req,res,next,'data structure','academics');
  //   digigrad(req, res, next, "data structure", "academics");
  //   edx(req, res, next, "data structure", "academics");
  //   harvard(req, res, next, "data structure", "academics");
  //   khanacademy(req, res, next, "data structure", "academics");
  //   openyale(req, res, next, "data structure", "academics");
  //   skillshare(req, res, next, "data structure", "academics");
  //   udacity(req, res, next, "data structure", "academics");
  // udemy(req, res, next, "data structure", "academics");
  //   verbling(req, res, next, "data structure", "academics");

  //   apnacourse(req, res, next, "algorithms", "academics");
  //   arcademics(req, res, next, "algorithms", "academics");
  //   bitdegree(req, res, next, "algorithms", "academics");
  //   codecademy(req, res, next, "algorithms", "academics");
  //   coursera(req, res, next, "algorithms", "academics");
  //   digigrad(req, res, next, "algorithms", "academics");
  //   edx(req, res, next, "algorithms", "academics");
  //   harvard(req, res, next, "algorithms", "academics");
  //   khanacademy(req, res, next, "algorithms", "academics");
  //   openyale(req, res, next, "algorithms", "academics");
  //   skillshare(req, res, next, "algorithms", "academics");
  //   udacity(req, res, next, "algorithms", "academics");
  //   udemy(req, res, next, "algorithms", "academics");
  //   verbling(req, res, next, "algorithms", "academics");

  //   apnacourse(req, res, next, "electronics", "academics");
  //   arcademics(req, res, next, "electronics", "academics");
  //   bitdegree(req, res, next, "electronics", "academics");
  //   codecademy(req, res, next, "electronics", "academics");
  //   coursera(req, res, next, "electronics", "academics");
  //   digigrad(req, res, next, "electronics", "academics");
  //   edx(req, res, next, "electronics", "academics");
  //   harvard(req, res, next, "electronics", "academics");
  //   khanacademy(req, res, next, "electronics", "academics");
  //   openyale(req, res, next, "electronics", "academics");
  //   skillshare(req, res, next, "electronics", "academics");
  //   udacity(req, res, next, "electronics", "academics");
  //   udemy(req, res, next, "electronics", "academics");
  //   verbling(req, res, next, "electronics", "academics");

  //   apnacourse(req, res, next, "robotics", "academics");
  //   arcademics(req, res, next, "robotics", "academics");
  //   bitdegree(req, res, next, "robotics", "academics");
  //   codecademy(req, res, next, "robotics", "academics");
  //   coursera(req, res, next, "robotics", "academics");
  //   digigrad(req, res, next, "robotics", "academics");
  //   edx(req, res, next, "robotics", "academics");
  //   harvard(req, res, next, "robotics", "academics");
  //   khanacademy(req, res, next, "robotics", "academics");
  //   openyale(req, res, next, "robotics", "academics");
  //   skillshare(req, res, next, "robotics", "academics");
  //   udacity(req, res, next, "robotics", "academics");
  //   udemy(req, res, next, "robotics", "academics");
  //   verbling(req, res, next, "robotics", "academics");

  //   apnacourse(req, res, next, "structural engineering", "academics");
  //   arcademics(req, res, next, "structural engineering", "academics");
  //   bitdegree(req, res, next, "structural engineering", "academics");
  //   codecademy(req, res, next, "structural engineering", "academics");
  //   coursera(req, res, next, "structural engineering", "academics");
  //   digigrad(req, res, next, "structural engineering", "academics");
  //   edx(req, res, next, "structural engineering", "academics");
  //   harvard(req, res, next, "structural engineering", "academics");
  //   khanacademy(req, res, next, "structural engineering", "academics");
  //   openyale(req, res, next, "structural engineering", "academics");
  //   skillshare(req, res, next, "structural engineering", "academics");
  //   udacity(req, res, next, "structural engineering", "academics");
  //   udemy(req, res, next, "structural engineering", "academics");
  //   verbling(req, res, next, "structural engineering", "academics");

  //   apnacourse(req, res, next, "mechanical engineering", "academics");
  //   arcademics(req, res, next, "mechanical engineering", "academics");
  //   bitdegree(req, res, next, "mechanical engineering", "academics");
  //   codecademy(req, res, next, "mechanical engineering", "academics");
  //   coursera(req, res, next, "mechanical engineering", "academics");
  //   digigrad(req, res, next, "mechanical engineering", "academics");
  //   edx(req, res, next, "mechanical engineering", "academics");
  //   harvard(req, res, next, "mechanical engineering", "academics");
  //   khanacademy(req, res, next, "mechanical engineering", "academics");
  //   openyale(req, res, next, "mechanical engineering", "academics");
  //   skillshare(req, res, next, "mechanical engineering", "academics");
  // udacity(req, res, next, "mechanical engineering", "academics");
  // udemy(req, res, next, "mechanical engineering", "academics");
  // verbling(req, res, next, "mechanical engineering", "academics");

  // apnacourse(req, res, next, "calculus", "academics");
  // arcademics(req, res, next, "calculus", "academics");
  // bitdegree(req, res, next, "calculus", "academics");
  // codecademy(req, res, next, "calculus", "academics");
  // coursera(req, res, next, "calculus", "academics");
  // digigrad(req, res, next, "calculus", "academics");
  // edx(req, res, next, "calculus", "academics");
  // harvard(req, res, next, "calculus", "academics");
  // khanacademy(req, res, next, "calculus", "academics");
  // openyale(req, res, next, "calculus", "academics");
  // skillshare(req, res, next, "calculus", "academics");
  // udacity(req, res, next, "calculus", "academics");
  // udemy(req, res, next, "calculus", "academics");
  // verbling(req, res, next, "calculus", "academics");

  // apnacourse(req, res, next, "trigonometry", "academics");
  // arcademics(req, res, next, "trigonometry", "academics");
  // bitdegree(req, res, next, "trigonometry", "academics");
  // codecademy(req, res, next, "trigonometry", "academics");
  // coursera(req, res, next, "trigonometry", "academics");
  // digigrad(req, res, next, "trigonometry", "academics");
  // edx(req, res, next, "trigonometry", "academics");
  // harvard(req, res, next, "trigonometry", "academics");
  // khanacademy(req, res, next, "trigonometry", "academics");
  // openyale(req, res, next, "trigonometry", "academics");
  // skillshare(req, res, next, "trigonometry", "academics");
  // udacity(req, res, next, "trigonometry", "academics");
  // udemy(req, res, next, "trigonometry", "academics");
  // verbling(req, res, next, "trigonometry", "academics");

  // apnacourse(req, res, next, "geometry", "academics");
  // arcademics(req, res, next, "geometry", "academics");
  // bitdegree(req, res, next, "geometry", "academics");
  // codecademy(req, res, next, "geometry", "academics");
  // coursera(req, res, next, "geometry", "academics");
  // digigrad(req, res, next, "geometry", "academics");
  // edx(req, res, next, "geometry", "academics");
  // harvard(req, res, next, "geometry", "academics");
  // khanacademy(req, res, next, "geometry", "academics");
  // openyale(req, res, next, "geometry", "academics");
  // skillshare(req, res, next, "geometry", "academics");
  // udacity(req, res, next, "geometry", "academics");
  // udemy(req, res, next, "geometry", "academics");
  // verbling(req, res, next, "geometry", "academics");

  // apnacourse(req, res, next, "algebra", "academics");
  // arcademics(req, res, next, "algebra", "academics");
  // bitdegree(req, res, next, "algebra", "academics");
  // codecademy(req, res, next, "algebra", "academics");
  // coursera(req, res, next, "algebra", "academics");
  // digigrad(req, res, next, "algebra", "academics");
  // edx(req, res, next, "algebra", "academics");
  // harvard(req, res, next, "algebra", "academics");
  // khanacademy(req, res, next, "algebra", "academics");
  // openyale(req, res, next, "algebra", "academics");
  // skillshare(req, res, next, "algebra", "academics");
  // udacity(req, res, next, "algebra", "academics");
  // udemy(req, res, next, "algebra", "academics");
  // verbling(req, res, next, "algebra", "academics");

  // apnacourse(req, res, next, "discrete math", "academics");
  // arcademics(req, res, next, "discrete math", "academics");
  // bitdegree(req, res, next, "discrete math", "academics");
  // codecademy(req, res, next, "discrete math", "academics");**
  // coursera(req, res, next, "discrete math", "academics");
  // digigrad(req, res, next, "discrete math", "academics");
  // edx(req, res, next, "discrete math", "academics");
  // harvard(req, res, next, "discrete math", "academics");
  // khanacademy(req, res, next, "discrete math", "academics");
  // openyale(req, res, next, "discrete math", "academics");
  // skillshare(req, res, next, "discrete math", "academics");
  // udacity(req, res, next, "discrete math", "academics");
  // udemy(req, res, next, "discrete math", "academics");
  // verbling(req, res, next, "discrete math", "academics");

  // apnacourse(req, res, next, "physics", "academics");
  // arcademics(req, res, next, "physics", "academics");
  // bitdegree(req, res, next, "physics", "academics");**
  // codecademy(req, res, next, "physics", "academics");**
  // coursera(req, res, next, "physics", "academics");
  // digigrad(req, res, next, "physics", "academics");
  // edx(req, res, next, "physics", "academics");
  // harvard(req, res, next, "physics", "academics");
  // khanacademy(req, res, next, "physics", "academics");
  // openyale(req, res, next, "physics", "academics");
  // skillshare(req, res, next, "physics", "academics");
  // udacity(req, res, next, "physics", "academics");
  // udemy(req, res, next, "physics", "academics");
  // verbling(req, res, next, "physics", "academics");

  // apnacourse(req, res, next, "biology", "academics");
  // arcademics(req, res, next, "biology", "academics");
  // bitdegree(req, res, next, "biology", "academics");**
  // codecademy(req, res, next, "biology", "academics");**
  // coursera(req, res, next, "biology", "academics");**
  // digigrad(req, res, next, "biology", "academics");
  // edx(req, res, next, "biology", "academics");**
  // harvard(req, res, next, "biology", "academics");**
  // khanacademy(req, res, next, "biology", "academics");
  // openyale(req, res, next, "biology", "academics");
  // skillshare(req, res, next, "biology", "academics");
  // udacity(req, res, next, "biology", "academics");
  // udemy(req, res, next, "biology", "academics");
  // verbling(req, res, next, "biology", "academics");

  // apnacourse(req, res, next, "chemistry", "academics");
  // arcademics(req, res, next, "chemistry", "academics");
  // bitdegree(req, res, next, "chemistry", "academics");**
  // codecademy(req, res, next, "chemistry", "academics");**
  // coursera(req, res, next, "chemistry", "academics");
  // digigrad(req, res, next, "chemistry", "academics");
  // edx(req, res, next, "chemistry", "academics");**
  // harvard(req, res, next, "chemistry", "academics");
  // khanacademy(req, res, next, "chemistry", "academics");
  // openyale(req, res, next, "chemistry", "academics");
  // skillshare(req, res, next, "chemistry", "academics");
  // udacity(req, res, next, "chemistry", "academics");**
  // udemy(req, res, next, "chemistry", "academics");
  // verbling(req, res, next, "chemistry", "academics");

  // amlagvniihss   edyabm
  // apnacourse(req, res, next, "anatomy", "academics");
  // arcademics(req, res, next, "anatomy", "academics");
  // bitdegree(req, res, next, "anatomy", "academics");**
  // codecademy(req, res, next, "anatomy", "academics");**
  // coursera(req, res, next, "anatomy", "academics");
  // digigrad(req, res, next, "anatomy", "academics");
  // edx(req, res, next, "anatomy", "academics");
  // harvard(req, res, next, "anatomy", "academics");
  // khanacademy(req, res, next, "anatomy", "academics");
  // openyale(req, res, next, "anatomy", "academics");
  // skillshare(req, res, next, "anatomy", "academics");
  // udacity(req, res, next, "anatomy", "academics");
  // udemy(req, res, next, "anatomy", "academics");
  // verbling(req, res, next, "anatomy", "academics");

  // apnacourse(req, res, next, "astronomy", "academics");
  // arcademics(req, res, next, "astronomy", "academics");
  // bitdegree(req, res, next, "astronomy", "academics");
  // codecademy(req, res, next, "astronomy", "academics");**
  // coursera(req, res, next, "astronomy", "academics");
  // digigrad(req, res, next, "astronomy", "academics");
  // edx(req, res, next, "astronomy", "academics");
  // harvard(req, res, next, "astronomy", "academics");
  // khanacademy(req, res, next, "astronomy", "academics");
  // openyale(req, res, next, "astronomy", "academics");
  // skillshare(req, res, next, "astronomy", "academics");
  // udacity(req, res, next, "astronomy", "academics");
  // udemy(req, res, next, "astronomy", "academics");
  // verbling(req, res, next, "astronomy", "academics");

  // apnacourse(req, res, next, "research paper writing", "academics");
  // arcademics(req, res, next, "research paper writing", "academics");
  // bitdegree(req, res, next, "research paper writing", "academics");
  // codecademy(req, res, next, "research paper writing", "academics");**
  // coursera(req, res, next, "research paper writing", "academics");**
  // digigrad(req, res, next, "research paper writing", "academics");
  // edx(req, res, next, "research paper writing", "academics");
  // harvard(req, res, next, "research paper writing", "academics");
  // khanacademy(req, res, next, "research paper writing", "academics");
  // openyale(req, res, next, "research paper writing", "academics");
  // skillshare(req, res, next, "research paper writing", "academics");
  // udacity(req, res, next, "research paper writing", "academics");**
  // udemy(req, res, next, "research paper writing", "academics");
  // verbling(req, res, next, "research paper writing", "academics");

  // apnacourse(req, res, next, "english", "academics");
  // arcademics(req, res, next, "english", "academics");
  // bitdegree(req, res, next, "english", "academics");
  // codecademy(req, res, next, "english", "academics");**
  // coursera(req, res, next, "english", "academics");
  // digigrad(req, res, next, "english", "academics");
  // edx(req, res, next, "english", "academics");
  // harvard(req, res, next, "english", "academics");
  // khanacademy(req, res, next, "english", "academics");
  // openyale(req, res, next, "english", "academics");
  // skillshare(req, res, next, "english", "academics");**
  // udacity(req, res, next, "english", "academics");
  // udemy(req, res, next, "english", "academics");
  // verbling(req, res, next, "english", "academics");

  // apnacourse(req, res, next, "german", "academics");
  // arcademics(req, res, next, "german", "academics");
  // bitdegree(req, res, next, "german", "academics");**
  // codecademy(req, res, next, "german", "academics");**
  // coursera(req, res, next, "german", "academics");
  // digigrad(req, res, next, "german", "academics");
  // edx(req, res, next, "german", "academics");
  // harvard(req, res, next, "german", "academics");
  // khanacademy(req, res, next, "german", "academics");
  // openyale(req, res, next, "german", "academics");
  // skillshare(req, res, next, "german", "academics");
  // udacity(req, res, next, "german", "academics");
  // udemy(req, res, next, "german", "academics");
  // verbling(req, res, next, "german", "academics");

  // apnacourse(req, res, next, "spanish", "academics");
  // arcademics(req, res, next, "spanish", "academics");
  // bitdegree(req, res, next, "spanish", "academics");**
  // codecademy(req, res, next, "spanish", "academics");**
  // coursera(req, res, next, "spanish", "academics");
  // digigrad(req, res, next, "spanish", "academics");
  // edx(req, res, next, "spanish", "academics");
  // harvard(req, res, next, "spanish", "academics");
  // khanacademy(req, res, next, "spanish", "academics");
  // openyale(req, res, next, "spanish", "academics");
  // skillshare(req, res, next, "spanish", "academics");
  // udacity(req, res, next, "spanish", "academics");
  // udemy(req, res, next, "spanish", "academics");
  // verbling(req, res, next, "spanish", "academics");

  // apnacourse(req, res, next, "france", "academics");
  // arcademics(req, res, next, "france", "academics");
  // bitdegree(req, res, next, "france", "academics");
  // codecademy(req, res, next, "france", "academics");**
  // coursera(req, res, next, "france", "academics");
  // digigrad(req, res, next, "france", "academics");
  // edx(req, res, next, "france", "academics");
  // harvard(req, res, next, "france", "academics");
  // khanacademy(req, res, next, "france", "academics");
  // openyale(req, res, next, "france", "academics");
  // skillshare(req, res, next, "france", "academics");
  // udacity(req, res, next, "france", "academics");
  // udemy(req, res, next, "france", "academics");
  // verbling(req, res, next, "france", "academics");

  // apnacourse(req, res, next, "japanese", "academics");
  // arcademics(req, res, next, "japanese", "academics");
  // bitdegree(req, res, next, "japanese", "academics");
  // codecademy(req, res, next, "japanese", "academics");**
  // coursera(req, res, next, "japanese", "academics");**
  // digigrad(req, res, next, "japanese", "academics");
  // edx(req, res, next, "japanese", "academics");
  // harvard(req, res, next, "japanese", "academics");
  // khanacademy(req, res, next, "japanese", "academics");
  // openyale(req, res, next, "japanese", "academics");
  // skillshare(req, res, next, "japanese", "academics");
  // udacity(req, res, next, "japanese", "academics");
  // udemy(req, res, next, "japanese", "academics");
  // verbling(req, res, next, "japanese", "academics");

  console.log("Inside Academics");
  res.status(200).json({
    message: "Search Results for academics !",
    // query: query.q,
  });
});

module.exports = router;
