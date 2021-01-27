const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FeaturedCourses = require("../models/roadmap/FeaturedCourses");
var bodyParser = require('body-parser');
const multer = require("multer");
const path = require("path");
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
//Route 1
//ADD A NEW FEATURED COURSE
router.post("/addfeaturedcourses", (req, res, next) => {
  const featuredcourse = new FeaturedCourses({
    name: req.body.name,
    price: req.body.price,
    link: req.body.link,
    company: req.body.company,
    imageURL: req.body.imageUrl,
    noOfHours: req.body.noOfHours,
    desc: req.body.desc,
    priceDiscount: req.body.priceDiscount,
    duration: req.body.duration,
    nameOfSkill: req.body.nameOfSkill.toLowerCase(),
    category: req.body.category.toLowerCase()
  });
  featuredcourse
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /addfeaturedcourses",
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
//SEARCH A FEATURED COURSE BY ID
router.get("/featuredCoursesById/:id", (req, res) => {
  const id = req.params.id;
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
//GET A FEATURED COURSE BY CATEGORY NAME AND SKILL NAME
router.post("/featuredCoursesByCategorySkill", (req, res) => {
  const category = req.body.category.toLowerCase();
  const skillname = req.body.skillName.toLowerCase();
  FeaturedCourses.find({ nameOfSkill: skillname, category: category })
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
//DELETE A FEATURED COURSE BY ID
router.get("/deleteFeaturedCoursesById/:id", (req, res) => {
  const id = req.params.id;
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

//Route 5
//GET ALL COURSES OF A CATEGORY
router.get("/featuredCoursesByCategory/:category", (req, res) => {
  const category = req.params.category.toLowerCase().split('-')[0];
  FeaturedCourses.find({ category: category })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided Category",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//ROUTE 6
//GET ALL COURSES OF A PARTICULAR SKILL
router.get("/featuredCoursesBySkill/:skillName", (req, res) => {
  const skillname = req.params.skillName.toLowerCase().split('-')[0];
  FeaturedCourses.find({ nameOfSkill: skillname })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided Skill",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//Route 7 
//EDIT AN EXISTING COURSE
router.patch('/edit/:courseId',(req, res, next) =>{

	const id = req.params.courseId;
  const updateOps = {
    name: req.body.name,
    price: req.body.price,
    link: req.body.link,
    company: req.body.company,
    imageUrl: req.body.imageUrl,
    noOfHours: req.body.noOfHours,
    desc: req.body.desc,
    priceDiscount: req.body.priceDiscount,
    duration: req.body.duration,
    nameOfSkill: req.body.nameOfSkill.toLowerCase(),
    category: req.body.category.toLowerCase()
  };
		console.log(updateOps);
		FeaturedCourses.updateOne({ _id: id}, {$set: updateOps})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: 'Featured Course updated yes',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//route 8
//RETUTN ALL FEATURED COURSES
router.get("/courses/all", (req, res) => {
  FeaturedCourses.find({ })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

//Route8 - Upload and compress photo
const app = express();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

//app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage: storage
});

router.post("/uploads",upload.single("image"), (req, res,next) => {
	const file = req.file;
  var ext;

  if (!file) {
    const error = new Error("Please Upload a file");
    error.httpStatusCode = 404;
    return next(error);
  }
  if (file.mimetype == "image/jpeg") {
    ext = "jpg";
  }
  if (file.mimetype == "image/png") {
    ext = "png";
    }
    console.log(file.path);
	//console.log(file.name);
	var fname = path.basename(file.path);
	console.log(fname);
	
	a();
	
	async function a() {
			
			const files = await imagemin(["uploads/" + fname], {
			destination: "output",
			plugins: [
			  imageminJpegtran(),
			  imageminPngquant({
				quality: [0.6, 0.8]
			  })
			]
		  });
		  console.log("hell");
		  
		  console.log(files[0].destinationPath);
		  //res.download(files[0].destinationPath);
	}
})


module.exports = router;
