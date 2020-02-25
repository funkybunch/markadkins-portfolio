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

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// Data Point Configs
const baltimore = "39.2904,-76.6122";

// Test .env Variables
console.log("Checking .env: " + process.env.PING);

function getWeather() {
  getJSON('https://api.darksky.net/forecast/' + process.env.DARK_SKY_KEY + '/' + baltimore, function(error, response){
    writeJSON('./data/weather.json', response.currently);
  });
}

function getSupermoon() {
  getJSON('https://isitasupermoon.com/api/v1.0/', function(error, response){
    writeJSON('./data/supermoon.json', response);
  });
}

function getTweets() {
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  client.get('statuses/user_timeline', {screen_name: "markadkn", count: 10}, function(error, tweets, response) {
    if(!error) {
      writeJSON('./data/tweets.json', tweets);
    }
  });
}

function getWikis() {
  let wikiData = {};

  // Articles we're searching
  wikiData.TLE = {};
  wikiData.CAPCOM = {};

  wiki()
      .page('Two-line element set')
      .then(page => {
        wikiData.TLE.title = page.raw.title;
        wikiData.TLE.url = page.raw.fullurl;
        wikiData.TLE.updated = page.raw.touched;
        return page;
      })
      .then(page => page.summary())
      .then(summary => {
        wikiData.TLE.summary = summary;
        writeJSON('./data/wiki-tle.json', wikiData.TLE);
      });

  wiki()
      .page('Flight_controller')
      .then(page => {
        wikiData.CAPCOM.url = page.raw.fullurl;
        wikiData.CAPCOM.updated = page.raw.touched;
        return page;
      })
      .then(page => page.sections())
      .then(sections => {
        wikiData.CAPCOM.title = sections[1].items[2].title;
        wikiData.CAPCOM.summary = sections[1].items[2].content;
        writeJSON('./data/wiki-capcom.json', wikiData.CAPCOM);
      });
}

function getMediumFeed() {
  let parser = new ParseXML();
  parser.parseURL('https://medium.com/feed/@markadkins/', function(error, feed) {
    writeJSON('./data/blogFeed.json', feed);
  })
}

function getBelleseJobs() {
    let jobSource;
    let postings;
    let output = [];
    let parseError = false;
    let params = {
        design: ['design', 'research'],
        engineering: ['engineer', 'develop']
    };

    request({uri: "https://bellese.io/careers/"}, function(error, response, body) {
        jobSource   = parseHTML.parse(body);
        try {
            postings    = jobSource.querySelector('.toggles').childNodes;
            for(let i = 0; i < postings.length; i++) {
                let position = postings[i].childNodes[0].childNodes[0].childNodes[1].rawText;
                output[i] = {};
                output[i].index = i;
                output[i].title = position;
                output[i].description = postings[i].childNodes[1].childNodes[1].childNodes[1].innerHTML.replace(/\r?\t|\r|\t/g, '');

                let category = "other";
                for(let item in params) {
                    for(let j = 0; j < params[item].length; j++) {
                        if(position.toLowerCase().includes(params[item][j])) {
                            category = item;
                        }
                    }
                }
                output[i].category = category;
                output[i].action = "View Description";
                output[i].icon = '/images/icons/icon-' + category + '.svg';
            }
        } catch(e) {
            parseError = true;
            console.log("Parse Error: Bellese Jobs failed to write to local file");
        }
        if(!error && !parseError) {
            writeJSON('./data/jobs.json', output);
            console.log("Parse Success: Bellese Jobs data written to local file");
        }
    });
}

function getCAPCOMData() {
    if(!offlineMode) {
        getJSON('https://capcom.io/api/coords/ISS%20(ZARYA)/?key=' + process.env.CAPCOM_API_KEY, function(error, response){
            writeJSON('./data/iss.json', response);
            let output = {};
            output.iss = response
            writeJSON('./public/js/flight.json', output);
        });

        // Update ISS location every 5 seconds and store locally
        (function(){
            setTimeout(getCAPCOMData, 5000);
        })();
    }
}

function getAllData() {
    if(!offlineMode){
        // ISS Data is intentionally excluded from this function
        // because it needs to be updated more frequently
        getWeather();
        getSupermoon();
        getTweets();
        getWikis();
        getMediumFeed();
        getBelleseJobs();
        let output = {};
        let jobsFile = fs.readFileSync('./data/jobs.json');
        output.jobs = JSON.parse(jobsFile);
        writeJSON('./public/js/data.json', output);
        console.log("Data fetched");
    } else {
        console.log("Running in offline mode.  Data not fetched.");
    }
}

// Initial Data Setup
getAllData();
getCAPCOMData();

// Update data sources every 5 mins
cron.schedule('*/5 * * * *', () => {
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

module.exports = app;
