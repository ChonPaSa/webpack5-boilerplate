const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          { loader: 'css-loader', options: { sourcermap: true } },
          { loader: 'postcss-loader', options: { sourcermap: true } },
          { loader: 'sass-loader', options: { sourcermap: true } },
        ],
      },
    ],
  },
});
