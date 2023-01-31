const userService = require('./user.service');
const User = require('../../dataBase/User');
const { joiValidatorSchema } = require('./user.validator');
const { NotFound, BadRequest, Conflict } = require('../../errors/ApiError');


module.exports = {
    accountConfirmation:  async (req, res, next) => {
        try {
            if(User.accountStatus === 'Not activated') {

            }

            next();
        } catch (e) {
            next(e);
        }
    },

    getUserDynamically: (paramName, from, dbField = paramName) => async (req, res, next) => {
        try {
            const searchData = req[from][paramName];
	
            const user = await userService.findUserByParams({ [dbField]: searchData });
	
            if (!user) {
                throw new NotFound('User not found');
            }
	
            req.locals = { ...req.locals, user };
	
            next();
        } catch (e) {
            next(e);
        }
    },

    joiValidator: async (req, res, next) => {
        try {
            const { error } = joiValidatorSchema.validate(req.body);
	
            if(error){
                throw new BadRequest(error);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
	
    isEmailAndLoginExsist:  async (req, res, next) => {
        try {
            const loginName = req.body?.loginName;
            const email = req.body?.email;

            if(await User.findOne({email})){
                throw new Conflict('This email used, try another one');
            }

            if(await User.findOne({loginName})){
                throw new Conflict('This login used, try another one');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    emailOrLoginAuthorization:  async (req, res, next) => {
        try {
            const loginData = req.body?.emailOrLogin;
            let dbField = 'loginName';

            if(loginData.includes('@')) {
                dbField = 'email';
            }

            const user = await userService.findUserByParams({ [dbField]: loginData });

            if (!user) {
                throw new NotFound('User not found');
            }

            req.locals = { ...req.locals, user };

            next();
        } catch (e) {
            next(e);
        }
    }
};