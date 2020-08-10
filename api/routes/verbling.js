const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Search = require('../models/search');

router.get('/',(req, res, next) =>{
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
    
    let verblingResult = await page.evaluate(() => {
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
    console.log("verblingResult",verblingResult);
				res.status(200).json({
									message:'Search Results from VerbLing!',
									query: query.q,
									Data: verblingResult 
								});
  });
  
  browser.close();
})();

});
	
module.exports = router;