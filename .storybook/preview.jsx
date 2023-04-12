import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  chakra: {},
  darkMode: {
    current: 'light',
    dark: { ...themes.dark, appBg: themes.dark.appBg },
    light: { ...themes.light, appBg: themes.light.appBg },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider colorMode={useDarkMode() ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  ),
];
