const apiRouter = require('express').Router();

const userRouter = require('./user/user.router');
const authRouter = require('./authorization/auth.router');
const accountRouter = require('./account.router');

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/account', accountRouter);


module.exports = apiRouter;