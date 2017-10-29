module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  root: true,
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
  },
};
