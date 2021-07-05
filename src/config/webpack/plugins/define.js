import webpack from 'webpack';
import path from 'path';
import { walkSync } from '../../utils';
import projectConfig from '../../projectConfig';

const routes = [];

walkSync(path.resolve('./src/pages/'), (filePath) => {
  const isPage = /\.(js|jsx|ts|tsx)$/.test(filePath);
  if (isPage) {
    const fpo = path.parse(filePath);
    const routerPath = `${fpo.dir.replace(path.resolve('./src/pages'), '')}/${fpo.name}`;
    routes.push({ path: routerPath });
  }
});

export default new webpack.DefinePlugin({
  jeco: JSON.stringify({
    MODE: process.env.NODE_ENV,
    ROUTES: routes,
    CONFIG: projectConfig,
  })
});
