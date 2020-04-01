let express = require('express');
let router = express.Router();
let path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/public/index.html');
});
router.get('/experience/bellese', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/public/index.html');
});
router.get('/experience/accenture', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/public/index.html');
});
router.get('/experience/digikomp', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/public/index.html');
});
router.get('/experience/tad', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/public/index.html');
});

module.exports = router;
