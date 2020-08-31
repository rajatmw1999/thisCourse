const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const RoadmapData = require('../models/roadmap/RoadmapData');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
const Skill = require('../models/skills');



router.get('/',(req, res, next) =>{
				const query = new Search({
						q: req.body.q
					});
				query.q = query.q.toLowerCase();
				console.log(query.q);
				
			Search
			.find({q: query.q})
			.limit(1)
			// .then(reso => {
					// if(!reso){
							// Skill
							// .find({nameSkill : query.q})
							// .then(some => {
								// console.log(some[0]);
							// })
							
							// console.log('Cant find');
						// }
					// res.status(201).json({
						// message: 'Cant fff'
					// });
			// })
			.then(result => {
					if(result.length == 0){
						console.log('Converting Query to Skill');
							Skill
							.find({nameSkill : query.q})
							.then(some => {
								if(some[0].Courses.length == 0) {
									console.log('Hello');
									Skill
									.find({nameSkill: some[0].tags[0].tagName})
									.then(wtag => {
										console.log('Tag is the skill')
										console.log(wtag[0]);
									})
								}
								else {
									console.log(some[0].Courses);
								}
								
								//console.log('Cant find');
							})
							
					} else {
						console.log(result);
					Skill
					.find({nameSkill : result[0].nameofSkill})
					.then(skiller => {
						// if(!skiller){
							// Skill
							// .find({nameSkill : query.q})
							// .then(some => {
								// console.log(some[0]);
							// })
							
							// console.log('Cant find');
						// }
						console.log('Found the courses');
						console.log(skiller[0]);
					})
					// res.status(201).json({
						// message: 'Found Placed wow',
						// createdOrder: {
							// q: result[0].q,
							// nameofSkill: result[0].nameofSkill
						// }
					// });
					
				}
				
					
			})	
			.catch(err => {
				console.log(err);
				res.status(500).json({
						message: 'Some Error',
						error: err
					})
				})
				
				
});

router.post('/',(req, res, next) =>{
	
	const query = new Search({
						q: req.body.q,
						nameofSkill: req.body.nameofSkill
					});
	query
	.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
		message:'Succesfully did Search',
		createdRoadmap: {
			q: result.q,
			nameofSkill: result.nameofSkill
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



router.post('/try',(req, res, next) =>{
	
			const query = new Search({
						q: req.body.q,
						nameofSkill: req.body.nameofSkill
					});
	
			const skill = new Skill({
						nameSkill: query.nameofSkill,
						// Courses: [ {NameofCourse: 'Gole', Price: 5},
									// {NameofCourse: 'Mole', Price: 6},],
						tags: [{tagName: 'boww'}]
					});
					console.log('YYYYYYYYYYYYY');
					skill
					.save()
					.then(result => {
						console.log(result);
					})
					.catch(err => {
						console.log(err);
						res.status(500).json({
								error: err
						})
					});

});


module.exports = router;
