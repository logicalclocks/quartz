module.exports = {
  "stories": [
    "../src/**/*/stories.@(ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
  ]
}