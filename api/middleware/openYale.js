const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next,data1,category) => {	
	try{
					// const query = new Search({
					// 	q: req.body.q
					// });
				
				
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(url) {
	
	puppeteer.launch({ headless: true }).then(async browser => {
	console.log('Running middleware in Open Yale');
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.goto(url);
	await page.waitFor(5000);
	
	
let data = await page.evaluate(() =>{	

	var courseName = document.querySelectorAll('h3[class="title"] >a');
	//var price = document.querySelectorAll('div[class="field field-name-price"] >span');
	var link = document.querySelectorAll('h3[class="title"] >a');

	var json = {courseName:[],link:[]};
	for(let i = 0; i < courseName.length; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		//json.price.push(JSON.stringify(price[i].innerText));
		json.link.push(JSON.stringify(link[i].href));
		//json.instructorName.push(JSON.stringify(instructorName[i].innerText));
	}
	
		return json;

});

						const skill = new Skill({
								category:category,
								nameSkill: data1,
								Courses: [ {NameofCourse: data.courseName[1],LinkToCourse: data.link[1]},
											{NameofCourse: data.courseName[2],LinkToCourse: data.link[2]},
											{NameofCourse: data.courseName[3],LinkToCourse: data.link[3]},
											{NameofCourse: data.courseName[4],LinkToCourse: data.link[4]},]
							});
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
			





// console.log(data);
browser.close();
		});
		
		//
}

//var query = 'america';
scrapeProduct('https://oyc.yale.edu/search/node/'+data1);	
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Open Yale Failed'
		});
	}
	
	
};


