const mongoose = require('mongoose');

const secureFields = [ 'password' ];

const UserScheme = new mongoose.Schema({
    loginName: { type: String, trim: true, default: 'UnNamed' },
    age: { type: Number, default: '' },
    email: { type: String, trim: true, lowercase: true, required: true},
    password: { type: String, required: true }
},
{
    timestamps: true,
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform: function(doc, ret) {
            for (const field of secureFields) {
                delete ret[field];
            }
	
            return ret;
        }
    },
    toObject: {
        virtuals: true,
        transform: function(doc, ret) {
            for (const field of secureFields) {
                delete ret[field];
            }
	
            return ret;
        }
    }
}
);

module.exports = mongoose.model('User', UserScheme);