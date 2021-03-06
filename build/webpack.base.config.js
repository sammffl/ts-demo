const HtmlWebpackPugin = require ('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require ('fork-ts-checker-webpack-plugin');
// const {CheckPlugin} = require ('awesome-typescript-loader');
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            // loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: true, // 编译的时候不进行类型检查
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPugin ({
      template: './src/tpl/index.html',
    }),
    new ForkTsCheckerWebpackPlugin (),
    // new CheckPlugin (),
  ],
};
