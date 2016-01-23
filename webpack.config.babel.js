import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import pkg from './package.json'

const src = path.join(__dirname, './src')
const banner = `Rewardly Merchant v${ pkg.version }—built on ${ Date.now() }`
const cssLoaders = 'style!css?modules&importLoaders=1&sourceMap!postcss'
const filename = `rewardly-v${ pkg.version }.[hash]`

let config = {
  target: 'web',
  cache: true,
  debug: true,
  devtool: 'cheap-source-map',
  entry: path.join(src, 'index.js'),
  output: {
    path: path.join(__dirname, '.tmp'),
    pathInfo: true,
    publicPath: '/',
    filename: `${ filename }.js`
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, [ /moment$/ ]),
    new HtmlPlugin({
      // template: path.join(src, 'index.html'),
      title: `Rewardly Merchant v${ pkg.version }`,
      inject: true
    }),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    })
  ],
  postcss: () => {
    return [require('autoprefixer')]
  },
  vue: {
    loaders: {
      js: 'babel',
      css: cssLoaders
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    ...config.plugins
  ]
  config.devServer = {
    contentBase: path.join(__dirname, '.tmp'),
    noInfo: true,
    hot: true,
    inline: true
  }
} else {
  config.devtool = 'source-map'
  config.debug = 'false'
  config.output.path = path.join(__dirname, 'dist')
  config.vue.loaders = Object.assign(config.vue.loaders, {
    css: ExtractTextPlugin.extract(cssLoaders)
  })
  config.plugins = [
    new ExtractTextPlugin(`${ filename }.css`),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      mangle: true,
      preserveComments: false,
      output: {
        comments: false
      }
    }),
    new webpack.BannerPlugin(banner, {
      raw: false
    }),
    ...config.plugins
  ]
}

export default config
