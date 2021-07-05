import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import projectConfig from '../../projectConfig';

export default new HtmlWebpackPlugin({
  title: projectConfig.title || 'Page title',
  filename: 'index.html',
  template: projectConfig.template || path.resolve(__dirname, '../../../container/app.html'),
});
