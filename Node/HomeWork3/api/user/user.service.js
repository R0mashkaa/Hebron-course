const fs = require('node:fs/promises');
const path = require('node:path');

const User = require('../../dataBase/User');

module.exports = {

  getAllUsers: async () => {
    return await User.find();
  },
  
  getSingleUser: async (userId) => {
    return User.findBy(userId);
  },

  findUserByParams: (searchObject) => {
    return User.findOne(searchObject);
  },

  findUserByEmail: (email) => {
    return User.find({email});
  },
  
  updateUser: async (userId, userNewData) => {
    return User.findByIdAndUpdate(userId, userNewData)
  },

  deleteUser: async (userId) => {
    return  User.findByIdAndRemove(userId);
  },

  createUser: async (userObject) => {
    return User.create(userObject);
  }
};