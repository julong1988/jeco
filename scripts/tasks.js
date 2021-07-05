const fs = require('fs');
const path = require('path');
const execa = require('execa');
const package = require('../package.json');

const buildBins = [
  {
    title: 'remove bin folder',
    task: () => execa('rm', ['-rf', 'bin'])
  },
  {
  	title: 'bin generator',
  	task: () => execa('npx', ['tsc', '-build', './buildEnv/tsconfig.bin.json'])
  },
  {
  	title: 'add bin Hashbang',
  	task: () => execa('npx', ['babel', 'bin', '--config-file', './buildEnv/babelconfig.bin.js', '--out-dir', './bin'])
  },
]

const buildConfigs = [
  {
    title: 'remove config folder',
    task: () => execa('rm', ['-rf', 'config'])
  },
  {
  	title: 'config generator',
  	task: () => execa('npx', ['tsc', '-build', './buildEnv/tsconfig.node.json'])
  },
  {
  	title: 'minify config',
  	task: () => execa('npx', ['babel', 'config', '--config-file', './buildEnv/babelconfig.node.js', '--out-dir', './config'])
  },
]

const buildAllTasks = [
  ...buildBins,
  ...buildConfigs,
];

const versionUpdateTasks = [
  {
    title: 'package version update',
    task: () => {
      package.version = package.version.split('.').map((e, i) => i === 2 ? `${parseInt(e, 10) + 1}` : e).join('.');
      fs.writeFileSync(
        path.resolve(__dirname, '../package.json'),
        new Uint8Array(Buffer.from(JSON.stringify(package, null, 2)))
      );
    },
  },
  {
    title: '[Git] add package.json',
    task: () => execa('git', ['add', './'])
  },
  {
    title: '[Git] Commits next package version',
    task: () => execa('git', ['commit', '-m', `Commits next package version: ${package.version}`])
  },
  {
    title: '[Git] Push',
    task: () => execa('git', ['push'])
  },
]

module.exports = {
  buildBins,
  buildConfigs,
  buildAllTasks,
  versionUpdateTasks,
}