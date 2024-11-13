var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { MongoClient } = require('mongodb');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customersRouter = require('./routes/customers'); // Importieren des Kundenrouters
var roomsRouter = require('./routes/rooms');
var newaccountRouter = require('./routes/new-account');
var loginRouter = require('./routes/login');
var supplierRouter = require('./routes/supplier');

var app = express();
app.use(cors());

// Ersetzen Sie dies mit Ihrer MongoDB-Verbindungs-URL
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'flexiwork';

const client = new MongoClient(mongoUrl);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Erfolgreich mit MongoDB verbunden');
    app.locals.db = client.db(dbName); // Ersetzen Sie dies mit Ihrem Datenbanknamen
  } catch (error) {
    console.error('Fehler beim Verbinden mit MongoDB:', error);
    process.exit(1); // Beendet den Prozess bei einem Fehler
  }
}
connectToMongoDB().then(() => {

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/customers', customersRouter);
  app.use('/rooms', roomsRouter);
  app.use('/new-account', newaccountRouter);
  app.use('/login', loginRouter);
  app.use('/supplier', supplierRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});

module.exports = app;
