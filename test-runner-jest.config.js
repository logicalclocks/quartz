const { getJestConfig } = require('@storybook/test-runner');

module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  transform: {
    '.*stories\\.[jt]sx?$': '@storybook/test-runner/playwright/transform',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  testTimeout: 30000,
};
