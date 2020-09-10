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
				//console.log("1");
				const StealthPlugin = require('puppeteer-extra-plugin-stealth');
				puppeteer.use(StealthPlugin());

				async function scrapeProduct(url) {
	
					puppeteer.launch({ headless: true }).then(async browser => {
					console.log('Running middleware in Harvard');
					const page = await browser.newPage();
					await page.setDefaultNavigationTimeout(0);
					await page.goto(url);
					await page.waitFor(5000);
					
					let data = await page.evaluate(() =>{	
					//	console.log("2");
						var courseName = document.querySelectorAll('div[class="field field-name-title-qs"] >h3 >a');
						var price = document.querySelectorAll('div[class="field field-name-price"] >span');
						var link = document.querySelectorAll('div[class="field field-name-title-qs"] >h3 >a');
					    var courseDescription = document.querySelectorAll('div[class="field field-name-field-course-summary"]');
						var UrlOfImageThumbnail = document.querySelectorAll('div[class="field field-name-field-course-image"] >img[src]'); //
						var NumberofHours = document.querySelectorAll('div[class="field field-name-field-duration"]');
						
						//var instructorName = document.querySelectorAll('');
						//StanfordOnline
						//var json = JSON.stringify(price);
						//return courseName;
						//,instructorName:[""]  courseName
						var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};
						for(let i = 0; i < courseName.length; i++){
							json.courseName.push(JSON.stringify(courseName[i].innerText));
							json.price.push(JSON.stringify(price[i].innerText));
							json.link.push(JSON.stringify(link[i].href));
							json.instructorName.push("Harvard");
							json.courseDescription.push(JSON.stringify(courseDescription[i].innerText));
							json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src'))); //
							json.NumberofHours.push(JSON.stringify(NumberofHours[i].innerText));
							json.StudentsEnrolled.push(null);
							json.Rating.push(null);
						}
						
							return json;

						
					});
					/*
					*/
					
					//console.log("3");
					const skill = new Skill({
						category:category,
						nameSkill: data1,
						platform:'harvard',
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
					
				}



//var query = 'science';
scrapeProduct('https://online-learning.harvard.edu/catalog?keywords='+data1+'&op=Search');	
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations Harvard Failed'
		});
	}
	
	
};



	


