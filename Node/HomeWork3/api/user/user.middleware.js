const userService = require("./user.service");
const { NotFound } = require("../../errors/ApiError");

module.exports = {
  checkIsUserExists: async (req, res, next) => {
    try {
      const user = await userService.getSingleUser(req.params.userId);

      
      if (!user) {
        throw new NotFound('User not found');
      }

      req.user = user;

      next();
    } catch (e) {
      next(e);
    }
  },

  checkIsValideEmail:  async (req, res, next) => {
    try {
      const users = await userService.getAllUsers;

          
     

      req.users = users;

      next();
    } catch (e) {
      next(e);
    }
  }



};