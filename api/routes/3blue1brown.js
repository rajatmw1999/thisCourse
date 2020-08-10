

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
(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
            let title=Array.from(document.querySelectorAll('div.subnav > ul> li.external-link')).map((ele) => ele.innerText);
            let link=Array.from(document.querySelectorAll('div.subnav > ul> li.external-link >a')).map((ele) => ele.href);
             
            v={
                title,
                link
            };
            
            return v;
            
        });
        await page.close();
        return data
    }

    let browser= await puppeteer.launch(); 
    url='https://www.3blue1brown.com/';
    
    details=await extractNames(url);
    console.log(details);
	res.status(200).json({
									message:'Search Results from 3blue1brown!',
									query: query.q,
									Data: details
								});
	
    

    
    await browser.close();

})();


		
	
});
	
module.exports = router;
	
