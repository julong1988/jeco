import path from 'path';
import { readFileSync } from 'fs';

const getPath = (filePath) => path.resolve(__dirname, '../', filePath);
const tsConfigRoot = JSON.parse(readFileSync(getPath('./tsconfig.json'), 'utf-8'));
let tsConfigSub;

try {
  tsConfigSub = JSON.parse(readFileSync(path.resolve('./tsconfig.json'), 'utf-8'));
} catch (error) {
  tsConfigSub = {};
}

export default {
  ...tsConfigRoot,
  ...tsConfigSub,
  compilerOptions: {
    ...tsConfigRoot.compilerOptions,
    ...tsConfigSub.compilerOptions,
    outDir: path.resolve('./_tmp/'),
    baseUrl: path.resolve('./'),
    typeRoots: [
      path.resolve('./node_modules/@types'),
      path.resolve('./types'),
      getPath('./node_modules/@types'),
      getPath('./types'),
    ],
    paths: {
      "@container/*": [path.resolve('./src/*')],
      "@root/*": [path.resolve('./container/*')],
    }
  },
  include: [
    path.resolve('./types/**/*'),
    path.resolve('./src/**/*'),
    getPath('./types/**/*'),
    getPath('./types/**/*'),
    getPath('./container/**/*'),
  ],
  exclude: [
    path.resolve('./node_modules'),
    path.resolve('./dist'),
    getPath('./node_modules'),
    getPath('./dist'),
  ],
};
