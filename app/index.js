const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const createError = require('http-errors');

const errorHandler = require('../middleware/errorHandler');
const { logger } = require('../tools/logger');
const { authRouter } = require('../routes/auth');

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan('dev', { stream: logger.stream }));

app.use('/auth', authRouter);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res, next) => {
  const err = new createError.Forbidden();
  next(err);
});
app.use(errorHandler);

module.exports = app;
