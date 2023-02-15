import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import React, { FC, createContext, useEffect, useMemo, useState } from 'react';
import defaultTheme, { darkTheme } from './theme';

export type ThemeVariant = 'dark' | 'light';

export interface ThemeProviderProps {
  children: React.ReactNode;
  colorMode?: ThemeVariant;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  colorMode: colorModeFromProps,
}: ThemeProviderProps) => {
  const [colorMode, setColorMode] = useState<ThemeVariant>(
    (localStorage.getItem('color-mode') ?? 'light') as ThemeVariant,
  );
  const value = useMemo(() => ({ colorMode, setColorMode }), [colorMode]);

  useEffect(
    function syncWithLocalStorage() {
      localStorage.setItem('color-mode', colorMode);
    },
    [colorMode],
  );

  const colorModeToUse = colorModeFromProps ?? colorMode; // the outer one overrides inner state

  const theme = useMemo(() => {
    return extendBaseTheme(
      colorModeToUse === 'light' ? defaultTheme : darkTheme,
    );
  }, [colorModeToUse]);

  return (
    <React.Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap');
        `}
      />
      <ColorModeContext.Provider value={value}>
        <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
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
