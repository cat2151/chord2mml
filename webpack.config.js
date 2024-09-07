const path = require('path');
module.exports = {
//  mode: 'development',
  mode: 'production',
  entry: './src/chord2mml.ts',
  output: {
    filename: 'chord2mml.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  performance: { hints: false }
};