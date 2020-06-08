'use strict';
/****************************** INIT DEPENDENCIES ******************************/
// npm dependencies
const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const routeHandler = require('./routes');

// init server application using express
const app = express();
// const http = require('http').Server(app);

/***************************** INIT CUSTOM MODULES *****************************/

/******************************* INIT MIDDLEWARE *******************************/

// Should allow us to use the assets inside the public folder in the client side codes
app.use(express.static(__dirname + '/game/'));

app.use(bodyparser.json());

/********************************* INIT SERVER *********************************/
routeHandler(app);

const http = require('http').createServer(app);

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log('Listening on port', port);
});