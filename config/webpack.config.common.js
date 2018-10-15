const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  },
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: path.join('assets', 'js', '[name].[hash:3].js'),
    chunkFilename: path.join('assets', 'js', '[name].chunk.[hash:3].js'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ru)$/),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      inject: true,
      template: './src/index.html'
    })
  ]
};
