/* TODO: Add handling for production and development
  * Dont leak stacktrace in production
  * Add errorlog
  * Add pretty error
*/

module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const error = {
    error: err.message,
    stacktrace: err.stack,
  };
  if (process.env.NODE_ENV === 'production') {
    delete error.stacktrace;
  }
  res.status(err.status || 500);
  res.json(error);
};
