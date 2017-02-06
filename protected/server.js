'use strict';

// Constants
const PORT = 8080;

const Express = require('express');
const path = require('path');
const colors = require('colors');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};


const app = new Express();
/**
 * Init parsers
 */
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({});
});
app.use(allowCrossDomain);

/**
 * Set API endpoints
 */
app.use('/api', routes);


app.listen(PORT, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`==> \u2622  Prod Server is running on port `.rainbow + `${PORT};`.cyan,
        `Your project adress: http://localhost:${PORT}`.cyan);
  }
});
