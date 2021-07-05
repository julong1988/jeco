import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: [path.resolve('./dist')],
});
