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
				

(async () =>{
    const extractNames= async (weburl) =>{
		let page = await browser.newPage();
		await page.setDefaultNavigationTimeout(0);
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
			var courseName = document.querySelectorAll('td >a');
			var link = document.querySelectorAll('td >a');
			var courseDescription = document.querySelectorAll('p');
			var UrlOfImageThumbnail = document.querySelectorAll('td >div'); //

			
			//var json = {courseName:[],link:[]};
			var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};

			for(let i = 0; i < 10; i++){
				json.courseName.push(JSON.stringify(courseName[i].innerText));
				json.link.push(JSON.stringify(link[i].href));
				json.NumberofHours.push(null);
				json.StudentsEnrolled.push(null);
				json.Rating.push(null);
				json.courseDescription.push(JSON.stringify(courseDescription[i].innerText));
			    json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].outerHTML)); //
				json.instructorName.push("Arcademics");
				json.price.push(JSON.stringify("FREE"));
			}
			
				return json;
	
            
            
        });
        await page.close();
        return data;
    }

	let browser= await puppeteer.launch(); 
	console.log('Inside Middleware of Arcademics');
	//q = ""
    url='https://www.arcademics.com/games?subject=';
    let weburl=url.concat(data1);
	
    data=await extractNames(weburl);
		
		const skill = new Skill({
								category : category,
								platform:'arcademics',
								nameSkill: data1,
								Courses: [ {NameofCourse: data.courseName[0], Price: data.price[0],LinkToCourse: data.link[0],Instructor:data.instructorName[0],CourseDescription: data.courseDescription[0],UrlOfImageThumbnail:data.UrlOfImageThumbnail[0],NumberofHours:data.NumberofHours[0],StudentsEnrolled:data.StudentsEnrolled[0],Rating:data.Rating[0]},//
									{NameofCourse: data.courseName[1], Price: data.price[1],LinkToCourse: data.link[1],Instructor:data.instructorName[1],CourseDescription: data.courseDescription[1],UrlOfImageThumbnail:data.UrlOfImageThumbnail[1],NumberofHours:data.NumberofHours[1],StudentsEnrolled:data.StudentsEnrolled[1],Rating:data.Rating[1]},
									{NameofCourse: data.courseName[2], Price: data.price[2],LinkToCourse: data.link[2],Instructor:data.instructorName[2],CourseDescription: data.courseDescription[2],UrlOfImageThumbnail:data.UrlOfImageThumbnail[2],NumberofHours:data.NumberofHours[2],StudentsEnrolled:data.StudentsEnrolled[2],Rating:data.Rating[2]},
									{NameofCourse: data.courseName[3], Price: data.price[3],LinkToCourse: data.link[3],Instructor:data.instructorName[3],CourseDescription: data.courseDescription[3],UrlOfImageThumbnail:data.UrlOfImageThumbnail[3],NumberofHours:data.NumberofHours[3],StudentsEnrolled:data.StudentsEnrolled[3],Rating:data.Rating[3]}]

							});	
								// Courses: [ {NameofCourse: data.courseName[8],LinkToCourse: data.link[1]},
											// {NameofCourse: data.courseName[2],LinkToCourse: data.link[2]},
											// {NameofCourse: data.courseName[3],LinkToCourse: data.link[3]},
											// {NameofCourse: data.courseName[4],LinkToCourse: data.link[4]},]
							
							//console.log(skill);
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
		
    // console.log(data);

    await browser.close();

})();
	next();
 } catch(error){
		return res.status(401).json({
			message: 'Authorizationss Arcademics Failed'
		});
	}

}
	