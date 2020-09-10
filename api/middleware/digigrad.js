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
	await page.setDefaultNavigationTimeout(0);
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
	var NumberofHours = document.querySelectorAll('div[class="date_time"] >p');
	//var link = document.querySelectorAll('h3[class="title"] >a');
	var UrlOfImageThumbnail = document.querySelectorAll('div[class="person_img"] >img[src]');
	var instructorName = document.querySelectorAll('div[class="person_cont"] >h3');
	//StanfordOnline
	//var json = JSON.stringify(price);
	//return courseName;
	//,instructorName:[""]  courseName ,link:[]
	var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};
	for(let i = 0; i < 10; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		json.NumberofHours.push(JSON.stringify(NumberofHours[i].innerText).replace(/(\r\n|\n|\r)/gm,"").trim());
		json.link.push("https://digigrad.in/webinars/");
		json.courseDescription.push(JSON.stringify(courseName[i].innerText));
		json.instructorName.push(JSON.stringify(instructorName[i].innerText));
		json.price.push("FREE");
		json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src')));
		json.StudentsEnrolled.push(null);
		json.Rating.push(null);
	}
	
		return json;

	
});


						  const skill = new Skill({
								category:category,
								platform:'digigrad',
								nameSkill: data1,
								Courses: [ {NameofCourse: data.courseName[0], Price: data.price[0],LinkToCourse: data.link[0],Instructor:data.instructorName[0],CourseDescription: data.courseDescription[0],UrlOfImageThumbnail:data.UrlOfImageThumbnail[0],NumberofHours:data.NumberofHours[0],StudentsEnrolled:data.StudentsEnrolled[0],Rating:data.Rating[0]},//
									{NameofCourse: data.courseName[1], Price: data.price[1],LinkToCourse: data.link[1],Instructor:data.instructorName[1],CourseDescription: data.courseDescription[1],UrlOfImageThumbnail:data.UrlOfImageThumbnail[1],NumberofHours:data.NumberofHours[1],StudentsEnrolled:data.StudentsEnrolled[1],Rating:data.Rating[1]},
									{NameofCourse: data.courseName[2], Price: data.price[2],LinkToCourse: data.link[2],Instructor:data.instructorName[2],CourseDescription: data.courseDescription[2],UrlOfImageThumbnail:data.UrlOfImageThumbnail[2],NumberofHours:data.NumberofHours[2],StudentsEnrolled:data.StudentsEnrolled[2],Rating:data.Rating[2]},
									{NameofCourse: data.courseName[3], Price: data.price[3],LinkToCourse: data.link[3],Instructor:data.instructorName[3],CourseDescription: data.courseDescription[3],UrlOfImageThumbnail:data.UrlOfImageThumbnail[3],NumberofHours:data.NumberofHours[3],StudentsEnrolled:data.StudentsEnrolled[3],Rating:data.Rating[3]}]

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

	
	
	


