const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	_id: {
		type: String
	},
	email: {
		type: String
	},
	fullname : {
		type: String
	},
	image: {
		type: String
	},
	org: {
		type: Boolean
	},
	upi: {
		type: String
	},
	website: {
		type: String
	}
});

module.exports = mongoose.model('User', userSchema);