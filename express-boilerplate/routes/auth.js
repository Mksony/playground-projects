const { Router } = require('express');

const router = Router();

router.get('/login', (req, res) => {
  res.send('This is the login view');
});

router.post('/login', (req, res) => {
  res.send('Welcome to the app');
});

router.post('/register', (req, res) => {
  res.send('User created');
});

router.get('/logout', (req, res) => {
  res.send('User logged out');
});

module.exports = {
  authRouter: router,
};
