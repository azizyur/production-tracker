const path = require('path');

module.exports = {
  entry: './src/index.js',               // точка входа
  output: {
    filename: 'bundle.js',               // название бандла
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',                     // важно для dev-server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,             // обрабатываем .js и .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',        // применяем babel
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],         // расширения для импорта
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // откуда сервить HTML
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  mode: 'development',                   // можно также: production
};
