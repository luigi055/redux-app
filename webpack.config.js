const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
  //will use script! style! and css! to execute our loaders and transform to bundle and script! means it will produce those frameworks without bundle them
    'script!jquery/dist/jquery.min.js', 
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
    ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery', // Assigning the $ and jQuery to jquery when bundle
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname + '/public', // it can also be './public'
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  //this creates source maps of our components that the browser will understand
  //for debugging in browser
  devtool: 'cheap-module-eval-source-map' 
};

