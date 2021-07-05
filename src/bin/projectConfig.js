import path from 'path';
import { readFileSync } from 'fs';

// eslint-disable-next-line
let projectConfig = {};
try {
  projectConfig = JSON.parse(readFileSync(path.resolve('./project.config.json'), 'utf8'));
} catch {
  projectConfig = {
    title: 'Page title',
    entry: './src/index.tsx',
    port: '8080',
    template: path.resolve(__dirname, '../container/app.html'),
  };
}

export default projectConfig;
