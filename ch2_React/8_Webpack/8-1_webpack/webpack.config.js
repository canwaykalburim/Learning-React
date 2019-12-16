const path = require('path');

module.exports = {
  mode: 'development',
  entry: './8-1-2_main.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: "output.js"
  }
};