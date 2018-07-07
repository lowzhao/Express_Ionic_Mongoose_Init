const mongoose = require('mongoose');
module.exports = mongoose.model('standard',mongoose.Schema(
	{
		name:String,
		value : Number,
		date : Date,
		bool :Boolean,
		Related : mongoose.Schema.Types.ObjectId
	}
));