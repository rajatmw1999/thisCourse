const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next,data1,category) => {	
	try{
		// const query = new Search({
		// 				q: req.body.q
		// 			});
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(url) {
	
	puppeteer.launch({ headless: true }).then(async browser => {
	console.log('Inside middleware of Udacity');
	const page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.goto(url);
	await page.waitFor(5000);
	
	
	
let data = await page.evaluate(() =>{	

	//var courseName = document.querySelectorAll('div[class="horizontal-box"]');
	var courseName = document.querySelectorAll('h2[class="card__title__nd-name"]');
	var price = document.querySelectorAll('.catalog-card-tag--desktop');
	var LinkToCourse = document.querySelectorAll('div[class="catalog-component__card"]>a[class="card__top"]');
	var CourseDescription = document.querySelectorAll('p[class="text-content__text"]');
	var Instructor = document.querySelectorAll('h3[class="card__title__school greyed"]');
	var Rating = document.querySelectorAll('div[class="difficulty"]>small');
	// var UrlOfImageThumbnail = document.querySelectorAll('div[class="card__image"]');
	

	var json = {courseName:[],price:[],CourseDescription:[],Instructor:[],Rating:[],LinkToCourse:[]};
	for(let i = 0; i < 10; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		json.price.push(JSON.stringify(price[i].innerText));
		json.CourseDescription.push(JSON.stringify(CourseDescription[i].innerText));
		// json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('style').replace('background-image: ','')));
		// json.LinkToCourse.push( JSON.stringify(LinkToCourse[i].getAttribute('href').replace(""","")));
		json.Instructor.push(JSON.stringify(Instructor[i].innerText));
		json.Rating.push(JSON.stringify(Rating[i].innerText));
		// json.UrlOfImageThumbnail(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('style')));
	}
	
		return json;

	
});

				const skill = new Skill({
						category:category,
						platform:'udacity',
						nameSkill: data1,
						Courses: [ 	{NameofCourse: data.courseName[0], Price: data.price[0],CourseDescription:data.CourseDescription[0],Instructor:data.Instructor[0],Rating:data.Rating[0],NumberofHours:null},
									{NameofCourse: data.courseName[1], Price: data.price[1],CourseDescription:data.CourseDescription[1],Instructor:data.Instructor[1],Rating:data.Rating[1],NumberofHours:null},
									{NameofCourse: data.courseName[2], Price: data.price[2],CourseDescription:data.CourseDescription[2],Instructor:data.Instructor[2],Rating:data.Rating[2],NumberofHours:null},
									{NameofCourse: data.courseName[3], Price: data.price[3],CourseDescription:data.CourseDescription[3],Instructor:data.Instructor[3],Rating:data.Rating[3],NumberofHours:null},
									{NameofCourse: data.courseName[4], Price: data.price[4],CourseDescription:data.CourseDescription[4],Instructor:data.Instructor[4],Rating:data.Rating[4],NumberofHours:null}]
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


// console.log("Udacity Results",data);
browser.close();

		});
}

//var query = 'web';
scrapeProduct('https://www.udacity.com/courses/all?search='+data1);	
		next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations Udacity Failed'
		});
	}
	
	
};