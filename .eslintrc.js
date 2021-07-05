const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    useJSXTextNode: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    'browser': true,
    'node': true,
    'es6': true
  },
  rules: {
    'prettier/prettier': ['error'],
    'max-len': ['error', { 'code': 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'no-param-reassign': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'no-console': ['off'],
  },
  globals: {
    MODE: 'readonly'
  }
}