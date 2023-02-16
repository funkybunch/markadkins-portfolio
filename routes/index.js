let express = require('express');
let router = express.Router();
let path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/src/index.html');
});
router.get('/experience/*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/src/index.html');
});
router.get('/education/*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/src/index.html');
});
router.get('/jobs/stats', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '..') + '/src/index.html');
});
// COMING SOON
// router.get('/experience/tad', function(req, res, next) {
//   res.sendFile(path.resolve(__dirname, '..') + '/src/index.html');
// });

module.exports = router;
