import { ColorModeScript } from '@chakra-ui/react';
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ChakraThemeProvider } from '../src/chakra';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  docs: {
    container: (props) => (
      <DocsContainer
        {...props}
        theme={useDarkMode() ? themes.dark : themes.light}
      />
    ),
  },
  darkMode: {
    dark: themes.dark,
    light: themes.light,
    stylePreview: true,
  },
};

export const decorators = [
  (Story) => (
    <>
      <ColorModeScript />
      <ChakraThemeProvider>
        <ThemeProvider colorMode={useDarkMode() ? 'dark' : 'light'}>
          <Story />
        </ThemeProvider>
      </ChakraThemeProvider>
    </>
  ),
];
