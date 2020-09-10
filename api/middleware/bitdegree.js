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
	console.log('Running middleware inside Bitdegree');
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

	// });div[class=class="col-12 col-sm-8 col-md-12 card-content"] >
	 //var courseName = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 card-content"] >h5');
	//
	var rating = document.querySelectorAll('div[class="score d-flex ml-1 align-items-center"]');
	var price = document.querySelectorAll('span[class="old-price mr-2"]');
	var link = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 ml-auto course-hover-details p-md-0"] >a');
	var instructorName = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 card-content"] >div >span[class="course-author"]');
	var UrlOfImageThumbnail = document.querySelectorAll('div[class="col-12 col-sm-4 col-md-12 course-img p-0"] >img[src]');
	var courseName = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 py-2 card-content"] >h5');
	
	//
	//var json = JSON.stringify(price);
	//return courseName;
	//  courseNamecourseName:[""],price:[""],link:[""],courseNamecourseName:[],
	var j=0;//link.length
	//var json = {courseName:[],price:[],link:[],instructorName:[]};
		var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};
	
	for(let i = 0; i < 10; i++){
		json.Rating.push(JSON.stringify(rating[i].innerText));
		json.courseName.push(JSON.stringify(courseName[i].innerText));//.href.substring(30)
		json.price.push(JSON.stringify(price[i].innerText));
		json.instructorName.push("BitDegree");
		//json.link.push(JSON.stringify(courseName[i].href).substring(34));
		json.link.push(JSON.stringify(link[i].href));
		//json.courseName.push(json.link[i].substring(34));
		//json.instructorName.push(JSON.stringify(instructorName[i].innerText));
		json.courseDescription.push(null);
		json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src'))); 
		json.StudentsEnrolled.push(null);
		json.NumberofHours.push(null);
		j+=3;
	}
	
		return json;

	
});

					const skill = new Skill({
						category:category,
						platform:'bitdegree',
						nameSkill: data1,
						Courses: [ {NameofCourse: data.courseName[0], Price: data.price[0],LinkToCourse: data.link[0],Instructor:data.instructorName[0],CourseDescription: data.courseDescription[0],UrlOfImageThumbnail:data.UrlOfImageThumbnail[0],NumberofHours:data.NumberofHours[0],StudentsEnrolled:data.StudentsEnrolled[0],Rating:data.Rating[0]},//
									{NameofCourse: data.courseName[1], Price: data.price[1],LinkToCourse: data.link[1],Instructor:data.instructorName[1],CourseDescription: data.courseDescription[1],UrlOfImageThumbnail:data.UrlOfImageThumbnail[1],NumberofHours:data.NumberofHours[1],StudentsEnrolled:data.StudentsEnrolled[1],Rating:data.Rating[1]},
									{NameofCourse: data.courseName[2], Price: data.price[2],LinkToCourse: data.link[2],Instructor:data.instructorName[2],CourseDescription: data.courseDescription[2],UrlOfImageThumbnail:data.UrlOfImageThumbnail[2],NumberofHours:data.NumberofHours[2],StudentsEnrolled:data.StudentsEnrolled[2],Rating:data.Rating[2]},
									{NameofCourse: data.courseName[3], Price: data.price[3],LinkToCourse: data.link[3],Instructor:data.instructorName[3],CourseDescription: data.courseDescription[3],UrlOfImageThumbnail:data.UrlOfImageThumbnail[3],NumberofHours:data.NumberofHours[3],StudentsEnrolled:data.StudentsEnrolled[3],Rating:data.Rating[3]}]


						// Courses: [ {NameofCourse: data.courseName[1], Price: data.price[1],LinkToCourse: data.link[1],Instructor: data.instructorName[1]},
									// {NameofCourse: data.courseName[2], Price: data.price[2],LinkToCourse: data.link[2],Instructor: data.instructorName[2]},
									// {NameofCourse: data.courseName[3], Price: data.price[3],LinkToCourse: data.link[3],Instructor: data.instructorName[3]},
									// {NameofCourse: data.courseName[4], Price: data.price[4],LinkToCourse: data.link[4],Instructor: data.instructorName[4]},]
					});
					
					
					//console.log(skill);
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
							//res.status(200).json({
								//	message:'Search Results from BitDegree !',
								//	query: query.q,
								//	Data: data
								//});
		});
		
		browser.close();
}

//var query = 'blockchain';
scrapeProduct('https://www.bitdegree.org/search?q='+data1);
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}
	
	
};
