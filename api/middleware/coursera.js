const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next,data1,category) => {
	//const decoded = jwt.decode();
	try{
		const query = new Search({
						q: req.body.q
					});
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(url) {
	
	puppeteer.launch({ headless: true }).then(async browser => {
	console.log('Running tests.. inside middleware of Coursera');
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.goto(url);
	await page.waitFor(5000);
	
	
	
let data = await page.evaluate(() =>{	
//
	// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
	// //
	// return [...skus,].map(function(el) {

	// }); 
	//var courseName = document.querySelectorAll('div[class="horizontal-box"]');
	var courseName = document.querySelectorAll('h2[class="color-primary-text card-title headline-1-text"]');
	//var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span');
	
	var instructorName = document.querySelectorAll('div[class="card-info vertical-box"]>div[class="partner-logo-wrapper horizontal-box"]>span[class="partner-name"]');
	var instructorImgLink = document.querySelectorAll('div[class="card-info vertical-box"]>div[class="partner-logo-wrapper horizontal-box"]>img[src]');
	var link = document.querySelectorAll('li[class="ais-InfiniteHits-item"] >div >a');
	var rating = document.querySelectorAll('span[class="ratings-text"]');
	var studentsEnrolled = document.querySelectorAll('span[class="enrollment-number"]');
	var difficultyLevel = document.querySelectorAll('span[class="difficulty"]');
	var UrlOfImageThumbnail = document.querySelectorAll('div[class="image-wrapper vertical-box"]>img[src]');
	//
	//var json = JSON.stringify(price);
	//return courseName;
	//,price:[""]  courseName 
	var json = {courseName:[],instructorName:[],instructorImgLink:[],link:[],rating:[],studentsEnrolled:[],difficultyLevel:[],UrlOfImageThumbnail:[]};
	for(let i = 0; i < courseName.length; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		//json.price.push(JSON.stringify(price[i].innerText));
		json.instructorImgLink.push(JSON.stringify(instructorImgLink[i].getAttribute('src')));
		json.instructorName.push(JSON.stringify(instructorName[i].innerText));
		json.link.push(JSON.stringify(link[i].href));
		json.rating.push(JSON.stringify(rating[i].innerText));
		json.studentsEnrolled.push(JSON.stringify(studentsEnrolled[i].innerText));
		json.difficultyLevel.push(JSON.stringify(difficultyLevel[i].innerText));
		json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src')));
	}
	
		return json;

	
});

				const skill = new Skill({
						category:category,
						platform:'coursera',
						nameSkill: data1,
						Courses: [ 	{NameofCourse: data.courseName[0],UrlOfImageThumbnail:data.UrlOfImageThumbnail[0], Rating:data.rating[0],Instructor:data.instructorName[0],UrlOfImageThumbnail:data.instructorImgLink[0],LinkToCourse: data.link[0]},
									{NameofCourse: data.courseName[1],UrlOfImageThumbnail:data.UrlOfImageThumbnail[1], Rating:data.rating[1],Instructor:data.instructorName[1],UrlOfImageThumbnail:data.instructorImgLink[1],LinkToCourse: data.link[1]},
									{NameofCourse: data.courseName[2],UrlOfImageThumbnail:data.UrlOfImageThumbnail[2], Rating:data.rating[2],Instructor:data.instructorName[2],UrlOfImageThumbnail:data.instructorImgLink[2],LinkToCourse: data.link[2]},
									{NameofCourse: data.courseName[3],UrlOfImageThumbnail:data.UrlOfImageThumbnail[3], Rating:data.rating[3],Instructor:data.instructorName[3],UrlOfImageThumbnail:data.instructorImgLink[3],LinkToCourse: data.link[3]},
									{NameofCourse: data.courseName[4],UrlOfImageThumbnail:data.UrlOfImageThumbnail[4], Rating:data.rating[4],Instructor:data.instructorName[4],UrlOfImageThumbnail:data.instructorImgLink[4],LinkToCourse: data.link[4]},]
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
								//res.status(200).json({
								//	message:'Search Results from HARVARD !',
								//	query: query.q,
								//	Data: data
								//});
				
		});
}

//var query = 'web';
// scrapeProduct('https://www.coursera.org/search?query='+ query.q);		
scrapeProduct('https://www.coursera.org/search?query='+ data1);
// scrapeProduct('https://www.coursera.org/search?query='+ "android");
		next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Coursera Failed'
		});
	}
	
	
};