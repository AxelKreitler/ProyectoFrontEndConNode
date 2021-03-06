var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var postRouter = require('./routes/post');
var newpostRouter = require('./routes/newpost');
var searchRouter = require('./routes/search');
var theFogRouter = require('./routes/the-fog');
var rampageOfTheDeadRouter = require('./routes/rampage-of-the-dead');
var logoutRouter = require('./routes/logout');
var socialRouter = require('./routes/social');
var setProfileRouter = require('./routes/set-profile');
var commentsRouter = require('./routes/comments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret:'123clave',saveUninitialized: true ,cookie:{maxAge: null}}));
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/post', postRouter);
app.use('/newpost', newpostRouter);
app.use('/search', searchRouter);
app.use('/the-fog', theFogRouter);
app.use('/rampage-of-the-dead', rampageOfTheDeadRouter);
app.use('/logout', logoutRouter);
app.use('/social', socialRouter);
app.use('/set-profile', setProfileRouter);
app.use('/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
