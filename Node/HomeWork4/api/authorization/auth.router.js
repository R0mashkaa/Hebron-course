const authRouter = require('express').Router();

const controller = require('./auth.controller');
const authMdlwr = require('./auth.middleware');
const userMdlwr = require('../user/user.middleware');

authRouter.post('/', userMdlwr.getUserDynamically('email','body'), controller.userLogin);
authRouter.post('/refresh', authMdlwr.validateRefreshToken, controller.refreshToken);
authRouter.post('/logout', authMdlwr.validateAccessToken, controller.userLogoutSingleDevice);
authRouter.post('/logoutAll', authMdlwr.validateAccessToken, controller.userLogoutAllDevice);


module.exports = authRouter;