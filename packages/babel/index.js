module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-flow',
  ],
  plugins: [
    [
      'relay',
      {
        schema: '../server/schema/schema.graphql',
      },
    ],
    // TODO - this break server tests
    // 'react-refresh/babel',
  ],
};
