const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve content from the public folder
    publicPath: '/dist/', // Serve bundled files from the dist folder
    port: 3000, // Choose the port for Webpack Dev Server
  }
};