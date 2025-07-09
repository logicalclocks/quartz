import { Box, ColorModeScript } from '@chakra-ui/react';
import { DocsContainer } from '@storybook/addon-docs';
import type { Parameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ChakraThemeProvider } from '../src/chakra';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters: Parameters = {
  // title: 'Quartz',
  layout: 'centered',
  controls: { expanded: true },

  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
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
          <Box minWidth="700px" minHeight="100%">
            <Story />
          </Box>
        </ThemeProvider>
      </ChakraThemeProvider>
    </>
  ),
];
export const tags = ['autodocs'];
