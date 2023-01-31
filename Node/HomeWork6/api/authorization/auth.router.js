const authRouter = require('express').Router();

const controller = require('./auth.controller');
const authMdlwr = require('./auth.middleware');
const userMdlwr = require('../user/user.middleware');
const { FORGOT_PASSWORD } = require ('../../configs/actionTokenTypes.enum');


authRouter.post('/', userMdlwr.emailOrLoginAuthorization, controller.userLogin);
authRouter.post('/logout', authMdlwr.validateTokenDynamically('accessToken'), controller.userLogoutSingleDevice);
authRouter.post('/logoutAll', authMdlwr.validateTokenDynamically('accessToken'), controller.userLogoutAllDevice);

authRouter.patch('/password/forgot', authMdlwr.validateActionToken(FORGOT_PASSWORD), controller.setForgotPassword );

authRouter.use(userMdlwr.getUserDynamically('email','body'));
authRouter.post('/refresh', authMdlwr.validateTokenDynamically('refreshToken'), controller.refreshToken);
authRouter.post('/password/forgot', controller.sendForgotPasswordEmail);

module.exports = authRouter;