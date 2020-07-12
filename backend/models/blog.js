const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
	userid: {
		type: String,
		ref: 'User'
	},
	label: {
		type: String,
		enum: ['Fitness','Mental Health','Diet','Non-Profit Incentive']
	},
	title: {
		type: String
	},
	body: {
		type: String
	},
	media: {
		type: String
	},
	date: {
		type: Number
	}
});
module.exports = mongoose.model('Blog', blogSchema);