const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  watch: isDev,
  mode:NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url-loader'
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    },
  ]
  }
};