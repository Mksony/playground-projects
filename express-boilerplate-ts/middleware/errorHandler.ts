import * as PrettyError from 'pretty-error';

const pe = new PrettyError();
const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
pe.skipNodeFiles();
pe.skipPackage('express', 'morgan', 'winston');

function errorLogger(err, req, res, next) {
  if (isTest) {
    return next(err);
  }
  if (isProduction) {
    // TODO: Add logging to /var/log/node/error.log here
  } else {
    console.log(pe.render(err)); // eslint-disable-line no-console
  }
  return next(err);
}
// eslint-disable-next-line no-unused-vars
function errrorHandler(err, req, res, next) {
  const error = {
    error: err.message,
    stacktrace: err.stack,
  };
  if (isProduction) {
    delete error.stacktrace;
  }
  res.status(err.status || 500);
  res.json(error);
}

// To render exceptions thrown in non-promies code:
process.on('uncaughtException', error => {
  console.log(pe.render(error)); // eslint-disable-line no-console
});
// To render unhandled rejections created in BlueBird:
process.on('unhandledRejection', reason => {
  console.log('Unhandled rejection'); // eslint-disable-line no-console
  console.log(pe.render(reason)); // eslint-disable-line no-console
});

export default [errorLogger, errrorHandler];
