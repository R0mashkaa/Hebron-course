const service = require('./auth.service');
const OAuthService = require('../../services/OAuth.service');


module.exports = {
	UserAuthorization: async (req, res, next) => {
		try {
			const user = req.locals.user;

			await OAuthService.checkPasswords(user.password, req.body.password);
			const tokenPair = OAuthService.generateAccessTokenPair( { ...user} );
			await service.createOAuthPair({ ...tokenPair, user: user._id });
			
			res.json({
				...tokenPair,
				user
			});
		} catch (e) {
			next(e);
		}
	},

};