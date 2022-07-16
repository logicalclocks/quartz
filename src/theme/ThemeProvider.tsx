import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

// Theme
import defaultTheme, { darkTheme } from './theme';

type ThemeVariant = 'dark' | 'light';

export interface ThemeProviderProps {
  children: React.ReactNode;
  variant?: ThemeVariant;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  variant = 'dark',
}: ThemeProviderProps) => (
  <React.Fragment>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap');
      `}
    />
    <EmotionThemeProvider
      theme={variant === 'light' ? defaultTheme : darkTheme}
    >
      {children}
    </EmotionThemeProvider>
  </React.Fragment>
);

export default ThemeProvider;
