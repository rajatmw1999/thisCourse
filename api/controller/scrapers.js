const Search = import('../models/udemy_search');

exports.scrape =  (req, res, next) =>{
					const query = new Search({
						q: req.body.q
					});	
					const puppeteer = require('puppeteer-extra');

				const StealthPlugin = require('puppeteer-extra-plugin-stealth');
				puppeteer.use(StealthPlugin());

				async function scrapeProduct(url) {
					
					puppeteer.launch({ headless: true }).then(async browser => {
					console.log('Running tests..');
					const page = await browser.newPage();
					await page.goto(url);
					await page.waitFor(5000);
					
					
					
					let data = await page.evaluate(() =>{	
				
					// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
					// //
					// return [...skus,].map(function(el) {

					// });
					var courseName = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"]');
					var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span');
					var instructorName = document.querySelectorAll('div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
					//
					//var json = JSON.stringify(price);
					//return courseName;
					var json = {courseName:[],price:[],instructorName:[]};
					for(let i = 0; i < courseName.length; i++){
						json.courseName.push(JSON.stringify(courseName[i].innerText));
						json.price.push(JSON.stringify(price[i].innerText));
						json.instructorName.push(JSON.stringify(instructorName[i].innerText));
					}
						return json;
					});
				console.log(data);
						res.status(200).json({
							message:'Search Results from Udemy !',
							query: query.q,
							Data: data
						});	
					
					
						});
				}

				//var query = 'abc'
	scrapeProduct('https://www.udemy.com/courses/search/?q='+query.q);	
	console.log(query.q);
	
}
	


