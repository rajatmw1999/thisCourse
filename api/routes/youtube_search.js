const express = require('express');
const router = express.Router();
require('dotenv').config();  

const { google } = require('googleapis'); // install using npm install googleapis --save

// The get request
router.get('/', (req,res,next) => {
	const query = {
			q: req.body.q
	};
	
	google.youtube('v3')
	.search.list({
	key: process.env.YOUTUBE_TOKEN,
	part: 'snippet',
	q:query.q
	})
	.then(docs => {
		const response = {
				Search: docs.data.items.map((item) => {
					return {
						Title: item.snippet.title,
						Description: item.snippet.description,
						request:{
							type: 'GET',
							url: 'https://www.youtube.com/watch?v=' + item.id.videoId
						}
					}
				}) 
		};
	
		res.status(200).json(response);	
	})
	.catch((err) => console.log(err));
	
	//console.log(query);
	
});

module.exports = router;