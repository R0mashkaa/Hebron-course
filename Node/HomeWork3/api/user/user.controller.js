const userService = require("./user.service");

module.exports = {
  getAllUsers: async (req, res) => {
    const allUsers = await userService.getAllUsers();

    res.json(allUsers);
  },

  createUser: async (req, res, next) => {
    try {
      const createdUser = await userService.createUser(req.body);

      res.status(201).json(createdUser);
    } catch (e) {
      next(e);
    }
  },

  getUserById: (req, res, next) => {
    try {
      res.json(req.user);
    } catch (e) {
      next(e);
    }
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
  }
};