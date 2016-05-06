var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: false,
  entry:  {
    main: ['./src/index.js'],
  },
  output: {
     path: __dirname + '/build',
     filename: '[name].js',
     publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true,
      }
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css', { allChunks: true }),
  ],
  module: {
    loaders:[
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?outputStyle=compressed")
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'url?limit=25000'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'url?limit=100000'
      }
    ]
  },
  // postcss: [
  //   autoprefixer({ browsers: ['last 2 versions'] })
  // ]
}
