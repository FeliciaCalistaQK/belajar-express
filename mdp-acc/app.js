var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require("./app_api/models/db");

const cors = require('cors')
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var prodiRouter = require('./app_server/routes/prodi');   
var app = express();
const expressLayout = require("express-ejs-layouts"); // import modul express-ejs-layout
const fakultasRouter = require("./app_api/routes/fakultas");
const ProdiRouter = require("./app_api/routes/prodi");
// view engine setup
app.set('views', path.join(__dirname,'app_server','views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));1
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayout);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prodi',prodiRouter);
app.use("/api/fakultas", fakultasRouter);
app.use("/api/prodi", ProdiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
connectDB();
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
