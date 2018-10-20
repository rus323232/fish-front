const webpack = require('webpack');
const Merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Merge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[local]_[hash:base64:3]',
              modules: true,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/[id].css'
    })
  ]
});
