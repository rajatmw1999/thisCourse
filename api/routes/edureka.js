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

let edurekaSearchQuery = query.q;
(async () => {
  
    puppeteer.launch({ headless: true }).then(async browser => {
      
      console.log('Running tests..');
      const page = await browser.newPage();
      await page.goto(`https://www.edureka.co/${edurekaSearchQuery}-certification-courses`);
      await page.waitFor(10000);
      
      let edurekaResult = await page.evaluate(() => {
        let imageLink = (document.querySelectorAll('img[class="clp-course-img img-responsive hidden-xs"]'));
        let courseName = (document.querySelectorAll('div[class="clp-course-details"] > h3'));
        let highlights = (document.querySelectorAll('div[class="clp-course-details"]>ul'));
        let ratings = (document.querySelectorAll('span[class="rating"]'));
        let totalViews = (document.querySelectorAll('span[class="total-reviews"]'));

        
        
        var json = {imageLink:[],courseName:[],highlights:[],ratings:[],totalViews:[]};
  
  
        for(let i=0;i<imageLink.length;i++){
          json.imageLink.push(JSON.stringify(imageLink[i].src));       
          json.courseName.push(JSON.stringify(courseName[i].innerText));
          json.highlights.push(JSON.stringify(highlights[i].innerText));
          json.ratings.push(JSON.stringify(ratings[i].innerText));
          json.totalViews.push(JSON.stringify(totalViews[i].innerText));
        }
        
         return json;
      });
      console.log("edurekaResult",edurekaResult);
	  res.status(200).json({
									message:'Search Results from Edureka',
									query: query.q,
									Data: edurekaResult
								});
    })
    
    browser.close();
  })();

})

module.exports = router;
