import { Select } from 'enquirer';
import chalk from 'chalk';
import minimist from 'minimist';
import terminalLink from 'terminal-link';
import { execSync } from 'child_process';
import path from 'path';
import projectConfig from './projectConfig';

const argv = minimist(process.argv.slice(2));
// utils
const binPath = path.resolve(__dirname, '../node_modules/.bin');
const binPathRoot = path.resolve(__dirname);
const getEnvMode = (mode) => `${binPath}/cross-env NODE_ENV='${mode}' DOT_ENV='${argv.e || ''}'`;

const cmdChecker = `node ${binPathRoot}/jchecker`;
const cmdInit = `node ${binPathRoot}/init`;
const cmdWebpack = `${binPath}/webpack`;
const webpackConfig = `--config ${path.resolve(__dirname, '../config/webpack.config.js')}`;

const cmdEslint = `${binPath}/eslint`;
const eslintExt = `--ext .jsx,.js,.ts,.tsx`;
const eslintPath = `${path.resolve('./src')}`;
const eslintConfig =
  projectConfig.eslintConfigPath || `--config ${path.resolve(__dirname, '../config/eslintrc.js')}`;

const cmdJest = `${binPath}/jest`;
const jestConfig =
  projectConfig.jestConfigPath ||
  `--notify --config=${path.resolve(__dirname, '../config/jest.config.js')}`;

const scripts = {
  dev: `${getEnvMode('local')} ${cmdWebpack} serve ${webpackConfig}`,
  start: `${getEnvMode('local')} ${cmdWebpack} serve ${webpackConfig}`,
  build: `${getEnvMode('production')} ${cmdWebpack} ${webpackConfig}`,
  lint: `${cmdEslint} ${eslintExt} ${eslintPath} ${eslintConfig} && ${cmdChecker}`,
  fix: `${cmdEslint} --fix ${eslintExt} ${eslintPath} ${eslintConfig} && ${cmdChecker}`,
  test: `${cmdJest} ${jestConfig}`,
  analyz: `${getEnvMode('production')} REPORT=true ${cmdWebpack} ${webpackConfig}`,
  init: cmdInit,
};

const command = Object.keys(scripts);

console.log(terminalLink('github - ', 'https://github.com/jl917'));
// console.log(`cli_jr - path.resolve(__dirname) => `, path.resolve(__dirname));
// console.log(`cli_jr - __dirname => `, __dirname);
// console.log(`cli_jr - path.resolve(__dirname) => `, path.resolve('./'));

// arguments 지원하지 않은 경우
if (argv._[0] && !command.includes(argv._[0])) {
  console.log(chalk.red('지원하지 않는 명령입니다.'));
  console.log(chalk.blue('arguments를 확인해주세요.'));
  console.log(command);
  process.exit();
}

const run = async () => {
  const arg = !argv._[0]
    ? await new Select({
        name: 'type',
        message: '실행할 이벤트를 선택하세요.',
        choices: command,
      }).run()
    : argv._[0];
  return arg;
};

run()
  .then((option) => {
    execSync(scripts[option], { stdio: 'inherit' });
  })
  .catch(() => {
    // error
  });
