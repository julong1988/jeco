import webpack from 'webpack';
import path from 'path';
import { walkSync } from '../../utils';
import projectConfig from '../../projectConfig';
import package from '../../../package.json';

const routes = [];

walkSync(path.resolve('./src/pages/'), (filePath) => {
  const isPage = /\.(js|jsx|ts|tsx)$/.test(filePath);
  if (isPage) {
    const fpo = path.parse(filePath);
    const routerPath = `${fpo.dir.replace(path.resolve('./src/pages'), '')}/${fpo.name}`;
    routes.push({ path: routerPath });
  }
});

const getVersion = () => {
  const versionSplitTexts = package.version.split('.');
  versionSplitTexts[2] = parseInt(versionSplitTexts[2], 10) + 1;
  return versionSplitTexts.join('.');
};

export default new webpack.DefinePlugin({
  jeco: JSON.stringify({
    MODE: process.env.NODE_ENV,
    ROUTES: routes,
    CONFIG: projectConfig,
    VERSION: getVersion(),
  }),
});
