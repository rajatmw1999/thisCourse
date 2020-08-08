




const puppeteer = require('puppeteer');

(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
            let title=Array.from(document.querySelectorAll('div.container > ul.nav > li> ul > li > a')).map((ele) => ele.innerText);
            let link=Array.from(document.querySelectorAll('div.container > ul.nav > li> ul > li > a')).map((ele) => ele.href) ;

            v={
                title,
                link
            } ;
            
            
            return v;
            
        });
        await page.close();
        return data
    }

    let browser= await puppeteer.launch(); 
    url='https://www.arcademics.com/';
    
    details=await extractNames(url);
    console.log(details);
    

    
    await browser.close();

})();