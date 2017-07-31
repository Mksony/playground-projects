const express = require('express');

const { userRouter } = require('../routes/user');

const app = express();

app.use('/user', userRouter);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
