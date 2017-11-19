const path = require('path');

module.exports = {
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    '**/*.js',
    '!.*.js',
    '!**/*.*.js',
    '!test-results/**/*.js',
  ],
  coverageDirectory: path.resolve(__dirname, '../test-results'),
  rootDir: path.join(__dirname, '..'),
};
