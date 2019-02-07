import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as OpenBrowserPlugin from 'open-browser-webpack-plugin';
import * as cssnano from 'cssnano';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');

import * as dotenv from 'dotenv';
// TODO: check expected env variables
dotenv.config({path: path.join(__dirname, '..', '.env')});
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const SERVER_PORT = process.env.PORT || '3000';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'TypeScript and React',
    favicon: './src/client/favicon.ico',
    filename: 'index.html',
    template: './src/client/index.ejs',
  }),
];

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// plugins.push(new BundleAnalyzerPlugin());

if (!IS_PRODUCTION) {
  console.debug(OpenBrowserPlugin);
  plugins.push(
    new OpenBrowserPlugin({ url: `http://localhost:${SERVER_PORT}` }),
  );
}

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  devtool: IS_PRODUCTION ? '' : 'inline-source-map',
  entry: ['@babel/polyfill', './src/client/client'],
  output: {
    path: path.join(__dirname, 'dist', 'public'),
    filename: `[name]-[hash:8]-bundle.js`,
    publicPath: '/public/',
  },
  devServer: {
    watchContentBase: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/, nodeModulesPath],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: !IS_PRODUCTION,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !IS_PRODUCTION,
              plugins: IS_PRODUCTION ? [] : [cssnano()],
            },
          },
        ],
      },
      {
        test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  plugins,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
