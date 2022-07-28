import React from 'react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';


import ThemeProvider from '../src/theme/ThemeProvider';


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  darkMode: {
    current: 'light',
    dark: { ...themes.dark, appBg: themes.dark.appBg },
    light: { ...themes.light, appBg: themes.light.appBg },
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider variant={useDarkMode() ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  ),
];
