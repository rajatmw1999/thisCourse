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
//
	// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
	// //
	// return [...skus,].map(function(el) {

	// }); 
	//var courseName = document.querySelectorAll('div[class="horizontal-box"]');
	var courseName = document.querySelectorAll('h2[class="color-primary-text card-title headline-1-text"]');
	//var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span');
	
	var instructorName = document.querySelectorAll(".partner-name");
	var link = document.querySelectorAll('li[class="ais-InfiniteHits-item"] >div >a');
	//
	//var json = JSON.stringify(price);
	//return courseName;
	//,price:[""]  courseName 
	var json = {courseName:["wow"],instructorName:["wow"],link:["wow"]};
	for(let i = 0; i < courseName.length; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		//json.price.push(JSON.stringify(price[i].innerText));
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

//var query = 'web';
scrapeProduct('https://www.coursera.org/search?query='+query.q);	
	
});


module.exports = router;



