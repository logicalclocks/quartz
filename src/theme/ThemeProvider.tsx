import React, { createContext, FC, useState } from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

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
  const [colorMode, setColorMode] = useState<ThemeVariant>(
    (localStorage.getItem('user-theme') ?? 'light') as ThemeVariant,
  );

  const colorModeToUse = colorModeFromProps ?? colorMode; // the outer one overrides inner state

  return (
    <React.Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap');
        `}
      />
      <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
        <EmotionThemeProvider
          theme={colorModeToUse === 'light' ? defaultTheme : darkTheme}
        >
          {children}
        </EmotionThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
};

export default ThemeProvider;

export interface IColorModeContext {
  colorMode: ThemeVariant;
  setColorMode: (mode: ThemeVariant) => void;
}

export const ColorModeContext = createContext<IColorModeContext>({
  colorMode: 'light',
  setColorMode: () => {},
});
