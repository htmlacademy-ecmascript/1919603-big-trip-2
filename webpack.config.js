const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // точка входа
  output: {
    filename: 'bundle.[contenthash].js', // файл сборки
    path: path.resolve(__dirname, 'build'), // директория для сборки
    clean: true, // опция очистки директории для сборки перед новой сборкой
  },
  devtool: 'source-map', // генерация source-maps. (карта исходного кода)
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html', // добавление файла bundle.js в index
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'], // исключения для copy-webpack-plugin
          },
        }
      ], // копирование всей директории public
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // расширение файлов, для которых применяется правило
        exclude: /(node_modules)/, // иссключения
        use: { // что делаем с этими файлами
          loader: 'babel-loader', // прогоняем через loader
          options: {
            presets: ['@babel/preset-env'] // список пресетов в качестве настроек
          },
        },
      },
    ]
  }
};
