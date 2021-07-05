import CssWebpackPlugin from 'mini-css-extract-plugin';
import css from './style_css';
import postcss from './style_postcss';

export default {
  test: /\.css$/,
  use: [CssWebpackPlugin.loader, css, postcss],
};
