const path = require('path');

module.exports = {
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    '**/*.js',
    '!.*.js',
    '!**/*.*.js',
    '!test-results/**/*.js',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: path.resolve(__dirname, '../test-results'),
  rootDir: path.join(__dirname, '..'),
};
