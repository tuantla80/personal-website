var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('MEAN/MEAN', { title: 'MEAN (MongoDB, Express, Angular, Node.js' });
});

module.exports = router;
