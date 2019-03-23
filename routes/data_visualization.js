var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('data_visualization/data_visualization', { title: 'Data Visualization' });
});

module.exports = router;
