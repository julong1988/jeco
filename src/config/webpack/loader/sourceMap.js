import getLoader from './getLoader';

export default {
  enforce: 'pre',
  test: /\.(js|jsx|ts|tsx)$/,
  loader: getLoader('source-map-loader'),
  exclude: /node_modules/,
};
