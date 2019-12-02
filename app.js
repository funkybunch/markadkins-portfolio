const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const cron = require('node-cron');
const parse = require('node-html-parser');
const getJSON = require('get-json');
const writeJSON = require('write-json-file');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// Data Point Configs
const baltimore = "39.2904,-76.6122";

// Test .env Variables
console.log("Checking .env: " + process.env.PING);

function getWeather() {
  getJSON('https://api.darksky.net/forecast/' + process.env.DARK_SKY_KEY + '/' + baltimore, function(error, response){
    writeJSON('./data/weather.json', response);
  });
}

function getAllData() {
  console.log("Data fetched");
  getWeather();
}

// Initial Data Setup
getAllData();

cron.schedule('*/5 * * * *', () => {
  // Update data sources every 5 mins
  getAllData();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
