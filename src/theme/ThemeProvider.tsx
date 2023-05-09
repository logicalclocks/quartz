import { useColorMode } from '@chakra-ui/react';
import { css, Global } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React, { FC, useEffect } from 'react';

import defaultTheme, { darkTheme } from './theme';

export type ThemeVariant = 'dark' | 'light';

export interface ThemeProviderProps {
  children: React.ReactNode;
  colorMode?: ThemeVariant;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  colorMode: colorModeFromProps,
}: ThemeProviderProps) => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorModeFromProps) setColorMode(colorModeFromProps);
  }, [colorModeFromProps, setColorMode]);

  const colorModeToUse = colorModeFromProps ?? colorMode; // the outer one overrides inner state

  return (
    <React.Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap');
        `}
      />
      <EmotionThemeProvider
        theme={colorModeToUse === 'light' ? defaultTheme : darkTheme}
      >
        {children}
      </EmotionThemeProvider>
    </React.Fragment>
  );
};

export default ThemeProvider;
