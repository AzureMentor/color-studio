const path = require('path')

const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const RenameFilePlugin = require('rename-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'docs/source'),
  entry: {
    'docs-css': './stylesheets/docs/docs.scss',
    'docs-js': './javascripts/docs/docs.js',

    'example-android-css': './stylesheets/example-android/example.scss',
    'example-android-js': './javascripts/example-android/example.js',

    'example-calypso-css': './stylesheets/example-calypso/example.scss',

    'example-marketing-css': './stylesheets/example-marketing/example.scss',
    'example-marketing-colors-bright-js': './javascripts/example-marketing/example-colors-bright.js',
    'example-marketing-colors-dark-js': './javascripts/example-marketing/example-colors-dark.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: MiniExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  require('postcss-css-variables'),
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.join(__dirname, '.cache/calypso/client')
              ],
              outputStyle: 'compressed'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.sketchpalette$/,
        use: 'raw-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'docs/dist/assets'),
    filename: '[name].js'
  },
  plugins: [
    new MiniExtractPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new ExtraneousFileCleanupPlugin({
      extensions: [
        '.js'
      ]
    }),
    new RenameFilePlugin({
      originNameReg: /(.*)-css.css/,
      targetName: '$1.css'
    }),
    new RenameFilePlugin({
      originNameReg: /(.*)-js.js/,
      targetName: '$1.js'
    })
  ],
  stats: {
    entrypoints: false,
    modules: false,
    warnings: false
  },
  devServer: {
    host: 'color-studio.localhost',
    port: 3000,
    contentBase: path.join(__dirname, 'docs/dist'),
    writeToDisk: true
  }
}
