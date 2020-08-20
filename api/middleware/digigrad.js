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
	console.log('Running middleware inside DIGIGRAD');
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
	var courseName = document.querySelectorAll('div[class="webinar-event-box"] >h2');
	var date = document.querySelectorAll('div[class="date_time"] >p');
	//var link = document.querySelectorAll('h3[class="title"] >a');
	//
	var instructorName = document.querySelectorAll('div[class="person_cont"] >h3');
	//StanfordOnline
	//var json = JSON.stringify(price);
	//return courseName;
	//,instructorName:[""]  courseName ,link:[]
	var json = {courseName:[],date:[],instructorName:[""]};
	for(let i = 0; i < 10; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		json.date.push(JSON.stringify(date[i].innerText).replace(/(\r\n|\n|\r)/gm,"").trim());
		//json.link.push(JSON.stringify(link[i].href));
		json.instructorName.push(JSON.stringify(instructorName[i].innerText));
	}
	
		return json;

	
});


						  const skill = new Skill({
								category:category,
								nameSkill: data1,
								Courses: [ {NameofCourse: data.courseName[1],Instructor: data.instructorName[1], NumberofHours: data.date[1]}, 
											{NameofCourse: data.courseName[2],Instructor: data.instructorName[1], NumberofHours: data.date[2]},
											{NameofCourse: data.courseName[3],Instructor: data.instructorName[1], NumberofHours: data.date[3]},
											{NameofCourse: data.courseName[4],Instructor: data.instructorName[1], NumberofHours: data.date[4]},]
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
		
		//browser.close();
}

//var query = 'america';
scrapeProduct('https://digigrad.in/webinars/#');
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations Digigrad Failed'
		});
	}
	
	
};

	
	
	


