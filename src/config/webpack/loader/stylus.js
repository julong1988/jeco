import CssWebpackPlugin from 'mini-css-extract-plugin';
import getLoader from './getLoader';
import css from './style_css';
import postcss from './style_postcss';

export default {
  test: /\.styl$/,
  use: [CssWebpackPlugin.loader, css, postcss, getLoader('stylus-loader')],
};
