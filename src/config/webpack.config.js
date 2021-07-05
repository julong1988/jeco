import path from 'path';
import loader from './webpack/loader';
import plugins from './webpack/plugins';
import projectConfig from './projectConfig';
import alias from './alias';
// console.log(`webpack - path.resolve(__dirname) => `, path.resolve(__dirname));
// console.log(`webpack - __dirname => `, __dirname);
// console.log(`webpack - path.resolve(./) => `, path.resolve('./'));
const env = process.env.DOT_ENV;

const config = {
  entry: projectConfig.entry || path.resolve(__dirname, '../container/index.tsx'),
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      ...alias,
      '@root': path.resolve(__dirname, '../container'),
      '@container': path.resolve('./src'),
    },
    fallback: {
      path: require.resolve('path-browserify'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  mode: 'production',
  module: {
    rules: [loader.esbuild, loader.css, loader.stylus, loader.file, loader.less, loader.sass],
  },
  plugins: [
    plugins.clean,
    plugins.css,
    plugins.html,
    plugins.hotModuleReplacement,
    plugins.define,
    plugins.progressBar,
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
  // stats: 'minimal'
};

if (projectConfig.micro) {
  config.output.library = `${projectConfig.micro.projectId}_lib`;
  config.output.libraryTarget = 'umd';
  config.output.publicPath = projectConfig.micro.publicPath[env];
  if (projectConfig.micro.isRuntimeAssets) {
    config.plugins.push(plugins.runtimeAssets);
  }
}

if (process.env.REPORT) {
  config.plugins.push(plugins.analyz);
}

if (process.env.DOT_ENV) {
  config.plugins.push(plugins.dotenv);
}

if (process.env.NODE_ENV === 'local') {
  config.devtool = 'source-map';
  config.mode = 'development';
  config.devServer = {
    contentBase: path.resolve('./dist'),
    host: 'localhost',
    hot: true,
    port: projectConfig.port || 8080,
    historyApiFallback: true,
    compress: true,
    noInfo: true,
  };
  config.plugins.push(plugins.forkTsChecker);
  config.module.rules.push(loader.sourceMap);
}

export default process.env.SMP === 'smp' ? plugins.speedMeasure.wrap(config) : config;
