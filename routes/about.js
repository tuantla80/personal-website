var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about/about', { title: 'About this website' });
});

module.exports = router;
