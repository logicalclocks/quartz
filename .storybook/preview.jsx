import { ColorModeScript } from '@chakra-ui/react';
import { themes } from '@storybook/theming';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ChakraThemeProvider } from '../src/chakra';

import ThemeProvider from '../src/theme/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: { expanded: true },
  chakra: {},
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light },
    stylePreview: true,
  },
};

export const decorators = [
  (Story) => {
    const isDark = useDarkMode();

    return (
      <>
        <ColorModeScript />

        <ChakraThemeProvider>
          <ThemeProvider colorMode={isDark ? 'dark' : 'light'}>
            <Story />
          </ThemeProvider>
        </ChakraThemeProvider>
      </>
    );
  },
];
