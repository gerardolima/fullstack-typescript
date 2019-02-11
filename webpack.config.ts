import { CheckerPlugin } from 'awesome-typescript-loader';
import * as cssnano from 'cssnano';
import * as dotenv from 'dotenv';
import * as HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// TODO: check expected env variables
dotenv.config({path: path.join(__dirname, '.env')});
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const SERVER_PORT = process.env.PORT || '3000';
const DEV_PORT = process.env.DEV_PORT || '8080';
const PATH_DIST = path.join(__dirname, 'dist');


// webpack plugins
// ----------------------------------------------------------------------------
const plugins: webpack.Plugin[] = [
  new HardSourceWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'TypeScript and React',
    favicon: './src/client/favicon.ico',
    filename: 'index.html',
    template: './src/client/index.ejs',
  }),
];

if (IS_PRODUCTION) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.join(PATH_DIST, 'bundle-analyser-report.html'),
  }));
} else {
  plugins.push(new CheckerPlugin());
}


// webpack main configuration object
// ----------------------------------------------------------------------------
const buildConfig: webpack.Configuration = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  devtool: IS_PRODUCTION ? false : 'inline-source-map',
  entry: ['./src/client/client'],
  output: {
    path: path.join(PATH_DIST, 'public'),
    filename: `[name]-[hash:8]-bundle.js`,
    publicPath: '/public/',
  },
  devServer: {
    watchContentBase: true,
    open: true,
    public: `http://localhost:${SERVER_PORT}`,
    port: parseInt(DEV_PORT, 10)
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
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          isolatedModules: true,
        }
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
     'react': 'React',
     'react-dom': 'ReactDOM',
  },
};

export default buildConfig;
