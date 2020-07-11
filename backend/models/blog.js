const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
	userid: {
		type: String
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
	image: {
		type: String
	},
	video: {
		type: String
	}
});
module.exports = mongoose.model('Blog', blogSchema);