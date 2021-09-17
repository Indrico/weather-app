const path = require('path');

const config = {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
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
