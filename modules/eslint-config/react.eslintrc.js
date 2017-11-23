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
        multiline: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
