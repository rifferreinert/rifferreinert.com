const { environment } = require('@rails/webpacker')

environment.loaders.append('sound', {
  test: /(\.mp3$)|(\.webm$)/,
  loader: 'file-loader',
});

module.exports = environment
