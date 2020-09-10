//require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
const Skill = require('../models/skills');

module.exports = (req, res, next,data1,category) => {	
	try{
				
					// const query = new Search({
						// q: req.body.q
					// });
				console.log('Running Scrappers');

(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
			var courseName = document.querySelectorAll('div[class="title__SP2dSp1Ej9plXK7oxfVOE"] > strong');
			var link = document.querySelectorAll('li > a.resultLink__zlwwWPliZOrYtjrq2kpPi');
			var UrlOfImageThumbnail = document.querySelectorAll('div[class="shell__26O4Vpaj5CqZxaoVpy-Xfe result__1t82XnGx-K3hvQRKBr_U9u"] >img[src]'); //
			var courseDescription = document.querySelectorAll('div[class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"] >div:nth-child(3)');
			///html/body/div[2]/main/div/div[2]/div[2]/ol/li[4]/a/div/div/div[3]  graphic__1MQU4lJjH2OIjkXTOwO7-n
			//var json = {courseName:[],link:[]};
		var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};
			for(let i = 0; i < 10; i++){
				json.UrlOfImageThumbnail.push(JSON.stringify(UrlOfImageThumbnail[i].getAttribute('src'))); //
				json.courseName.push(JSON.stringify(courseName[i].innerText));
				json.link.push(JSON.stringify(link[i].href));
				json.NumberofHours.push(null);
				json.StudentsEnrolled.push(null);
				json.Rating.push(null);
				json.price.push(null);
				json.instructorName.push("CodeAcademy");
				json.courseDescription.push(JSON.stringify(courseDescription[i].innerText));
			}
			
				return json;
	//title__SP2dSp1Ej9plXK7oxfVOE title__SP2dSp1Ej9plXK7oxfVOE
            
            
        });
        await page.close();
        return data
    }

    let browser= await puppeteer.launch(); 
	
    url='https://www.codecademy.com/search?query=';
    let weburl=url.concat(data1);
	//console.log("llll");
    data=await extractNames(weburl);
	//	console.log("mmm");
		const skill = new Skill({
								//nameSkill: query.q,
								category:category,
								nameSkill: data1,
								platform:'Code Academy',
								Courses: [ {NameofCourse: data.courseName[0], Price: data.price[0],LinkToCourse: data.link[0],Instructor:data.instructorName[0],CourseDescription: data.courseDescription[0],UrlOfImageThumbnail:data.UrlOfImageThumbnail[0],NumberofHours:data.NumberofHours[0],StudentsEnrolled:data.StudentsEnrolled[0],Rating:data.Rating[0]},//
									{NameofCourse: data.courseName[1], Price: data.price[1],LinkToCourse: data.link[1],Instructor:data.instructorName[1],CourseDescription: data.courseDescription[1],UrlOfImageThumbnail:data.UrlOfImageThumbnail[1],NumberofHours:data.NumberofHours[1],StudentsEnrolled:data.StudentsEnrolled[1],Rating:data.Rating[1]},
									{NameofCourse: data.courseName[2], Price: data.price[2],LinkToCourse: data.link[2],Instructor:data.instructorName[2],CourseDescription: data.courseDescription[2],UrlOfImageThumbnail:data.UrlOfImageThumbnail[2],NumberofHours:data.NumberofHours[2],StudentsEnrolled:data.StudentsEnrolled[2],Rating:data.Rating[2]},
									{NameofCourse: data.courseName[3], Price: data.price[3],LinkToCourse: data.link[3],Instructor:data.instructorName[3],CourseDescription: data.courseDescription[3],UrlOfImageThumbnail:data.UrlOfImageThumbnail[3],NumberofHours:data.NumberofHours[3],StudentsEnrolled:data.StudentsEnrolled[3],Rating:data.Rating[3]}]

								
								// Courses: [ {NameofCourse: data.courseName[1],LinkToCourse: data.link[1]},
											// {NameofCourse: data.courseName[2],LinkToCourse: data.link[2]},
											// {NameofCourse: data.courseName[3],LinkToCourse: data.link[3]},
											// {NameofCourse: data.courseName[4],LinkToCourse: data.link[4]},]
							});
						//	console.log(skill);
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
		
		
		
		
		
		
		
		
//    console.log(data);

    await browser.close();

})();
	next();
 } catch(error){
		return res.status(401).json({
			message: 'Authorizationss Udacity Failed'
		});
	}

}


// router.get('/',(req, res, next) =>{
// 					var query = new Search({
// 						q: req.body.q
// 					});
// (async () =>{
//     var extractNames= async (weburl) =>{
//         let page = await browser.newPage();
//         await page.goto(weburl);
//         console.log('Running Scrapper');
		
//         var data = await page.evaluate(() =>{
            
//             let title=Array.from(document.querySelectorAll('div.title__SP2dSp1Ej9plXK7oxfVOE > strong')).map((ele) => ele.innerText);
//             let link=Array.from(document.querySelectorAll('li > a.resultLink__zlwwWPliZOrYtjrq2kpPi')).map((ele) => ele.href) ;

//             v={
//                 title,
//                 link
//             } ;
            
            
//             return v;
            
//         });
//         await page.close();
//         return data;
//     }

//     let browser= await puppeteer.launch(); 
//     url='https://www.codecademy.com/search?query=';
//     //query='web development';
//     weburl=url.concat(query.q)
//     details=await extractNames(weburl);
//     console.log(details);
//     res.status(200).json({
// 									message:'Search Results from Codeacademy!',
// 									query: query.q,
// 									Data: details
// 								});

    
//     await browser.close();

// })();

// });

// module.exports = router;







