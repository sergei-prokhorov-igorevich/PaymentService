const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: {
    server: './src/index.ts',
    fileLogWorker: './src/features/worker/fileLogWorker.ts',
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
    },
  },
  module: {
    rules: [{ test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' }],
  },
};
