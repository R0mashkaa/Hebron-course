// const fs = require('node:fs/promises');
// const path = require('node:path');

const User = require('../../dataBase/User');

module.exports = {

	getAllUsers: async () => {
		return await User.find();
	},
  
	getSingleUser: async (userId) => {
		return await User.findById(userId);
	},

	findUserByParams: (searchObject) => {
		return User.findOne(searchObject);
	},
  
	createUser: async (userObject) => {
		return User.create(userObject);
	},

	updateUser: async (userId, userNewData) => {
		return User.findByIdAndUpdate(userId, userNewData);
	},

	deleteUser: async (userId) => {
		return  User.findByIdAndRemove(userId);
	}
};