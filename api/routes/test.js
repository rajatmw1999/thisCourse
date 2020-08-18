const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const coursera = require('./coursera');
const Udacity = require('./Udacity');
const checkAuth = require('../middleware/coursera');
const udacity = require('../middleware/udacity');

//
router.get('/',checkAuth,udacity,(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
	
	console.log('Inside TEST');
	res.status(200).json({
									message:'Search Results for marketing !',
									query: query.q,
								});
   //req.url = '/coursera';
   //if we want to change the method: req.method = 'POST'
   //return router._router.handle(req, res, next)

		
});


module.exports = router;
	