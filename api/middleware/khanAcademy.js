const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next) => {	
	try{
					const query = new Search({
						q: req.body.q
					});



const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(url) {
	
	puppeteer.launch({ headless: true }).then(async browser => {
	console.log('Running middleware.. KhanAcademy');
	const page = await browser.newPage();
	await page.goto(url);
	await page.waitFor(5000);
	
	
	//await page.waitForSelector('#color-primary-text card-title headline-1-text');
let data = await page.evaluate(() =>{	
//
	// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
	// //
	// return [...skus,].map(function(el) {

	// });
	var courseName = document.querySelectorAll('div[class="gs-title"] >a');
	//var price = document.querySelectorAll('div[class="field field-name-price"] >span');
	var link = document.querySelectorAll('div[class="gs-title"] >a');
	//
	//var instructorName = document.querySelectorAll('');
	//StanfordOnline
	//var json = JSON.stringify(price);
	//return courseName;
	//,instructorName:[""]  courseName ,price:[""]
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
								nameSkill: query.q,
								Courses: [ {NameofCourse: data.courseName[1],LinkToCourse: data.link[1]},
											{NameofCourse: data.courseName[2],LinkToCourse: data.link[2]},
											{NameofCourse: data.courseName[3],LinkToCourse: data.link[3]},
											{NameofCourse: data.courseName[4],LinkToCourse: data.link[4]},]
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




console.log(data);
			browser.close();
		});
		
		//browser.close();
}

//var query = 'science';
scrapeProduct('https://www.khanacademy.org/search?search_again=1&page_search_query='+query.q);	
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}
	
	
};
