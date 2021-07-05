import getLoader from './getLoader';

export default {
  test: /\.(jpg|png|svg|gif)$/,
  loader: getLoader('file-loader'),
};
