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
  
  updateUser: async (req, res) => {
    try {
      const updatedUser = await userService.updateUser(req.params.userId, req.body);
      res.json(updatedUser);
    } catch (e) {
      console.log(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      await userService.deleteUserById(req.params.userId);

      res.status(204).end();
    } catch (e) {
      next(e);
    }
  },

  createUser: async (userObject) => {
    return User.create(userObject);
  }
};