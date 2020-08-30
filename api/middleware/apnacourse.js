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
// let apnaCourseSearchQuery = query.q;
let apnaCourseSearchQuery = data1;
(async () => {
  
    puppeteer.launch({ headless: true }).then(async browser => {
      
      console.log('Running middleware.. apnacourse');
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
      await page.goto(`https://www.apnacourse.com/all-online-courses/${apnaCourseSearchQuery}`);
      await page.waitFor(10000);
      
      let data = await page.evaluate(() => {
        let noOfCourses = (document.querySelectorAll('div[class="highlight_new"]'));
        let instructorImageLink = (document.querySelectorAll('div[class="thumbnail"] >div>img'));
        let courseName = (document.querySelectorAll('div[class="c_name"]'));
        let noOfLearners = (document.querySelectorAll('div[class="fleft width-50 margin-left-0 margin-right-0"]'));

        var json = {courseName:[],instructorImageLink:[],noOfCourses:[],noOfLearners:[]};

        for(let i=0;i<instructorImageLink.length;i++){
          json.instructorImageLink.push(JSON.stringify(instructorImageLink[i].src));    

        }
        for(let i=0;i<courseName.length;i++){
          json.courseName.push(JSON.stringify(courseName[i].innerText)) ;

        }
        for(let i=0;i<noOfLearners.length;i++){
          if(i%2!==0){
            json.noOfLearners.push(JSON.stringify(noOfLearners[i].innerText))  ;
          }
        }
        for(let i =0;i<noOfCourses.length;i++){
          json.noOfCourses.push(JSON.stringify(noOfCourses[i].innerText));
        }
         return json;
      });
	  // console.log('OK');
	  const skill = new Skill({
                category:category,
								nameSkill: data1,
								Courses: [ {NameofCourse: data.courseName[1],LinkToCourse: data.instructorImageLink[1]},
											{NameofCourse: data.courseName[2],LinkToCourse: data.instructorImageLink[2]},
											{NameofCourse: data.courseName[3],LinkToCourse: data.instructorImageLink[3]},
											{NameofCourse: data.courseName[4],LinkToCourse: data.instructorImageLink[4]},]
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
	  
      // console.log("apnaCourseResult",data);
	  browser.close();
	  
    })
    
    
  })();

} catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}

}
