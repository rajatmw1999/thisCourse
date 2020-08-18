const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next) => {	
	try{
					const query = new Search({
						q: req.body.q
					});
				console.log('Running Scrappers');

let verblingSearchQuery = query.q;
(async () => {
  
  puppeteer.launch({ headless: true }).then(async browser => {
    
    console.log('Running tests..');
    const page = await browser.newPage();
    await page.goto(`https://www.verbling.com/find-teachers/${verblingSearchQuery}?sort=magic`);
    await page.waitFor(10000);
    
    let data = await page.evaluate(() => {
      let instructorName = (document.querySelectorAll('h2[class="no-margin margin-right-md"] >a'));
      let price = (document.querySelectorAll('span[class="currency-converter "]'));
      let rating = (document.querySelectorAll('div[class="text-bold text-large"]'));
      let lessons = (document.querySelectorAll('div[class="flex flex-direction-column ProfileBase--truncate flex-direction-column"] >div >span'));
      
      var json = {instructorName:[],price:[],rating:[],lessons:[]};


      for(let i=0;i<instructorName.length;i++){
        json.instructorName.push(JSON.stringify(instructorName[i].innerText));       
      }
      
      for(let i=0;i<price.length;i++){
        if(i%2 === 0){
          json.price.push(JSON.stringify(price[i].innerText));
        }
      }
      for(let i=0;i<rating.length;i++){
        json.rating.push(JSON.stringify(rating[i].innerText));
      }
      for(let i=1;i<lessons.length;i++){
          if(i === 5 || i === 11 || i === 17 || i === 23 || i === 29 || i === 35)
        json.lessons.push(JSON.stringify(lessons[i].innerText));
      }
       return json;
    });
	
						const skill = new Skill({
								nameSkill: query.q,
								Courses: [ { Price: data.price[1],Rating: data.rating[1],Instructor: data.instructorName[1]},
									{Price: data.price[2],Rating: data.rating[2],Instructor: data.instructorName[2]},
									{Price: data.price[3],Rating: data.rating[3],Instructor: data.instructorName[3]},
									{Price: data.price[4],Rating: data.rating[4],Instructor: data.instructorName[4]},]
							});
							console.log('YYYYYYYYYYYYY');
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
	
	
	
    console.log("verblingResult",data);
				
  });
  
  browser.close();
})();
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}
	
	
};