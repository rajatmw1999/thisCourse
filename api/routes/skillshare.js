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

let skillShareSearchQuery = query.q;
(async () => {
  
    puppeteer.launch({ headless: true }).then(async browser => {
      
      console.log('Running tests..');
      const page = await browser.newPage();
      await page.goto(`https://www.skillshare.com/browse/${skillShareSearchQuery}?seeAll=1`);
      await page.waitFor(10000);
      
      let skillshareResult = await page.evaluate(() => {
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
      console.log("skillShareResult",skillshareResult);
	  res.status(200).json({
									message:'Search Results from Digigrad== FREE!',
									query: query.q,
									Data: skillshareResult
								});
    })
    
    browser.close();
  })();
})

module.exports = router;
