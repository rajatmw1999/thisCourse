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
	var link = document.querySelectorAll('a');
	//var instructorName = document.querySelectorAll(".text-content__text");
	//
	//var json = JSON.stringify(price);
	//return courseName;
	//  courseName ,instructorName:["wow"]   ,,link:[""]
	var json = {courseName:["wow"],price:[""]};
	for(let i = 0; i < 10; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		json.price.push(JSON.stringify(price[i].innerText));
		//json.link.push(JSON.stringify(link[i+43].href));
		//json.instructorName.push(JSON.stringify(instructorName[i].innerText));
	}
	
		return json;

	
});

				const skill = new Skill({
						category:category,
						platform:'udacity',
						nameSkill: data1,
						Courses: [ {NameofCourse: data.courseName[1], Price: data.price[1]},
									{NameofCourse: data.courseName[2], Price: data.price[2]},
									{NameofCourse: data.courseName[3], Price: data.price[3]},
									{NameofCourse: data.courseName[4], Price: data.price[4]},]
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