module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/rocket2',

    ACCESS_TOKEH_SECRET: process.env.ACCESS_TOKEH_SECRET || 'ThIsMuStBeSeCrEtMaYbE_4ccess',
    REFRESH_TOKEH_SECRET: process.env.REFRESH_TOKEH_SECRET || 'ThIsMuStBeSeCrEtMaYbE_Refresh',
};