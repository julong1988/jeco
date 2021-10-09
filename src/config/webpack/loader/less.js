import CssWebpackPlugin from 'mini-css-extract-plugin';
import getLoader from './getLoader';
import postcss from './style_postcss';

export default {
  test: /\.less$/,
  use: [
    CssWebpackPlugin.loader,
    getLoader('css-loader'),
    postcss,
    {
      loader: getLoader('less-loader'),
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    },
  ],
};
