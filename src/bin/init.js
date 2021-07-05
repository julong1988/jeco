import { prompt } from 'enquirer';
import { writeFileSync, statSync } from 'fs';
import path from 'path';
import execa from 'execa';
import Listr from 'listr';

const installPackages = ['react', 'react-dom', '@types/react', '@types/react-dom'];
const installPackagesDev = ['@testing-library/react'];

async function run() {
  const projectConfigPath = path.resolve('./project.config.json');

  const projectConfig = await prompt([
    {
      type: 'input',
      name: 'entry',
      initial: './src/index.tsx',
      message: 'Entry file path',
    },
    {
      type: 'input',
      name: 'port',
      initial: '8080',
      message: 'Webpack dev server port',
    },
    {
      type: 'input',
      name: 'title',
      initial: 'Page title',
      message: 'Html title',
    },
    {
      type: 'input',
      name: 'template',
      initial: './src/app.html',
      message: 'Html template',
    },
  ]);

  try {
    if (statSync(projectConfigPath).isFile()) {
      console.log(`Project has config file - ${projectConfigPath}`);
      return '';
    }
  } catch {
    // error
  }
  // 실행
  const tasks = new Listr([
    {
      title: 'create package.json',
      task: () => execa('npm', ['init', '-y']),
    },
    {
      title: 'create project.config.json',
      task: () => writeFileSync(projectConfigPath, JSON.stringify(projectConfig, null, 2)),
    },
    {
      title: 'package install',
      task: () => execa('npm', ['install', '--save', ...installPackages]),
    },
    {
      title: 'package install dev',
      task: () => execa('npm', ['install', '--save', ...installPackagesDev]),
    },
  ]);

  tasks
    .run()
    .then(() => console.log('Success'))
    .catch((err) => {
      console.error(err);
    });

  return '';
}
run();
