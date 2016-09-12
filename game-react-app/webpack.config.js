var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
          },
  module: {
    loaders: [{
    test: /\.js$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
              },
  }
};




// module.exports = {
//     devServer: {
//         inline: true,
//         contentBase: './src',
//         port: 3000
//     },
//     devtool: 'cheap-module-eval-source-map',
//     entry: './app/App.js',
//     module: {
//    loaders: [
//      {
//        test: /\.jsx?$/,
//        exclude: /(node_modules|bower_components)/,
//        loader: 'babel',
//        query: {
//          // These are the specific transformations we'll be using. 
//          presets: ['react', 'es2015']
//        }
//      },
//      {
//          test: /\.scss$/,
//          loaders: ['style', 'css', 'sass']
//      }
//    ]
//  },
//     output: {
//         path: 'src',
//         filename: '/bundle.min.js'
//     },
//     plugins: [
//         new webpack.optimize.OccurrenceOrderPlugin()
//     ]
// };


