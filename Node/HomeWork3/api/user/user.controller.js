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

  updateUser : async (req, res, next) => {
    try {
      const { userId } = req.params;
      const result = await services.updateById(userId, req.body);
  
      if (!result) {
        throw new NotFound(`User not found`);
      }
  
      res.json(result)
    } catch (e) {
      next(e);
    }
  },

  RemoveUser: async(req, res) => {
    try {
      await userService.RemoveUserById(req.params.userId);

      res.status(204).end('User was deleted');
    } catch (e) {
      next(e);
    }
  }
};