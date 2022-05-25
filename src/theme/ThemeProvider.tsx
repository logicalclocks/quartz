import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

// Theme
import defaultTheme from './theme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => (
  <React.Fragment>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap');
      `}
    />
    <EmotionThemeProvider theme={defaultTheme}>
      {children}
    </EmotionThemeProvider>
  </React.Fragment>
);

export default ThemeProvider;
