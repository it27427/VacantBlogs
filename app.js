const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');

// IMPORT-ROUTES
const staticRoute = require('./routes/staticRoutes');
const userRoute = require('./routes/userRoutes');

app.use('/', staticRoute);
app.use('/user', userRoute);

// app.use('cors');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.set('view engine', 'ejs');

module.exports = app;
