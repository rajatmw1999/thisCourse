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

(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
			var courseName = document.querySelectorAll('td >a');
			var link = document.querySelectorAll('td >a');
			var json = {courseName:[],link:[]};
			for(let i = 0; i < 10; i++){
				json.courseName.push(JSON.stringify(courseName[i].innerText));
				json.link.push(JSON.stringify(link[i].href));
			}
			
				return json;
	
            
            
        });
        await page.close();
        return data
    }

    let browser= await puppeteer.launch(); 
	//q = ""
    url='https://www.arcademics.com/games?subject=';
    let weburl=url.concat(query.q);
	
    data=await extractNames(weburl);
		
		const skill = new Skill({
								nameSkill: query.q,
								Courses: [ {NameofCourse: data.courseName[1],LinkToCourse: data.link[1]},
											{NameofCourse: data.courseName[2],LinkToCourse: data.link[2]},
											{NameofCourse: data.courseName[3],LinkToCourse: data.link[3]},
											{NameofCourse: data.courseName[4],LinkToCourse: data.link[4]},]
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
		
		
		
		
		
		
		
		
    console.log(data);

    await browser.close();

})();
	next();
 } catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}

}
	