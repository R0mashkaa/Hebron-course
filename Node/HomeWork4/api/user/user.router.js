const userRouter = require('express').Router();

const controller = require('./user.controller');
const authMdlw = require ('../authorization/auth.middleware');
const Usermdlwr = require('./user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', Usermdlwr.joiValidator, Usermdlwr.checkIsValidInfo, controller.createUser);

userRouter.use('/:userId', Usermdlwr.getUserDynamically('userId','params','_id'));
userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', Usermdlwr.checkIsValidInfo, controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);

userRouter.get('/myProfile', authMdlw.validateAccessToken, controller.getMyProfile);

module.exports = userRouter;