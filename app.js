const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// app.use('cors');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
});

app.post('/', (req, res) => {
  const userName = req.body.userName;
  res.redirect('/');
});

module.exports = app;
