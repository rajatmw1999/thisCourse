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
								// var UrlOfImageThumbnail = document.querySelectorAll('a[class="discovery-card-link"]>div[class="d-flex flex-column d-card-wrapper"]>img[src]');
								
								var json = {courseName:[],link:[],instructorName:[],courseDescription:[]};
								let j=0;
								for(let i = 0; i < link.length; i++){
									if(courseName[i] != ""){
											json.courseName.push(JSON.stringify(courseName[j].innerText));	
											j+=2;
									}
									json.instructorName.push(JSON.stringify(instructorName[i].innerText));
									json.courseDescription.push(JSON.stringify(courseDescription[i].innerText));
									json.link.push(JSON.stringify(link[i].href));
									// json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src')));
								}
								
									return json;

								
							});
							
							
							const skill = new Skill({
								category:category,
								nameSkill: data1,
								Courses: [ 	{NameofCourse: data.courseName[0], Instructor: data.instructorName[0],CourseDescription:data.courseDescription[0],LinkToCourse: data.link[0]},
											{NameofCourse: data.courseName[1], Instructor: data.instructorName[1],CourseDescription:data.courseDescription[1],LinkToCourse: data.link[1]},
											{NameofCourse: data.courseName[2], Instructor: data.instructorName[2],CourseDescription:data.courseDescription[2],LinkToCourse: data.link[2]},
											{NameofCourse: data.courseName[3], Instructor: data.instructorName[3],CourseDescription:data.courseDescription[3],LinkToCourse: data.link[3]},
											{NameofCourse: data.courseName[4], Instructor: data.instructorName[4],CourseDescription:data.courseDescription[4],LinkToCourse: data.link[4]},]
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

	


