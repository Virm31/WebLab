let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let logger = require('morgan');

// Подключение обработчиков маршрутов
let homePageRouter = require('./routes/HomePage');
let sendRouter = require('./routes/SendRecipe');
let pieRouter = require('./routes/CherryPie');
let contactrequestRouter = require('./routes/ContactRequest');
let loginRouter = require('./routes/Login');
let registerRouter = require('./routes/Register');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  key: 'user_sid',
  secret: 'anypassword',
  resave: false,
  saveUninitialized: true,
  cookie: {
    signed: false,
    maxAge: 600000
  }
}));

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// Привязка обработчиков маршрутов к маршрутам
app.use('/', homePageRouter);
app.use('/SendRecipe', sendRouter);
app.use('/CherryPie', pieRouter);
app.use('/api/ContactRequest', contactrequestRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

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
