const path = require('path');

module.exports = {
  coverageReporters: ['text', 'html'],
  collectCoverageFrom: [
    '**/*.ts',
    '!.*.ts',
    '!**/*.*.ts',
    '!test-results/**/*.js',
  ],
  coverageDirectory: path.resolve(__dirname, '../test-results'),
  rootDir: path.join(__dirname, '..'),
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
