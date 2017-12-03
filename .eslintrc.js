module.exports = {
  extends: ['airbnb', 'prettier'],
  root: true,
  rules: {
    'max-len': ['error', { ignoreUrls: true }],
    'object-curly-newline': [
      'error',

      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
      },
    ],
  },
};
