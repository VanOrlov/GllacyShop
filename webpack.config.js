const path = require('path');

module.exports = {
  entry: {
    bundle: ['./script/script.js', './script/slider.js'],
  }, // Ваш главный файл JavaScript
  output: {
    filename: '[name].js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Директория для выходных файлов
  },
};