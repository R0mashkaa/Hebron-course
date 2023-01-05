const userService = require('./user.service');
module.exports = {

	getAllUsers: async (req, res, next) => {
		try {
			const allUsersList = await userService.getAllUsers();

			res.json(allUsersList);
		} catch (e) {
			next(e);
		}
	},

	getUserById: async (req, res, next) => {
		try {
			const userById = await userService.getSingleUser();

			res.json(userById);
		} catch (e) {
			next(e);
		}
	},

	createUser: async (req, res, next) => {
		try {
			const createdUser = await userService.createUser(req.body);

			res.json(createdUser);
		} catch (e) {
			next(e);
		}
	},

	updateUser: async (req, res, next) => {
		try {
			const { userId } = req.params;
			await userService.updateUser(userId, req.body);
  
			res.json('User updated');
		} catch (e) {
			next(e);
		}
	},

	deleteUser: async (req, res, next) => {
		try {
			const { userId } = req.params;
			await userService.deleteUser(userId);

			res.json('User deleted');
		} catch (e) {
			next(e);
		}
	}
};