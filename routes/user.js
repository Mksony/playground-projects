const { Router } = require('express');

const router = Router();

router.get('/login', (req, res) => {
  res.send('This is the login view');
});

router.post('/login', (req, res) => {
  res.send('Welcome to the app');
});

module.exports = {
  userRouter: router,
};
