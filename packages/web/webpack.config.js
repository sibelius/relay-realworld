const webpackConfig = require('@world/webpack');
const { merge } = require('webpack-merge');

module.exports = merge(webpackConfig, {
  entry: './src/client.tsx',
});
