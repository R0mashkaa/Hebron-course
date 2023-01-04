const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV || 'local'}`)});
global.rootPath = __dirname;

const mainRouter = require('./api/api.router');
const { PORT, MONGO_URL } = require('./configs/variables');
const { NotFound } = require("./errors/ApiError");
const { SERVER_ERROR } = require("./errors/error.codes");

const app = express();


mongoose.set('debug', true);
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL)
.then(()=> {console.log('Connected')})
.catch((e)=> {console.log(e)})


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', mainRouter);
app.use('*', notFoundError);
app.use(mainErrorHandler);

app.listen(PORT, () => {
  console.log('Listen', PORT);
});

function notFoundError(req, res, next) {
  next(new NotFound('Route not found'));
}

function mainErrorHandler(err, req, res, next) {
  res
    .status(err.status || SERVER_ERROR)
    .json({
      message: err.message || 'Unknown error'
    });
}