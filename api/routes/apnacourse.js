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
let apnaCourseSearchQuery = query.q;
(async () => {
  
    puppeteer.launch({ headless: true }).then(async browser => {
      
      console.log('Running tests..');
      const page = await browser.newPage();
      await page.goto(`https://www.apnacourse.com/allcourses/${apnaCourseSearchQuery}`);
      await page.waitFor(10000);
      
      let apnaCourseResult = await page.evaluate(() => {
        let noOfCourses = (document.querySelectorAll('div[class="highlight_new"]'));
        let instructorImageLink = (document.querySelectorAll('div[class="thumbnail"] >div>img'));
        let courseName = (document.querySelectorAll('div[class="caption text-center"] > h2'));
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
	  
      console.log("apnaCourseResult",apnaCourseResult);
	  res.status(200).json({
								message:'Search Results from Apnacourse!',
								query: query.q,
								Data: apnaCourseResult
							});
    })
    
    browser.close();
  })();

})

module.exports = router;
