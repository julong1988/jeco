const path = require('path');
const tsConfig = require('../tsconfig.json');
const prettierConfig = require('./prettier.config.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: {
      ...tsConfig,
      compilerOptions: {
        ...tsConfig.compilerOptions,
        outDir: path.resolve('./_tmp/'),
        typeRoots: [path.resolve('./node_modules/@types'), path.resolve('./types')],
        baseUrl: path.resolve('./'),
      },
      include: [path.resolve('./types/**/*'), path.resolve('./src/**/*')],
      exclude: [path.resolve('./node_modules'), path.resolve('./dist')],
    },
    useJSXTextNode: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'max-len': ['error', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'no-use-before-define': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
  },
  globals: {
    MODE: 'readonly',
  },
};
