var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: false,
  devServer: {
    publicPath: '/',
    historyApiFallback: {
      // disableDotRule: true,
      rewrites: [{ from: /^\/$/, to: '/public/index.html' }]
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      hash: true,
      title: 'FinLoan',
      favicon: 'public/favicon.ico',
      manifest: 'public/manifest.json'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'json/'
            }
          }
        ]
      }
    ]
  }
};
