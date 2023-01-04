const userService = require("./user.service");

module.exports = {
  getAllUsers: (req, res) => {
    res.json([]);
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

  updateUser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await services.updateById(userId, req.body);
  
      if (!result) {
        throw new NOT_FOUND(`User ${userId} is not found`);
      }
  
      res.json("User updated");
    } catch (e) {
      next(e);
    }
  },

  deleteUser: (req, res) => {
    res.status(204).end('User was deleted');
  }
};