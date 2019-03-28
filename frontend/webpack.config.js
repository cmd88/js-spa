const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  context: `${__dirname}/app`,
  entry: './app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css!sass',
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose',
          options: '$'
        }],
      }
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
          warnings: true,
        },
      }),
    ],
  },

  plugins: [
    new WebpackCleanupPlugin(), // cleans files from the webpack's output path
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin([
      { from: 'sw.js', to: 'sw.js' },
    ]),
  ],

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    inline: true,
    open: true,
    port: 3011,
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    config.plugins.push(new HtmlMinifierPlugin());
  }

  return config;
};