var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var autoprefixer = require('autoprefixer');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css', { allChunks: true })
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
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  // postcss: [
  //   autoprefixer({ browsers: ['last 2 versions'] })
  // ],
}