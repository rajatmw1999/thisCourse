const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const coursera = require('./coursera');
const Udacity = require('./Udacity');
const coursera = require('../middleware/coursera');
const udacity = require('../middleware/udacity');



//1
router.get('/IT',coursera,udemy,edx,harvard,skillshare,udacity,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//2
router.get('/Language',openyale,verbling,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//3
router.get('/Science',coursera,udemy,udacity,khanacademy,edx,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//4
router.get('/Health',coursera,harvard,udemy,edx,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//5
router.get('/Humanities',coursera,udemy,khanacademy,edx,alison,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//6
router.get('/Math',coursera,edx,khanacademy,3blue1brown,arcademics,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//7
router.get('/Business',coursera,edx,udemy,udacity,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//8
router.get('/Software',coursera,edx,udemy,udacity,codeacademy,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//9
router.get('/Lifestyle',coursera,edx,udemy,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//11
router.get('/Operations',coursera,edx,udemy,udacity,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//12
router.get('/DataScience',coursera,edx,udemy,udacity,codeacademy,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//13
router.get('/Design',coursera,edx,udemy,udacity,skillshare,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});

//14
router.get('/Marketing',coursera,udemy,edx,udacity,digigrad,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
		message:'Search Results for marketing !',
		query: query.q,
	});
});


module.exports = router;
	