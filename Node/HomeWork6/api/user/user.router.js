const userRouter = require('express').Router();

const controller = require('./user.controller');
const authMdlw = require ('../authorization/auth.middleware');
const Usermdlwr = require('./user.middleware');

userRouter.get('/', controller.getAllUsers);
userRouter.post('/', Usermdlwr.joiValidator, Usermdlwr.isEmailAndLoginExsist, controller.createUser);

userRouter.get('/myProfile', authMdlw.validateTokenDynamically('accessToken'), controller.getMyProfile);

userRouter.use('/:userId', Usermdlwr.getUserDynamically('userId','params','_id'));
userRouter.get('/:userId', controller.getUserById);
userRouter.put('/:userId', Usermdlwr.isEmailAndLoginExsist, controller.updateUser);
userRouter.delete('/:userId', controller.deleteUser);


module.exports = userRouter;