const express = require('express');
const router = express.Router();
require('dotenv').config();
const mongoose = require('mongoose');
const puppeteer = require('puppeteer-extra');
const Search = require('../models/search');
const Skill = require('../models/skills');
const { google } = require('googleapis');

module.exports = (req, res, next,data1,category) => {	
	try{
		//var json = {courseName:[],price:[],link:[],instructorName:[],courseDescription:[],UrlOfImageThumbnail:[],NumberofHours:[],StudentsEnrolled:[],Rating:[]};
		//
		// const query = new Search({
		// q: req.body.q
	// });
	
	google.youtube('v3')
	.search.list({
	key: process.env.YOUTUBE_TOKEN,
	part: 'snippet',
	q:data1
	})
	.then(docs => {
		//console.log(docs);//.items[0].snippet.title);
		const skill = new Skill({
						category:category,
						nameSkill: data1,
						platform:'YOUTUBE',
						Courses: [ {NameofCourse: docs.data.items[0].snippet.title, Price: "FREE",LinkToCourse: 'https://www.youtube.com/watch?v=' +docs.data.items[0].id.videoId,Instructor: docs.data.items[0].snippet.channelTitle,CourseDescription: docs.data.items[0].snippet.description,UrlOfImageThumbnail:docs.data.items[0].snippet.thumbnails.default.url,NumberofHours: null,StudentsEnrolled:null,Rating:null},
									{NameofCourse: docs.data.items[1].snippet.title, Price: "FREE",LinkToCourse: 'https://www.youtube.com/watch?v=' +docs.data.items[1].id.videoId,Instructor: docs.data.items[1].snippet.channelTitle,CourseDescription: docs.data.items[1].snippet.description,UrlOfImageThumbnail:docs.data.items[1].snippet.thumbnails.default.url,NumberofHours: null,StudentsEnrolled:null,Rating:null},
									{NameofCourse: docs.data.items[2].snippet.title, Price: "FREE",LinkToCourse: 'https://www.youtube.com/watch?v=' +docs.data.items[2].id.videoId,Instructor: docs.data.items[2].snippet.channelTitle,CourseDescription: docs.data.items[2].snippet.description,UrlOfImageThumbnail:docs.data.items[2].snippet.thumbnails.default.url,NumberofHours: null,StudentsEnrolled:null,Rating:null},
									{NameofCourse: docs.data.items[3].snippet.title, Price: "FREE",LinkToCourse: 'https://www.youtube.com/watch?v=' +docs.data.items[3].id.videoId,Instructor: docs.data.items[3].snippet.channelTitle,CourseDescription: docs.data.items[3].snippet.description,UrlOfImageThumbnail:docs.data.items[3].snippet.thumbnails.default.url,NumberofHours: null,StudentsEnrolled:null,Rating:null}]					
		});
		
		//console.log(skill);
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
	})
	.catch((err) => console.log(err));
		
		
		//console.log(response.Title);
		
		 
		//console.log("jsdh");
		
		//
		next();
	}
	catch(error){
		return res.status(401).json({
			message: 'Authorizations Harvard Failed'
		});
	}
};