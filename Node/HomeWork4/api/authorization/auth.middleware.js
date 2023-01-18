const OAuthSerivce = require('../../services/OAuth.service');
const service = require('./auth.service');
const { Unauthorized } = require('../../errors/ApiError');


module.exports = {

	validateAccessToken: async (req, res, next) => {
		try {
			const accessToken = req.get('Authorizatioh');
			
			if(!accessToken){
				throw new Unauthorized('Token doesn`t exist');
			}
			
			OAuthSerivce.validateAccessToken(accessToken);
			await service.getByParams( {accessToken} ); 

			next();
		} catch (e) {
			next(e);
		}
	},

};


