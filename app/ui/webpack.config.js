const path = require('path');
const srcDir = path.resolve(__dirname, './src');
const distDir = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// const webpack = require('webpack');

module.exports = env => {
  const isProd = env === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-maps' : 'eval',
    devServer: {
      contentBase: distDir,
      publicPath: '/',
      historyApiFallback: true,
      compress: true,
      clientLogLevel: 'info',
      host: 'localhost'
    },
    entry: [
      path.join(srcDir, 'index.ts')
    ],
    output: {
      path: distDir,
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.eot|.svg|.woff|.woff2|.ttf$/,
          loaders: ['url-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, './tsconfig.json')
        })
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(srcDir, 'index.html')
      })
      // new webpack.HotModuleReplacementPlugin()
    ]
  }
}
