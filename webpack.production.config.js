var webpack   = require('webpack');
var path      = require('path');
var moment    = require('moment');


module.exports = {
  name: "production",
  entry: [
   './js/index'
  ],
  output: {
    path: require("path").resolve("./build"),
    filename: '/javascript/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(), 
    new webpack.ProvidePlugin({
      'React': 'react',
      '$': 'jquery',
      'jQuery': 'jquery',
      'Moment': 'moment',
      '_': 'underscore',
      'underscore': 'underscore'
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("production")
    })
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
}
