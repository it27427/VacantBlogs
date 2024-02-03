const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', {});
});

router.get('/register', (req, res) => {
  res.render('pages/register');
});

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.get('/blog', (req, res) => {
  res.render('pages/blog');
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

module.exports = router;
