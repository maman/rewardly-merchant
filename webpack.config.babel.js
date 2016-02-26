import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import pkg from './package.json'

const src = path.join(__dirname, './src')
const banner = `Rewardly Merchant v${pkg.version}—built on ${Date.now()}`
const cssLoaders = 'css!postcss'
const filename = `rewardly-v${pkg.version}.[hash]`

let config = {
  target: 'web',
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: path.join(src, 'index.js'),
  output: {
    path: path.join(__dirname, '.tmp'),
    pathInfo: true,
    publicPath: '/',
    filename: `${filename}.js`
  },
  resolve: {
    root: src,
    modulesDirectories: ['node_modules', 'src']
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
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'file?hash=sha512&digest=hex&name=[path][hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, [ /moment$/ ]),
    new HtmlPlugin({
      favicon: path.join(src, 'favicon.ico'),
      title: 'Rewardly Merchant',
      inject: true
    }),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    })
  ],
  vue: {
    postcss: () => {
      return [
        require('postcss-import', {
          onImport: (files) => files.forEach((file) => file.addDependency),
          path: [ src ]
        }),
        require('postcss-custom-media'),
        require('postcss-custom-properties'),
        require('postcss-calc'),
        require('postcss-nested'),
        require('postcss-color-function'),
        require('postcss-discard-comments'),
        require('autoprefixer'),
        require('lost')
      ]
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
  config.vue.loaders = Object.assign({}, config.vue.loaders, {
    css: ExtractTextPlugin.extract(cssLoaders)
  })
  config.plugins = [
    new ExtractTextPlugin(`${filename}.css`),
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
