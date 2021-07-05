import path from 'path';
import { readFileSync } from 'fs';

// eslint-disable-next-line
let projectConfig = {};
try {
  projectConfig = JSON.parse(readFileSync(path.resolve('./project.config.json'), 'utf8'));
} catch {
  projectConfig = {};
}

export default projectConfig;
