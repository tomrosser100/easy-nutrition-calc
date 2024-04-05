const path = require('path');

module.exports = {
  mode: "development",
  entry: './front/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'front/dist'),
  },
};