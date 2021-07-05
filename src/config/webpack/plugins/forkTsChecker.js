import path from 'path';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import tsconfig from '../../tsconfig';

export default new ForkTsCheckerPlugin({
  eslint: {
    files: `${path.resolve('./src')}/**/*.{ts,tsx,js,jsx}`,
    options: {
      configFile: path.resolve(__dirname, '../../eslintrc.js'),
    },
  },
  typescript: {
    configFile: path.resolve(__dirname, '../../../tsconfig.json'),
    configOverwrite: tsconfig,
  },
});
