import CssWebpackPlugin from 'mini-css-extract-plugin';
import postcss from './style_postcss';
import getLoader from './getLoader';

export default {
  test: /\.css$/,
  use: [CssWebpackPlugin.loader, getLoader('css-loader'), postcss],
};
