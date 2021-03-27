const express = require('express');
const morgan = require('morgan');

const app = express();

//environment variables
app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));

module.exports = app;