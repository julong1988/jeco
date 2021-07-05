import path from 'path';
import getLoader from './getLoader';

export default {
  loader: getLoader('postcss-loader'),
  options: {
    postcssOptions: {
      config: path.resolve(__dirname, '../../../config/postcss.config.js'),
    },
  },
};
