const babelJest = require('babel-jest');
const entriaBabel = require('@world/babel');

module.exports = babelJest.createTransformer(entriaBabel);
