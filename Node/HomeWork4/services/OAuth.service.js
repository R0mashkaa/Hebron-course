const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { BadRequest, Unauthorized } = require('../errors/Apierror');
const { ACCESS_TOKEH_SECRET, REFRESH_TOKEH_SECRET } = require ('../configs/variables');

const hashPassword = (userPassword) => bcrypt.hash(userPassword, 10);

const checkPasswords = async (hashedUserPassword, userPassword) => {
	const isPasswordsEquals = await bcrypt.compare(userPassword, hashedUserPassword); 

	if(!isPasswordsEquals){
		throw new BadRequest('Email or password is wrong');
	}
};

const generateAccessTokenPair = (encodeData = {}) => {
	const accessToken = jwt.sign(encodeData, ACCESS_TOKEH_SECRET, {expiresIn: '15m'});
	const refreshToken = jwt.sign(encodeData, REFRESH_TOKEH_SECRET, {expiresIn: '30d'});


	return {
		accessToken,
		refreshToken
	};
};

const validateAccessToken = (accessToken = '') => {
	try{
		return jwt.verify(accessToken, ACCESS_TOKEH_SECRET); 
	}
	catch(e){
		throw new Unauthorized(e.message || 'Token is invalid');
	}
	
};



module.exports = {
	hashPassword,
	checkPasswords,
	
	generateAccessTokenPair,
	validateAccessToken,
};