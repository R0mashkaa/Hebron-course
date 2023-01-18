const OAuth = require('../../database/OAuth');

module.exports = {

	createOAuthPair: (tokenData) => {
		return OAuth.create(tokenData);
	},

	getByParams: (searchData = {}) => {
		return OAuth.findOne(searchData);
	}

};