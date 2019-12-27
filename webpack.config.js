const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';
const isServer = process.argv.includes('--server');

const clientContext = path.resolve(__dirname, 'src');
const serverContext = path.resolve(__dirname, 'server');

const clientOutputPath = path.resolve(__dirname, 'public/dist');
const serverOutputPath = path.resolve(__dirname, 'bin');

const clientAppEntry = './index.js';
const serverAppEntry = './www.js';

module.exports = {
  entry: {
    app: isServer ? serverAppEntry : clientAppEntry
  },
  watch: isDev,
  context: isServer ? serverContext : clientContext,
  mode:NODE_ENV,
  target: isServer ? 'node' : 'web',
  output: {
    path: isServer ? serverOutputPath : clientOutputPath
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