const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader', 'react-docgen-typescript-loader'],
        include: [
          /stories/,
          /__stories__/,
          /components/,
          /Storybook/,
          /sharedComponents/,
          /images/,
          /globalStyles/,
          /utils/
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
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
        test: /\.s?css$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[local]__[path]__[hash:base64:3]',
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  plugins: [new TSDocgenPlugin()]
};
