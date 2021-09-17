const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/i,
        use: [
          'style-loader', 'css-loader', 'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        exclude: /node_modules/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};

module.exports = config;
