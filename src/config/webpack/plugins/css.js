import CssWebpackPlugin from 'mini-css-extract-plugin';

export default new CssWebpackPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});
