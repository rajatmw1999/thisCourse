

const puppeteer = require('puppeteer');

(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
            let title=Array.from(document.querySelectorAll('div.title__SP2dSp1Ej9plXK7oxfVOE > strong')).map((ele) => ele.innerText);
            let link=Array.from(document.querySelectorAll('li > a.resultLink__zlwwWPliZOrYtjrq2kpPi')).map((ele) => ele.href) ;

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
    url='https://www.codecademy.com/search?query=';
    query='web development';
    weburl=url.concat(query)
    details=await extractNames(weburl);
    console.log(details);
    

    
    await browser.close();

})();





