const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
	tagName: {type: String}
});

const searchSchema = mongoose.Schema({
	q: [{type:String}],
	nameofSkill: {type:String},
	googleApiName: {type:String},
	tags: [tagSchema]
});

module.exports = mongoose.model ('Search',searchSchema);
