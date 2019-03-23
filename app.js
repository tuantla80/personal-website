var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var blockchainRouter = require('./routes/blockchain');
var cvRouter = require('./routes/cv');
var data_visualizationRouter = require('./routes/data_visualization');
var deep_learningRouter = require('./routes/deep_learning');
var machine_learningRouter = require('./routes/machine_learning');
var MEANRouter = require('./routes/MEAN');
var statistical_modelRouter = require('./routes/statistical_model');
var tibco_spotfireRouter = require('./routes/tibco_spotfire');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/blockchain', blockchainRouter);
app.use('/cv', cvRouter);
app.use('/data_visualization', data_visualizationRouter);
app.use('/deep_learning', deep_learningRouter);
app.use('/machine_learning', machine_learningRouter);
app.use('/deep_learning', deep_learningRouter);
app.use('/MEAN', MEANRouter);
app.use('/statistical_model', statistical_modelRouter);
app.use('/tibco_spotfire', tibco_spotfireRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // to render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
