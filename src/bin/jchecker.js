import { outputJsonSync, removeSync } from 'fs-extra';
import { execSync } from 'child_process';
import path from 'path';
import tsconfig from './tsconfig';

// utils
const binPath = path.resolve(__dirname, '../node_modules/.bin');
const cmdTsc = `${binPath}/tsc`;
const tsOption = `--project ${path.resolve(__dirname, '../tmp/tsconfig.json')} --noEmit`;

// create tsconfig file
const tmpPath = path.resolve(__dirname, '../tmp/tsconfig.json');
outputJsonSync(tmpPath, tsconfig);

// run scripts
try {
  execSync(`${cmdTsc} ${tsOption}`, { stdio: 'inherit' });
} catch {
  // error
}

// remove tsconfig file
removeSync(tmpPath);
