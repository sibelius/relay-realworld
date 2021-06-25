window.scrollTo = () => {};

jest.mock('../src/relay/Environment', () => {
  const { createMockEnvironment } = require('relay-test-utils');

  return createMockEnvironment();
});

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});
