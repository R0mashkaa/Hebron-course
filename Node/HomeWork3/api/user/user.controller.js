const userService = require("./user.service");
const { NotFound,} = require("../../errors/ApiError");
module.exports = {

  getAllUsers: async (req, res, next) => {
    try {
      const allUsersList = await userService.getAllUsers();

      res.status(200).json(allUsersList);
    } catch (e) {
      next(e);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await userService.getAllUsers();

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const createdUser = await userService.createUser(req.body);

      res.status(201).json(createdUser);
    } catch (e) {
      next(e);
    }
  },

  updateUser : async (req, res, next) => {
    try {
      const { userId } = req.params;
      const updatedUser = await userService.updateUser(userId, req.body);
  
      if (!updatedUser) {
        throw new NotFound(`User not found`);
      }
  
      res.status(200).json(updatedUser);
    } catch (e) {
      next(e);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const deleteThisUser = await userService.deleteUser(userId, req.body);

      res.status(200).json("User deleted");
    } catch (e) {
      next(e);
    }
  }
};