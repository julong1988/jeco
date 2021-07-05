import getLoader from './getLoader';

export default {
  test: /\.jsx?$/,
  loader: getLoader('babel-loader'),
};
