const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Search = require('../models/search');


router.get('/',(req, res, next) =>{
					var query = new Search({
						q: req.body.q
					});
(async () =>{
    var extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        console.log('Running Scrapper');
		
        var data = await page.evaluate(() =>{
            
            let title=Array.from(document.querySelectorAll('div.title__SP2dSp1Ej9plXK7oxfVOE > strong')).map((ele) => ele.innerText);
            let link=Array.from(document.querySelectorAll('li > a.resultLink__zlwwWPliZOrYtjrq2kpPi')).map((ele) => ele.href) ;

            v={
                title,
                link
            } ;
            
            
            return v;
            
        });
        await page.close();
        return data;
    }

    let browser= await puppeteer.launch(); 
    url='https://www.codecademy.com/search?query=';
    //query='web development';
    weburl=url.concat(query.q)
    details=await extractNames(weburl);
    console.log(details);
    res.status(200).json({
									message:'Search Results from Codeacademy!',
									query: query.q,
									Data: details
								});

    
    await browser.close();

})();

});

module.exports = router;







