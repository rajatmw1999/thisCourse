const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next,data1,category) => {	
	try{
					const query = new Search({
						q: req.body.q
					});
					const StealthPlugin = require('puppeteer-extra-plugin-stealth');
					puppeteer.use(StealthPlugin());

				async function scrapeProduct(url) {
						
						puppeteer.launch({ headless: true }).then(async browser => {
						console.log('Running middleware.. Udemy');
						const page = await browser.newPage();
						await page.setDefaultNavigationTimeout(0);
						await page.goto(url);
						await page.waitFor(5000);
						
						
						let data = await page.evaluate(() =>{	

								var courseName = document.querySelectorAll('div[class="popover--popover--t3rNO popover--popover-hover--14ngr"] > a > div > div[class="course-card--main-content--3xEIw course-card--has-price-text--1Ikr0"] > div[class="udlite-focus-visible-target udlite-heading-md course-card--course-title--2f7tE"]');
								// var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span:nth-child(2)>span');
								var link = document.querySelectorAll('a[class="udlite-custom-focus-visible course-card-link--link--3uQEZ"]');
                                var instructorName = document.querySelectorAll('div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
                                // var imageLink = document.querySelectorAll('div[class="course-card--image-wrapper--Sxd90' > img);
								var json = {courseName:[""],link:[""],instructorName:[""]};
								for(let i = 0; i < courseName.length; i++){
									json.courseName.push(JSON.stringify(courseName[i].innerText));		
									json.instructorName.push(JSON.stringify(instructorName[i].innerText));
                                    json.link.push(JSON.stringify(link[i].href));
                                    // json.price.push(JSON.stringify(price[i].innerText));
                                    // json.imageLink.push(JSON.stringify(imageLink[i].src));
								}
								
									return json;

								
							});
							
							
							const skill = new Skill({
								category:category,
								nameSkill: data1,
								platform:'udemy',
								Courses: [ {NameofCourse: data.courseName[1],Instructor: data.instructorName[1],LinkToCourse: data.link[1]},
											{NameofCourse: data.courseName[2], Instructor: data.instructorName[2],LinkToCourse: data.link[2]},
											{NameofCourse: data.courseName[3], Instructor: data.instructorName[3],LinkToCourse: data.link[3]},
											{NameofCourse: data.courseName[4], Instructor: data.instructorName[4],LinkToCourse: data.link[4]},]
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



scrapeProduct('https://www.udemy.com/courses/search/?q='+data1);	
// scrapeProduct('https://www.udemy.com/courses/search/?q=web');   
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations Udemy Failed'
		});
	}
	
	
};

	


