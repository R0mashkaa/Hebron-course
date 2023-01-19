const OAuthService = require('../../services/OAuth.service');
const service = require('./auth.service');
const { Unauthorized } = require('../../errors/ApiError');


module.exports = {

    validateTokenDynamically: (tokenType) => async (req, res, next) => {
        try {
            const token = req.get('Authorization');
			
            if(!token){
                throw new Unauthorized('Token doesn`t exist');
            }
			
            OAuthService.validateToken(tokenType, token);

            const tokenWithUser = await service.getByParams({ token });
      
            if (!tokenWithUser) {
                throw new Unauthorized('Token is invalid');
            }
      
            req.user = tokenWithUser.user;
            next();
        } catch (e) {
            next(e);
        }
    },

};


