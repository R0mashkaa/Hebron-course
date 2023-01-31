const userService = require('./user.service');
const { CREATED, NO_CONTENT } = require('../../errors/error.codes');
const { emailService } = require('../../services');
const { WELCOME } = require('../../configs/emailTypes.enum');

module.exports = {
    getMyProfile: async (req, res, next) => {
        try {
            const emailContext = {
                name: req.user.loginName
            };

            await emailService.sendMail('tsugelroman1998@gmail.com', WELCOME, emailContext);

            res.json({
                ...req.user.toObject(),
            });
        } catch (e) {
            next(e);
        }
    },

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
            res.json(req.locals.user);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const createdUser = await userService.createUser(req.body);

            res.status(CREATED).json(createdUser);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const updatedUser = await userService.updateUser(req.params.userId, req.body);
			
            res.json(updatedUser);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            await userService.deleteUserById(req.params.userId);
			
            res.status(NO_CONTENT).json('User deleted');
        } catch (e) {
            next(e);
        }
    }
};