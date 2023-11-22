const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  devServer: {
    watchFiles: ["src/*.html"],
    hot: true,
    port: 3000,
    devMiddleware: {
      publicPath: '/dist/', // Specify the public path for the bundled files in devMiddleware
        },
    }
}