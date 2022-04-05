
const path = require('path'); // to get global path
const HtmlWebpackPlugin = require("html-webpack-plugin"); // to generate html automatically

module.exports = {
  mode: 'development', // env
  entry: { // entry code point
    bundle: path.join(__dirname, 'src/index.js')
  },
  output: { // compiled code
    path: path.join(__dirname, 'dist'),
    filename: '[name][contenthash].js', // [name] = bundle in entry object
    clean: true, // remove old bundle files from dist folder
    assetModuleFilename: '[name][ext]' // do not rename existed file name after compiling assets
  },
  module: { // different loader manipulation
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WebpackApp', // what
      filename: 'index.html', // where
      template: 'src/index.html' // blueprint
    })
  ],
  devServer: {
    static: { // which folder should be run
      directory: path.join(__dirname, 'dist')
    },
    port: 3000,
    open: false, // run browser automatically
    hot: true, // reloading
    compress: true,
    historyApiFallback: true
  },
  devtool: 'source-map' // to map errors lines up to code files
}
