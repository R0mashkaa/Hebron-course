const fs = require('node:fs/promises');
const path = require('node:path');

const User = require('../../dataBase/User');

module.exports = {

  getSingleUser: async (userId) => {
    return User.findById(userId);
  },

  getAllUsers: async () => {
    return User.find();
  },

  findUserByParams: (searchObject) => {
    return User.findOne(searchObject);
  },
  
  updateUser: async (userId, newUserData) => {
    return User.findByIdAndUpdate(userId, newUserData);
  },

  deleteUserById: async (userId) => {
    return User.findByIdAndRemove(userId);
  },

  createUser: async (userObject) => {
    return User.create(userObject);
  }
};