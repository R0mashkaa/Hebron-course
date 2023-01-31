const authService = require('./auth.service');
const userService = require('../user/user.service');
const { OAuthService, emailService } = require('../../services');
const { NO_CONTENT } = require('../../errors/error.codes');
const { BadRequest } = require('../../errors/Apierror');
const { FRONTEND_URL } = require('../../configs/variables');
const { FORGOT_PASSWORD } = require('../../configs/emailTypes.enum');
const { FORGOT_PASSWORD: forgotPasswordAction } = require('../../configs/actionTokenTypes.enum');

module.exports = {
    userLogin: async (req, res, next) => {
        try {
            const user = req.locals.user;

            if(user.accountStatus === 'Not activated') {
                throw new BadRequest('User not activated');
            }

            await OAuthService.checkPasswords(user.password, req.body.password);
            const tokenPair = OAuthService.generateAccessTokenPair( { ...user } );
            await authService.createOauthPair({ ...tokenPair, user: user._id });
			
            res.json({
                ...tokenPair,
                user
            });
        } catch (e) {
            next(e);
        }
    },

    userLogoutSingleDevice: async (req, res, next) => {
        try {
            const accessToken = req.get('Authorization');
            await authService.deleteOneByParams({ accessToken });
	
            res.status(NO_CONTENT).json('Logouted');
        } catch (e) {
            next(e);
        }
    },

    userLogoutAllDevice: async (req, res, next) => {
        try {
            await authService.deleteManyByParams({ user: req.user._id });

            res.status(NO_CONTENT).json('Logouted on all devices');
        } catch (e) {
            next(e);
        }
    },

    sendForgotPasswordEmail: async (req, res, next) => {
        try {
            const user = req.locals.user;
            const forgotPasswordToken = OAuthService.generateActionToken(
                forgotPasswordAction,
                { email: user.email }
            );
            
            await authService.createActionToken({
                actionType: forgotPasswordAction,
                tokenData: forgotPasswordToken,
                user: req.locals.user._id
            });

            const forgotPassURL = `${FRONTEND_URL}/password/forgot?token=${forgotPasswordToken}`;

            await emailService.sendMail('tsugelroman1998@gmail.com', FORGOT_PASSWORD, { forgotPassURL } );

            res.json('ok'); 
        } catch (e) {
            next(e);
        }
    },

    setForgotPassword: async (req, res, next) => {
        try {
            const { _id: userId } = req.user;

            const hashPassword = await OAuthService.hashPassword(req.body.password);
            await userService.updateUser(userId, { password: hashPassword });
            await authService.deleteManyByParams({ user: userId });
            
            res.json('ok'); 
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const user = req.user;
            const refreshToken = req.get('Authorization');

            await userService.deleteOneByParams({ refreshToken });
            const updatedTokenPair = OAuthService.generateAccessTokenPair({ ...user });

            await userService.createOauthPair({ ...updatedTokenPair, user: user._id });
            res.json({ 
                ...updatedTokenPair,
                user 
            });
        } catch (e) {
            next(e);
        }
    }
};