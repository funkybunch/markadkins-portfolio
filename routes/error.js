var express = require('express');
var router = express.Router();
var path = require('path');

/* GET 404 Page */
router.get('*', function(req, res){
    res.status(404);
    res.sendFile(path.resolve(__dirname, '..') + '/public/error.html');
});

module.exports = router;
