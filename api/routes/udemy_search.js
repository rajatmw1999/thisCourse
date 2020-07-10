const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');


//const Search = require('../models/udemy_search');
const Scrapper = require('../controller/scrapers');


//console.log('Seriously here');


router.get('/',Scrapper.scrape);
// router.get('/',(req,res,next) => {

	// // const query = new Search({
		// // q: req.body.q
	// // });
	
	// res.status(200).json({
		// message: 'Hello'
	// });	
// });


console.log('Return');


module.exports = router;

// router.get('/', (req,res,next) => {

	// const query = new Search({
		// q: req.body.q
	// });
	
	
	
	// google.youtube('v3')
	// .search.list({
	// key: process.env.YOUTUBE_TOKEN,
	// part: 'snippet',
	// q:query.q
	// })
	// .then(docs => {
		// const response = {
				// Search: docs.data.items.map((item) => {
					// return {
						// Title: item.snippet.title,
						// Description: item.snippet.description,
						// request:{
							// type: 'GET',
							// url: 'https://www.youtube.com/watch?v=' + item.id.videoId
						// }
					// }
				// }) 
		// };
		// console.log(response);
		// res.status(200).json(response);	
	// })
	// .catch((err) => console.log(err));
	
	// //console.log(query);
	
// });

