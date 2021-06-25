const config = require('@world/babel');

const { createTransformer } = require('babel-jest');

module.exports = createTransformer({
  ...config,
});
