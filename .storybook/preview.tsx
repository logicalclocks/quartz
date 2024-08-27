import { ColorModeScript } from '@chakra-ui/react';
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ChakraThemeProvider } from '../src/chakra';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  docs: {
    container: DocsContainer,
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
export const tags = ['autodocs'];
