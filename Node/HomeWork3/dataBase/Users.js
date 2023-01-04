const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    firstName: { type: String, trim: true, default: '' },
    lastName: { type: String, trim: true, default: '' },
    email: { type: String, trim: true, lowercase: true, required: true, unique: true },
    age: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('User', UserScheme);