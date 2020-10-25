const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const cron = require('node-cron');
const request = require("request");
const parseHTML = require('node-html-parser');
const ParseXML = require('rss-parser');
const getJSON = require('get-json');
const wiki = require('wikijs').default;
const writeJSON = require('write-json-file');
const Twitter = require('twitter');
const fs = require('fs');

const offlineMode = false;

let spaRouter = require('./routes/index');
let errorRouter = require('./routes/error');

let app = express();

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
app.use('/', spaRouter);
app.use('/experience/bellese', spaRouter);
app.use('/experience/accenture', spaRouter);
app.use('/experience/digikomp', spaRouter);
// app.use('/experience/tad', spaRouter);
app.use('*', errorRouter);

module.exports = app;
