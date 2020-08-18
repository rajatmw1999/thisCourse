const mongoose = require('mongoose');


const skillsSchema = mongoose.Schema({
	NameofSkill: {type: String},
	Ref: [{type: mongoose.Types.ObjectId, ref: 'Skill'}]
});

const platformSchema = mongoose.Schema({
	platformName: {type: String},
	url :  {type: String}
});

const tagSchema = mongoose.Schema({
	tagName: {type: String}
});


const categorySchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {type: String, required: true},
	skills: [skillsSchema],
	platform: [platformSchema],
	tags: [tagSchema]
});


module.exports = mongoose.model('Category', categorySchema);