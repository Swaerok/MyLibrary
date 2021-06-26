const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.[sa][c]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              /*modules: {
								localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
							},
							importLoaders: 1,*/
              // localIdentName: [path]___[name]__[local]___[hash:base64:5],
            },
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              //outputPath: 'fonts/'
            },
          },
        ],
      },
    ],
  },
};

module.exports = (env, options) => {
  const production = options.mode === 'production';

  conf.devtool = production ? 'source-map' : 'soursemap';

  return conf;
};
