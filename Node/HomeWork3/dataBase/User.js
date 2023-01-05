const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
	loginName: { type: String, trim: true, default: 'UnNamed' },
	age: { type: Number, default: '' },
	email: { type: String, trim: true, lowercase: true, required: true},
	password: { type: String, required: true }
},
{
	timestamps: true,
	versionKey: false
}
);

module.exports = mongoose.model('User', UserScheme);