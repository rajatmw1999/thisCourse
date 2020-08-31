const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const RoadmapData = require('../models/roadmap/RoadmapData');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
const Skill = require('../models/skills');

router.post('/',(req, res, next) =>{
	
	const roadmap = new RoadmapData({
		NameOfRoadmap: req.body.NameOfRoadmap,
		NameofAuthor: req.body.NameofAuthor,
		Likes:req.body.Likes,
		DatePublished:req.body.DatePublished,
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
			DatePublished: result.DatePublished ,
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


router.patch('/:roadmapId',(req, res, next) =>{

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


router.delete('/:roadmapId',(req, res, next) =>{
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
})





module.exports = router;


