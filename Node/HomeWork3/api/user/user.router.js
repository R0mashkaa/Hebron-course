const userRouter = require('express').Router();

const controller = require('./user.controller');
const mdlwr = require('./user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', controller.createUser);

userRouter.use('/:userId', mdlwr.checkIsUserExists);

userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);


module.exports = userRouter;