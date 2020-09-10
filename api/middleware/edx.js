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
						console.log('Running middleware inside Edx');
						const page = await browser.newPage();
						await page.goto(url);
						await page.waitFor(5000);
						
						
						let data = await page.evaluate(() =>{	

								var courseName = document.querySelectorAll('div[class="d-card-body"] >h3 >span >span');
								//var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span');
								var link = document.querySelectorAll('a[class="discovery-card-link"]');
								var instructorName = document.querySelectorAll('div[class="provider"] >span >span:nth-child(1) >span');
								var courseDescription = document.querySelectorAll('div[class="card-type"] >span:nth-child(1)');
								var UrlOfImageThumbnail = document.querySelectorAll('div[class="d-card-hero"] >img[src]');
								
								//var json = {courseName:[],link:[],instructorName:[],courseDescription:[]};
								var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};

								let j=0;
								for(let i = 0; i < link.length; i++){
									if(courseName[i] != ""){
											json.courseName.push(JSON.stringify(courseName[j].innerText));	
											j+=2;
									}
									json.price.push(null);
									json.NumberofHours.push(null);
									json.StudentsEnrolled.push(null);
									json.Rating.push(null);
									json.instructorName.push(JSON.stringify(instructorName[i].innerText));
									json.courseDescription.push(JSON.stringify(courseDescription[i].innerText));
									json.link.push(JSON.stringify(link[i].href));
									json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src')));
								}
								
									return json;

								
							});
							
							
							const skill = new Skill({
								category:category,
								platform:'edx',
								nameSkill: data1,
								// Courses: [ 	{NameofCourse: data.courseName[0], Instructor: data.instructorName[0],CourseDescription:data.courseDescription[0],LinkToCourse: data.link[0]},
											// {NameofCourse: data.courseName[1], Instructor: data.instructorName[1],CourseDescription:data.courseDescription[1],LinkToCourse: data.link[1]},
											// {NameofCourse: data.courseName[2], Instructor: data.instructorName[2],CourseDescription:data.courseDescription[2],LinkToCourse: data.link[2]},
											// {NameofCourse: data.courseName[3], Instructor: data.instructorName[3],CourseDescription:data.courseDescription[3],LinkToCourse: data.link[3]},
											// {NameofCourse: data.courseName[4], Instructor: data.instructorName[4],CourseDescription:data.courseDescription[4],LinkToCourse: data.link[4]},]
								Courses: [  {NameofCourse: data.courseName[0], Price: data.price[0],LinkToCourse: data.link[0],Instructor:data.instructorName[0],CourseDescription: data.courseDescription[0],UrlOfImageThumbnail:data.UrlOfImageThumbnail[0],NumberofHours:data.NumberofHours[0],StudentsEnrolled:data.StudentsEnrolled[0],Rating:data.Rating[0]},//
											{NameofCourse: data.courseName[1], Price: data.price[1],LinkToCourse: data.link[1],Instructor:data.instructorName[1],CourseDescription: data.courseDescription[1],UrlOfImageThumbnail:data.UrlOfImageThumbnail[1],NumberofHours:data.NumberofHours[1],StudentsEnrolled:data.StudentsEnrolled[1],Rating:data.Rating[1]},
											{NameofCourse: data.courseName[2], Price: data.price[2],LinkToCourse: data.link[2],Instructor:data.instructorName[2],CourseDescription: data.courseDescription[2],UrlOfImageThumbnail:data.UrlOfImageThumbnail[2],NumberofHours:data.NumberofHours[2],StudentsEnrolled:data.StudentsEnrolled[2],Rating:data.Rating[2]},
											{NameofCourse: data.courseName[3], Price: data.price[3],LinkToCourse: data.link[3],Instructor:data.instructorName[3],CourseDescription: data.courseDescription[3],UrlOfImageThumbnail:data.UrlOfImageThumbnail[3],NumberofHours:data.NumberofHours[3],StudentsEnrolled:data.StudentsEnrolled[3],Rating:data.Rating[3]}]

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
							browser.close();
							
						
						
							});
					
					
				}



scrapeProduct('https://www.edx.org/search?q='+data1);	
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}
	
	
};

	


