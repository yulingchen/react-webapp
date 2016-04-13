var path          = require("path");
var fs            = require("fs");
var webpack       = require("webpack");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  devtool: "source-map",
  entry: {
    main: {
      './src/server/index.js'
    },
    vendor: {
      'koa',
      'koa-router'
    }
  },
  output:  {
    path:          path.join(__dirname, "./dist"),
    filename:      "server.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': true,
    })
  ],
  module:  {
    loaders: [
      // {test: /\.json$/, loaders: ["json"]},
      // {test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/, loaders: ["file?context=static&name=/[path][name].[ext]"], exclude: /node_modules/},
      {test: /\.js$/, loaders: ["babel?presets[]=es2015"]}
    ],
    postLoaders: [
    ],
    noParse: /\.min\.js/
  },
  externals: [nodeExternals({
    whitelist: ["webpack/hot/poll?1000"]
  })],
  resolve: {
    extensions: ["", ".json", ".js"]
  },
  node:    {
    __dirname: true,
    fs:        "empty"
  }
};