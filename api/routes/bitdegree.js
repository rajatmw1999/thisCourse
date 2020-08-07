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
	
	
	//await page.waitForSelector('#color-primary-text card-title headline-1-text');
let data = await page.evaluate(() =>{	
//
	// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
	// //
	// return [...skus,].map(function(el) {

	// });div[class=class="col-12 col-sm-8 col-md-12 card-content"] >
	 //var courseName = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 card-content"] >h5');
	var price = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 ml-auto price"]');
	var link = document.querySelectorAll('div[class="card course-card "] >a');
	var instructorName = document.querySelectorAll('div[class="col-12 col-sm-8 col-md-12 card-content"] >div >span[class="course-author"]');
	//StanfordOnline
	//var json = JSON.stringify(price);
	//return courseName;
	//  courseNamecourseName:[""],price:[""],link:[""],courseNamecourseName:[],
	var j=0;//link.length
	var json = {courseName:[],price:[],link:[],instructorName:[]};
	for(let i = 0; i < 10; i++){
		//json.courseName.push(JSON.stringify(link[i].href.substring(30)));
		json.price.push(JSON.stringify(price[i].innerText));
		//json.link.push(JSON.stringify(courseName[i].href).substring(34));
		json.link.push(JSON.stringify(link[i].href));
		json.courseName.push(json.link[i].substring(34));
		json.instructorName.push(JSON.stringify(instructorName[i].innerText));
		j+=3;
	}
	
		return json;

	
});

console.log(data);
							res.status(200).json({
									message:'Search Results from BitDegree !',
									query: query.q,
									Data: data
								});
		});
		
		//browser.close();
}

//var query = 'blockchain';
scrapeProduct('https://www.bitdegree.org/search?q='+query.q);
	
	
});
	
module.exports = router;

