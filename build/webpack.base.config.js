const HtmlWebpackPugin = require ('html-webpack-plugin');
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
            options: {
              transpileOnly: false,
            },
          },
        ],
        exclude: /node_modules|learn/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPugin ({
      template: './src/tpl/index.html',
    }),
  ],
};
