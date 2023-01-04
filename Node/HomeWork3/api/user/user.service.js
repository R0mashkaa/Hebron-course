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

  
  updateUser: async (userId, newUserObject) => {
    const users = await module.exports.getAllUsers();

    const index = users.findIndex(user => user.id === Number(userId));

    users[index] = { id: Number(userId), ...newUserObject };

    await fs.writeFile(usersPath, JSON.stringify(users));

    const updatedUser = await module.exports.getSingleUser(userId);

    return updatedUser;
  },

  deleteUserById: async (userId) => {
    const users = await module.exports.getAllUsers();

    const index = users.findIndex(user => user.id === Number(userId));

    users.splice(index, 1);

    await fs.writeFile(usersPath, JSON.stringify(users));
  },

  createUser: async (userObject) => {
     return User.create(userObject);
  }
};