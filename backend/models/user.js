const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	fullname : {
		type: String
	},
	image: {
		type: String
	},
	qualifications: {
		type: String
	},
	org: {
		type: Boolean,
		default: false
	},
	upi: {
		type: String
	},
	website: {
		type: String
	},
	d: {
		type: String
	}
});

module.exports = mongoose.model('User', userSchema);