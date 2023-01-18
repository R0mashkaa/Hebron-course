const userService = require('./user.service');
const User = require('../../dataBase/User');
const { newUserSchema } = require('./user.validator');
const { EMAIL_REGEXP, LOGIN_REGEXP } = require('../../configs/regexp.enum');
const { NotFound, BadRequest, Conflict } = require('../../errors/ApiError');


module.exports = {
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
			const { error } = newUserSchema.validate(req.body);
	
			if(error){
				throw new BadRequest(error);
			}

			next();
		} catch (e) {
			next(e);
		}
	},
	

	checkIsValidInfo:  async (req, res, next) => {
		try {
			const loginName = req.body?.loginName;
			const email = req.body?.email;
			const password = req.body?.password;
			const age = req.body.age;

			if(!email.match(EMAIL_REGEXP)){
				throw new BadRequest('Invalid email symbols');
			}

			if(await User.findOne({email})){
				throw new Conflict('This email used, try another one');
			}

			if(!loginName.match(LOGIN_REGEXP)){
				throw new BadRequest('Invalid login symbols');
			}

			if(await User.findOne({loginName})){
				throw new Conflict('This login used, try another one');
			}

			if(password.length <= 8){ 
				throw new BadRequest('Poor password entered!');
			}

			if(age < 14 || age > 99){
				throw new BadRequest(`Error. Your age is ${age}?`);
			}

			next();
		} catch (e) {
			next(e);
		}
	},
};