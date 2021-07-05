import getLoader from './getLoader';

export default {
  loader: getLoader('css-loader'),
  options: {
    modules: {
      localIdentName: '[hash:base64:16]',
    },
  },
};
