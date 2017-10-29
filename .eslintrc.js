module.exports = {
  extends: ['airbnb', 'prettier'],
  root: true,
  rules: {
    'max-len': ['error', { code: 50, ignoreUrls: true }],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
      },
    ],
  },
};
