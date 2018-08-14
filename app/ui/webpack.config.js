const path = require('path');
const srcDir = path.resolve(__dirname, './src');
const distDir = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
      path.join(srcDir, 'index.tsx')
    ],
    output: {
      path: distDir,
      filename: '[name].bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(srcDir, 'index.html')
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
