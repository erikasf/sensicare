var webpack   = require('webpack');
var path      = require('path');

module.exports = {
      devtool: 'eval',
      entry: [
       './js/index.jsx'
      ],
      output: {
        path: require("path").resolve("./build"),
        filename: '/javascript/bundle.js',
        publicPath: '/'
      },
      plugins: [
   //     new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(), 
        new webpack.ProvidePlugin({
          'React': 'react',
          '$': 'jquery',
          'jQuery': 'jquery'
        })
      ],
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            },
            plugins: [
              "syntax-class-properties"
            ]
          },
          {
            test: /\.js$/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            },
            exclude: /node_modules/ 
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
     }
}
