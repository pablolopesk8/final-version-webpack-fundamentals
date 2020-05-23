const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src/js'),
  entry: {
    app: './app.js',
    about: './about_page.js',
    home: './home_page.js',
    contact: './contact_page.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.json$/,
				exclude: /node_modules/,
				use: [
          path.resolve('webpack-loaders/strip-json-comments.js')
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}