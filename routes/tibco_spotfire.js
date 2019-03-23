var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('tibco_spotfire/tibco_spotfire', { title: 'Tibco Spotfire' });
});

module.exports = router;
