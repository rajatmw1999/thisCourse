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

						var courseName = document.querySelectorAll('div[class="field field-name-title-qs"] >h3 >a');
						var price = document.querySelectorAll('div[class="field field-name-price"] >span');
						var link = document.querySelectorAll('div[class="field field-name-title-qs"] >h3 >a');
						//
						//var instructorName = document.querySelectorAll('');
						//StanfordOnline
						//var json = JSON.stringify(price);
						//return courseName;
						//,instructorName:[""]  courseName
						var json = {courseName:[""],price:[""],link:[""]};
						for(let i = 0; i < courseName.length; i++){
							json.courseName.push(JSON.stringify(courseName[i].innerText));
							json.price.push(JSON.stringify(price[i].innerText));
							json.link.push(JSON.stringify(link[i].href));
							//json.instructorName.push(JSON.stringify(instructorName[i].innerText));
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

//var query = 'science';
scrapeProduct('https://online-learning.harvard.edu/catalog?keywords='+query.q+'&op=Search');	
	

});


module.exports = router;



	


