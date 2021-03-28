const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// In dev mode if not env.NODE_ENV is not production
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [new CleanWebpackPlugin()];
if (!devMode) {
  // Enable in production only
  plugins.push(new MiniCssExtractPlugin({
    filename:'style.css'
  }));
}


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/scripts'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins,
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: [
          {
            loader: "source-map-loader"
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /custom\.scss/],
        use: [
          //If we're in dev-mode, use inline-styles, else extract to separate css file
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/scripts/',
            }
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        //Custom Styles for CKEditor need to stay inline
        test: /custom\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/',
    historyApiFallback: true,
    inline: true,
    hot: true,
    watchContentBase: true
  },
  devtool: 'cheap-module-source-map'
}