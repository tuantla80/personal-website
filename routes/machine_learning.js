var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('machine_learning/machine_learning', { title: 'Machine Learning' });
});

module.exports = router;
