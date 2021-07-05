import getLoader from './getLoader';
import tsconfig from '../../tsconfig';

export default {
  test: /\.(js|jsx|ts|tsx)$/,
  loader: getLoader('esbuild-loader'),
  options: {
    loader: 'tsx',
    tsconfigRaw: tsconfig,
  },
};
