const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');

router.get('/',(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
					const StealthPlugin = require('puppeteer-extra-plugin-stealth');
					puppeteer.use(StealthPlugin());

					async function scrapeProduct(url) {
						
						puppeteer.launch({ headless: true }).then(async browser => {
						console.log('Running tests..');
						const page = await browser.newPage();
						await page.goto(url);
						await page.waitFor(5000);
						
						
						let data = await page.evaluate(() =>{	

								var courseName = document.querySelectorAll('div[class="d-card-body"] >h3 >span >span');
								//var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span');
								var link = document.querySelectorAll('a[class="discovery-card-link"]');
								var instructorName = document.querySelectorAll('div[class="provider"] >span >span:nth-child(1) >span');
								//StanfordOnline
								//var json = JSON.stringify(price);
								//return courseName;
								//,price:[""]  courseName,
								var json = {courseName:[""],link:[""],instructorName:[""]};
								let j=0;
								for(let i = 0; i < link.length; i++){
									if(courseName[i] != ""){
											json.courseName.push(JSON.stringify(courseName[j].innerText));	
											j+=2;
									}
									json.instructorName.push(JSON.stringify(instructorName[i].innerText));
									json.link.push(JSON.stringify(link[i].href));
								}
								
									return json;

								
							});

							console.log(data);
							res.status(200).json({
									message:'Search Results from HARVARD !',
									query: query.q,
									Data: data
								});
						
						
							});
					
					
				}



scrapeProduct('https://www.edx.org/search?q='+query.q);	

});


module.exports = router;


	


