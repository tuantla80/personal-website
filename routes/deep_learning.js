var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('deep_learning/deep_learning', { title: 'Deep Learning' });
});

module.exports = router;
