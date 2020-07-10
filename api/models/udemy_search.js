const mongoose = require('mongoose');

const searchSchema = mongoose.Schema({
	q: {type:String, required: true}
	
});

module.exports = mongoose.model ('Search',searchSchema);