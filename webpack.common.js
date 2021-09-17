const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
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
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][hash][ext]',
        },
      },
    ],
  },
};

module.exports = config;
