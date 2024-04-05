const path = require('path');

module.exports = {
  mode: "development",
  entry: './front/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'front/dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './front/dist'
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};