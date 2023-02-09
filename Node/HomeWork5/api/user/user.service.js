const User = require('../../dataBase/User');
const Avatar = require('../../dataBase/userAvatar');
const { OAuthService } = require('../../services');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },
  
    getSingleUser: async (userId) => {
        return await User.findById(userId);
    },

    findUserByParams: (searchObject) => {
        return User.findOne(searchObject);
    },
  
    createUser: async (userObject) => {
        const hashPassword = await OAuthService.hashPassword(userObject.password);
        return User.create({ ...userObject, password: hashPassword });
    },

    updateUser: async (userId, userNewData) => {
        return User.findByIdAndUpdate(userId, userNewData);
    },

    deleteUser: async (userId) => {
        return  User.findByIdAndRemove(userId);
    },


    addUserAvatar: async (photoLink, userId) => {
        return Avatar.create( {avatarLink: photoLink, user: userId });
    },

    getAvatarList: async (userId) => {
        const data = await Avatar.find(userId);
        return data.map((avatar) => {
            return {
                'Link to avatar': avatar.avatarLink,
                'ID of avatar': avatar.id
            };
        });
    },

    findAvatarById: async (avatarId) => {
        const data = await Avatar.find(avatarId);
        return data.map((avatar) => avatar.avatarLink );
    },

};