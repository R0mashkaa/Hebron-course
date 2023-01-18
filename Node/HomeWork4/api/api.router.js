const apiRouter = require('express').Router();

const userRouter = require('./user/user.router');
const authRouter = require('./authorization/auth.router');

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);

module.exports = apiRouter;