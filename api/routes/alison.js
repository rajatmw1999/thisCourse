const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Search = require('../models/search');
//const puppeteer = require('puppeteer');
const { strict } = require('assert');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');


router.get('/',(req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});
				console.log('Running Scrappers');

(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            let duration= Array.from(document.querySelectorAll('li.course-icons > div >span')).map((ele) => ele.innerText)[2];
            let enrolled=Array.from(document.querySelectorAll('li.course-icons > div >h4')).map((ele) => ele.innerText)[0];
            let rating=Array.from(document.querySelectorAll('li.course-icons > div >h4')).map((ele) => ele.innerText)[1];  
            let title=Array.from(document.querySelectorAll('div.course-brief--title > h1')).map((ele) => ele.innerText)[0]; 
            
            let details={
                title,
                duration,
                enrolled,
                rating
            }
            return details;
            
        });
        await page.close();
        return data
    }

    const getDetails= async (url) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            let title= Array.from(document.querySelectorAll('div.course-block-intro > a.course-block-wrapper')).map((partner) => partner.href);
            return title;
            
        });
        await page.close;
        return data

        

    } 



    let browser= await puppeteer.launch(); 
    
    //q='web development';
    let weburi='https://alison.com/courses?query=';
    let weburl=weburi.concat(query.q);
    
    data= await getDetails(weburl);
    details=[]

    for(i=0;i<=20;i++)
    {
        if(i%2===1)
        {
            det=await extractNames(data[i]);
            details.push(det);
        }
    }


    
    
    
    
    console.log(details);
		res.status(200).json({
									message:'Search Results from alison!',
									query: query.q,
									Data: details
								});
	
    //console.log(details.length);
    await browser.close();

})();

	
});
	
module.exports = router;




