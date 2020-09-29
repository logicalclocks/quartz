import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

// Theme
import defaultTheme from './theme';
// Types
import { ITheme } from './types';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => (
  <React.Fragment>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
      `}
    />
    <EmotionThemeProvider<ITheme> theme={defaultTheme}>
      {children}
    </EmotionThemeProvider>
  </React.Fragment>
);

export default ThemeProvider;
