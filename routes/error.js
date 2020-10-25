let express = require('express');
let router = express.Router();
let path = require('path');

/* GET 404 Page */
router.get('*', function(req, res){
    res.status(404);
    res.sendFile(path.resolve(__dirname, '..') + '/src/error.html');
});

module.exports = router;
