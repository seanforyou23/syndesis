const path = require('path');
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  const isProd = env === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-maps' : 'cheap-module-source-map',
    devServer: {
      contentBase: distDir,
      // publicPath: '/',
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
    module: {
      rules: [
        {
          test: /\.tsx?$/,
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
          test: /\.(jpe?g|png|gif)$/i,
          use: ['url-loader?limit=10000', 'img-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  // pf3
                  path.resolve(__dirname, 'node_modules', 'patternfly', 'dist', 'sass'),
                  path.resolve(__dirname, 'node_modules', 'bootstrap-sass', 'assets', 'stylesheets'),
                  path.resolve(__dirname, 'node_modules', 'font-awesome-sass', 'assets', 'stylesheets')
                ]
              }
            }
          ]
        },
        {
          test: /\.eot|.svg|.woff|.woff2|.ttf$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000
              }
            }
          ]
        },
        {
          test: require.resolve('jquery'),
          use: [
            {
              loader: 'expose-loader',
              options: 'jQuery'
            }
          ]
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, './tsconfig.json')
        })
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(srcDir, 'index.html')
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery'
      })
      // new webpack.HotModuleReplacementPlugin()
    ]
  }
}
