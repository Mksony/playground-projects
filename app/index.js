const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const { logger } = require('../tools/logger');
const { authRouter } = require('../routes/auth');

const app = express();

app.use(compression());
app.use(morgan('dev', { stream: logger.stream }));
app.use('/auth', authRouter);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
