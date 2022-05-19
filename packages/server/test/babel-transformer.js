const config = require('@world/babel');

const { createTransformer } = require('babel-jest').default;

module.exports = createTransformer({
  ...config,
});
