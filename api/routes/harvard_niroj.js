const puppeteer = require('puppeteer');

(async () =>{
    const extractNames= async (weburl) =>{
        let page = await browser.newPage();
        await page.goto(weburl);
        
        const data = await page.evaluate(() =>{
            
            let det=Array.from(document.querySelectorAll('div.item > div')).map((ele) => ele.innerText) 
            let title=Array.from(document.querySelectorAll('h3.eta-uc > a')).map((ele) => ele.innerText); 
            
            let details={
                title,
                det
            }
            return details;
            
        });
        await page.close();
        return data
    }

    let browser= await puppeteer.launch(); 
    url='https://online.hbs.edu/courses/'
    details=await extractNames(url);
    console.log(details);
    detail=[]
    l=details.title.length
    var j=0
    for(i=0;i<l;i++)
    {   
        let tit= details.title[i];
        let duration=details.det[j];
        let cost=details.det[j+1];
        j=j+3; 
        x={
            title:tit,
            duration,
            cost
        }
        detail.push(x);

    }

    console.log(detail);
    await browser.close();

})();





