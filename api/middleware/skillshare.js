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

// let skillShareSearchQuery = query.q;
let skillShareSearchQuery = data1;
(async () => {
  
    puppeteer.launch({ headless: true }).then(async browser => {
      
      console.log('In middleware of SkillShare');
      const page = await browser.newPage();
      await page.goto(`https://www.skillshare.com/search?query=${skillShareSearchQuery}`);
	  
      await page.waitFor(10000);
      
      let data = await page.evaluate(() => {
		// let instructorName = (document.querySelectorAll('p[class="title ellipsis"]'));
		let NameofCourse = (document.querySelectorAll('p[class="title"]'));;
		let instructorName = (document.querySelectorAll('div[class="user-information small"]>a'));
        let StudentsEnrolled = (document.querySelectorAll('div[class="stats"]>span[class="student-count"]'));
        let NumberofHours = (document.querySelectorAll('div[class="stats"]>div[class="duration"]>span'));
        
        
        var json = {NameofCourse:[],instructorName:[],StudentsEnrolled:[],NumberofHours:[]};
  
  
        for(let i=0;i<instructorName.length;i++){
          json.instructorName.push(JSON.stringify(instructorName[i].innerText));       
          json.NameofCourse.push(JSON.stringify(NameofCourse[i].innerText));
		  json.StudentsEnrolled.push(JSON.stringify(StudentsEnrolled[i].innerText));
		  json.NumberofHours.push(JSON.stringify(NumberofHours[i].innerText));
        }
        
         return json;
      });
	  
	  	const skill = new Skill({
								category:category,
								nameSkill: data1,
								platform:'skillShare',
								Courses: [ 	{NameofCourse: data.NameofCourse[0],Instructor: data.instructorName[0],StudentsEnrolled:data.StudentsEnrolled[0],NumberofHours:data.NumberofHours[0]},
											{NameofCourse: data.NameofCourse[1],Instructor: data.instructorName[1],StudentsEnrolled:data.StudentsEnrolled[1],NumberofHours:data.NumberofHours[1]}, 
											{NameofCourse: data.NameofCourse[2],Instructor: data.instructorName[2],StudentsEnrolled:data.StudentsEnrolled[2],NumberofHours:data.NumberofHours[2]},
											{NameofCourse: data.NameofCourse[3],Instructor: data.instructorName[3],StudentsEnrolled:data.StudentsEnrolled[3],NumberofHours:data.NumberofHours[3]},
											{NameofCourse: data.NameofCourse[4],Instructor: data.instructorName[4],StudentsEnrolled:data.StudentsEnrolled[4],NumberofHours:data.NumberofHours[4]}]
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

	  
	//   console.log("skillShareResult",data);
	  browser.close();
	 

    })
    
    
  })();
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations Skill Share Failed'
		});
	}
	
	
};
