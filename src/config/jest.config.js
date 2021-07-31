const path = require('path');
// const alias = require('./alias');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>', path.resolve('./src/')],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': `ts-jest`,
  },
  moduleNameMapper: {
    // ...alias.default,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|less|styl)$': `<rootDir>../node_modules/identity-obj-proxy`,
  },
  setupFiles: ['<rootDir>/jest/setupFiles.js'],
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      useESM: true,
    },
  },
};
