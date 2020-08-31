const mongoose = require('mongoose');


const courseSchema = mongoose.Schema({
	NameofCourse: {type: String},
	Rating: {type: String},
	CourseDescription:{type: String},
	Price: {type: String},
	NumberofHours: {type: String},
	Instructor:{type: String},
	UrlOfImageThumbnail:{type: String},
	PlatformName:{type: String},
	LinkToCourse: {type: String},
	Language: {type: String},
	StudentsEnrolled: {type: String}
});


const tagSchema = mongoose.Schema({
	tagName: {type: String}
});


const skillSchema = mongoose.Schema({
	// category: {type: mongoose.Types.ObjectId, ref:'Category'},
	platform:{
		type:String
	},
	category : {type:String, required: true},
	nameSkill: {type: String, required: true },
	Courses: [courseSchema],
	tags: [tagSchema]
});

module.exports = mongoose.model('Skill', skillSchema);