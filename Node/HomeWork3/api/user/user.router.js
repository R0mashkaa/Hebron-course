const userRouter = require('express').Router();

const controller = require('./user.controller');
const mdlwr = require('./user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', mdlwr.checkIsValidInfo, controller.createUser);

userRouter.use('/:userId', mdlwr.checkIsValidInfo);

userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', mdlwr.checkIsValidInfo, mdlwr.isInfoExist, controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);


module.exports = userRouter;