const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next,data1,category) => {	
	try{
					// const query = new Search({
					// 	q: req.body.q
					// });
				console.log('Inside Middleware of Verbling');

// let verblingSearchQuery = query.q;
let verblingSearchQuery = data1;

(async () => {
  
  puppeteer.launch({ headless: true }).then(async browser => {
    
    console.log('Inside Middleware of Verbling');
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(`https://www.verbling.com/find-teachers/${verblingSearchQuery}?sort=magic`);
    await page.waitFor(10000);
    
    let data = await page.evaluate(() => {
      let instructorName = (document.querySelectorAll('h2[class="no-margin margin-right-md"] >a'));
      let price = (document.querySelectorAll('span[class="currency-converter "]'));
      let rating = (document.querySelectorAll('div[class="text-bold text-large"]'));
      // let lessons = (document.querySelectorAll('div[class="flex flex-direction-column ProfileBase--truncate flex-direction-column"] >div >span'));
      let CourseDescription = (document.querySelectorAll('div[class="text-light-gray"]>div>div>div'));
      let UrlOfImageThumbnail =(document.querySelectorAll('div[class="PresenceProfilePic"]>img[src]'));
      
      var json = {instructorName:[],price:[],UrlOfImageThumbnail:[],rating:[],CourseDescription:[]};


      for(let i=0;i<instructorName.length;i++){
        json.instructorName.push(JSON.stringify(instructorName[i].innerText));     
        json.CourseDescription.push(JSON.stringify(CourseDescription[i].innerText))  ;
      }
      
      for(let i=0;i<price.length;i++){
        if(i%2 === 0){
          json.price.push(JSON.stringify(price[i].innerText));
        }
      }
      for(let i=0;i<rating.length;i++){
        json.rating.push(JSON.stringify(rating[i].innerText));
      }
      for(let i =0;i<UrlOfImageThumbnail.length;i++){
        json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src')));
      }
      // for(let i=1;i<lessons.length;i++){
      //     if(i === 5 || i === 11 || i === 17 || i === 23 || i === 29 || i === 35)
      //   json.lessons.push(JSON.stringify(lessons[i].innerText));
      // }
       return json;
    });
	
						const skill = new Skill({
                category:category,
                platform:'verbling',
								nameSkill: data1,
								Courses: [ { UrlOfImageThumbnail:data.UrlOfImageThumbnail[0],Price: data.price[0],Rating: data.rating[0],Instructor: data.instructorName[0],CourseDescription:data.CourseDescription[0]},
                  { UrlOfImageThumbnail:data.UrlOfImageThumbnail[1],Price: data.price[1],Rating: data.rating[1],Instructor: data.instructorName[1],CourseDescription:data.CourseDescription[1]},
									{UrlOfImageThumbnail:data.UrlOfImageThumbnail[2],Price: data.price[2],Rating: data.rating[2],Instructor: data.instructorName[2],CourseDescription:data.CourseDescription[2]},
									{UrlOfImageThumbnail:data.UrlOfImageThumbnail[3],Price: data.price[3],Rating: data.rating[3],Instructor: data.instructorName[3],CourseDescription:data.CourseDescription[3]},
									{UrlOfImageThumbnail:data.UrlOfImageThumbnail[4],Price: data.price[4],Rating: data.rating[4],Instructor: data.instructorName[4],CourseDescription:data.CourseDescription[4]}]
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
	
	
	
    // console.log("verblingResult",data);
    browser.close();
				
  });
  
  
})();
next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations verbling Failed'
		});
	}
	
	
};