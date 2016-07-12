var webpack   = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path      = require('path');
var moment    = require('moment');


module.exports = {
  devtool: 'eval',
  entry: [
   'webpack-dev-server/client?http://localhost:8080',
   'webpack/hot/only-dev-server', 
   './js/index.jsx'
  ],
  output: {
    path: require("path").resolve("./build"),
    filename: '/javascript/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(), 
    new webpack.ProvidePlugin({
      'React': 'react',
      '$': 'jquery',
      'jQuery': 'jquery',
      'Moment': 'moment',
      '_': 'underscore',
      'underscore': 'underscore'
    })
    //new WebpackDevServer(webpack(), {
    //  watchOptions: {
    //    aggregateTimeout: 300,
    //   poll: 300
    //  }
    //})
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime'],         
        include: path.join(__dirname, 'js'),
        exclude: /node_modules/,
        plugins: [
          "syntax-class-properties"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react')
    },
    fallback: path.resolve(__dirname, './node_modules')
  },
  resolveLoader: {
    fallback: path.resolve(__dirname, './node_modules')
  },
  devServer: {
    contentBase: "./",
    port: 8080,
    inline: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
  },
}
