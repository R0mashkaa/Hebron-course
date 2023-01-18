const authRouter = require('express').Router();

const controller = require('./auth.controller');
const authMdlwr = require('./auth.middleware');
const userhMdlwr = require('../user/user.middleware');

authRouter.post('/', userhMdlwr.getUserDynamically('email','body'), controller.UserAuthorization);

module.exports = authRouter;