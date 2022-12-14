const userService = require('./user.service');
const { NotFound, BadRequest, Conflict } = require('../../errors/ApiError');
const User = require('../../dataBase/User');

module.exports = {
  
	cheksIsUserExsist: async (req, res, next) => {
		try {
			const user = await userService.getSingleUser(req.params.userId);
	
			if (!user) {
				throw new NotFound('User not found');
			}
	
			req.user = user;
	
			next();
		} catch (e) {
			next(e);
		}
	},

	checkIsValidInfo:  async (req, res, next) => {
		try {
			const password = req.body?.password;
			const email = req.body?.email;
			const age = req.body.age;

			const validSymbols =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
			if(!email.match(validSymbols)){
				throw new BadRequest('Invalid email symbols');
			}

			if(await User.findOne({email})){
				throw new Conflict('This email used, try another one');
			}

			if(password.length <= 8){ 
				throw new BadRequest('Poor password entered!');
			}

			if(age < 5 || age > 99){
				throw new BadRequest(`Error. Your age is ${age}?`);
			}

			next();
		} catch (e) {
			next(e);
		}
	},
};