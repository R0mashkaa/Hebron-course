const service = require('./auth.service');
const OAuthService = require('../../services/OAuth.service');
const { NO_CONTENT } = require('../../errors/error.codes');

module.exports = {
    userLogin: async (req, res, next) => {
        try {
            const user = req.locals.user;

            await OAuthService.checkPasswords(user.password, req.body.password);
            const tokenPair = OAuthService.generateAccessTokenPair( { ...user } );
            await service.createOauthPair({ ...tokenPair, user: user._id });
			
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
            await service.deleteOneByParams({ accessToken });
	
            res.status(NO_CONTENT).json('Logouted');
        } catch (e) {
            next(e);
        }
    },

    userLogoutAllDevice: async (req, res, next) => {
        try {
            await service.deleteManyByParams({ user: req.user._id });

            res.status(NO_CONTENT).json('Logouted on all devices');
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const user = req.user;
            const refreshToken = req.get('Authorization');

            await service.deleteOneByParams({ refreshToken });
            const updatedTokenPair = OAuthService.generateAccessTokenPair({ ...user });

            await service.createOauthPair({ ...updatedTokenPair, user: user._id });
            res.json({ 
                ...updatedTokenPair,
                user 
            });
        } catch (e) {
            next(e);
        }
    },
};











