var path = require('path');
var webpack = require('webpack')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    //you can include test.webpack.js if you want webpack version
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'js/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'js/**/*.jsx': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'eval',
      entry: [
       './js/index.jsx'
      ],
      plugins: [
        new webpack.ProvidePlugin({
          'React': 'react',
          'expect': 'expect'
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
              presets: ['es2015', 'react']
            },  
            plugins: [
              "syntax-class-properties"
            ],
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
    //"external", which means they will be ignored:
     externals: {
       'cheerio': 'window',
       'react/addons': true,
       'react/lib/ExecutionEnvironment': true,
       'react/lib/ReactContext': true
     },
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-babel-preprocessor',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-jasmine-html-reporter-livereload',
      'karma-spec-reporter'
    ],
    babelPreprocessor: {
      options: {
        presets: ['es2015']
      }
    },

    reporters: ['coverage', 'spec' , 'html'],
    
    coverageReporter: {
      type : 'html',
      dir : './test/coverage/'
    },

//    specReporter: {
//      maxLogLines: 5,         // limit number of lines logged per test 
//      suppressErrorSummary: true,  // do not print error summary 
//      suppressFailed: false,  // do not print information about failed tests 
//      suppressPassed: false,  // do not print information about passed tests
//      suppressSkipped: true,  // do not print information about skipped tests 
//      showSpecTiming: false // print the time elapsed for each spec 
//    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,
  })
};

