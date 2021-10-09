const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>', path.resolve('./src/')],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      'babel-jest',
      {
        configFile: path.resolve(__dirname, 'babel.config.js'),
      },
    ],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|less|styl)$': `<rootDir>../node_modules/identity-obj-proxy`,
  },
  setupFiles: ['<rootDir>/jest/setupFiles.js'],
};
