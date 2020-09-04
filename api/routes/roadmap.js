const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const RoadmapData = require('../models/roadmap/RoadmapData');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
const Skill = require('../models/skills');

//ROUTE 1
//CREATE A NEW ROADMAP
router.post('/create',(req, res, next) =>{
	
	const roadmap = new RoadmapData({
		NameOfRoadmap: req.body.NameOfRoadmap,
		NameofAuthor: req.body.NameofAuthor,
		Likes:req.body.Likes,
		// DatePublished:req.body.DatePublished,
		ImageLink: req.body.ImageLink,
		Category: req.body.Category,
		Text: req.body.Text,
	 });
	
	roadmap
	.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
		message:'Succesfully created RoadMap',
		createdRoadmap: {
			NameOfRoadmap: result.NameOfRoadmap ,
			NameofAuthor: result.NameofAuthor ,
			Likes:result.Likes ,
			// DatePublished: result.DatePublished ,
			ImageLink: result.ImageLink ,
			Category: result.Category ,
			Text: result.Text
		}
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
				error: err
		})
	});
	
});

//ROUTE 2
//EDIT AN EXISTING ROADMAP
router.patch('/edit/:roadmapId',(req, res, next) =>{

	const id = req.params.roadmapId;
		const updateOps = {};
		for(const ops of req.body){
			updateOps[ops.propName] = ops.value; // name: req.body.newName, price: req.body.newPrice
		}
		RoadmapData.update({ _id: id}, {$set: updateOps})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: 'RoadMap updated yes',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		});

});

//ROUTE 3
//DELETE A PARTICULAR ROADMAP
router.delete('/delete/:roadmapId',(req, res, next) =>{
	const id = req.params.roadmapId;
		RoadmapData.remove({_id: id})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: 'Product deleted',
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

//ROUTE 4
//GET TOP 10 TRENDING ROADMAPS BASED ON LIKES
router.get('/10',(req, res, next) =>{
		RoadmapData.find()
		.sort('-Likes')
		.limit(10)
		.exec()
		.then(docs => {
					console.log(docs);
					res.status(200).json(docs);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error:err
			});
		});
});

//ROUTE 5
//GET ALL THE ROADMAPS
router.get('/all',(req, res, next) =>{
	RoadmapData.find({})
	.then(docs => {
				res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error:err
		});
	});
});

//ROUTE 6
//GET ALL ROADMAPS OF A PARTICULAR CATEGORY
router.get("/category/:categoryName", (req, res) => {
	const category = req.params.categoryName;
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
  
  // ROUTE 7
  //GET ALL DATA OF A PARTICULAR ROADMAP
  router.get("/:roadmapId", (req, res) => {
	const roadmapId = req.params.roadmapId;
	RoadmapData.find({ _id: roadmapId })
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
  
  // ROUTE 8
  //GET ROADMAPS OF THE GIVEN TAGS
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
  



module.exports = router;


