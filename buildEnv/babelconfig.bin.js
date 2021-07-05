const babelHashbangPlugin = require('../src/utils/babelHashbangPlugin');

const config = {
  presets: [
    [
      'minify',
      {
        removeConsole: false,
      }
    ]
  ],
  plugins: [
    [babelHashbangPlugin, {hashbang: '/usr/bin/env node'}]
  ]
};

module.exports = config;