const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const packageJsonDeps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/public/index.html',
      favicon: './src/assets/public/favicon.ico',
      filename: './index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      shared: {
        ...packageJsonDeps,
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
    },
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  optimization: { chunkIds: 'named' },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: ['http://127.0.0.1/?order=f4f9d523-47b6-4758-998a-f6a0e47158ac'],
    port: 80,
  },
};
