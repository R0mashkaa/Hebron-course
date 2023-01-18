const mongoose = require('mongoose');

const secureFields = [ 'password' ];

const OAuthScheme = new mongoose.Schema({
    accessToken: { type: String, trim: true, required: true },
    refreshToken: { type: String, trim: true, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, trim: true, ref: 'User', required: true },
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

module.exports = mongoose.model('OAuth', OAuthScheme);