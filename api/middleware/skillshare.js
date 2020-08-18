const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');

const Skill = require('../models/skills');

module.exports = (req, res, next) => {	
	try{
					const query = new Search({
						q: req.body.q
					});
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

let skillShareSearchQuery = query.q;
(async () => {
  
    puppeteer.launch({ headless: true }).then(async browser => {
      
      console.log('Running tests..');
      const page = await browser.newPage();
      await page.goto(`https://www.skillshare.com/search?query=${skillShareSearchQuery}`);
	  
      await page.waitFor(10000);
      
      let data = await page.evaluate(() => {
        let instructorName = (document.querySelectorAll('p[class="title ellipsis"]'));
        let courseName = (document.querySelectorAll('p[class="ss-card__title"] >a'));
        let courseDuration = (document.querySelectorAll('div[class="ss-class__stats__duration"]'));
        let studentsEnrolled = (document.querySelectorAll('span[class="ss-class__stats__stud-count"]'));
        // let price = (document.querySelectorAll('span[class="currency-converter "]'));
        // let rating = (document.querySelectorAll('div[class="text-bold text-large"]'));
        // let lessons = (document.querySelectorAll('div[class="flex flex-direction-column ProfileBase--truncate flex-direction-column"] >div >span'));
        
        var json = {instructorName:[],courseName:[],courseDuration:[],studentsEnrolled:[]};
  
  
        for(let i=0;i<instructorName.length;i++){
          json.instructorName.push(JSON.stringify(instructorName[i].innerText));       
          json.courseName.push(JSON.stringify(courseName[i].innerText));
          json.courseDuration.push(JSON.stringify(courseDuration[i].innerText));
          json.studentsEnrolled.push(JSON.stringify(studentsEnrolled[i].innerText));
        }
        
         return json;
      });
	  
	  	const skill = new Skill({
								nameSkill: query.q,
								Courses: [ {NameofCourse: data.courseName[1],Instructor: data.instructorName[1], NumberofHours: data.courseDuration[1]}, 
											{NameofCourse: data.courseName[2],Instructor: data.instructorName[1], NumberofHours: data.courseDuration[1]},
											{NameofCourse: data.courseName[3],Instructor: data.instructorName[1], NumberofHours: data.courseDuration[1]},
											{NameofCourse: data.courseName[4],Instructor: data.instructorName[1], NumberofHours: data.courseDuration[1]},]
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

	  
      console.log("skillShareResult",data);
	 

    })
    
    browser.close();
  })();
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizationss Failed'
		});
	}
	
	
};
