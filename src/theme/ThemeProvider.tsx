import { useColorMode } from '@chakra-ui/react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { useEffect } from 'react';
import * as R from 'ramda';

import defaultTheme, { darkTheme } from './theme';
import { ITheme } from './types';
import { DeepPartial } from '../utils/type-utils';

export type ThemeVariant = 'dark' | 'light';

export interface ThemeProviderProps {
  children: React.ReactNode;
  colorMode?: ThemeVariant;
  theme?: { light: DeepPartial<ITheme>; dark: DeepPartial<ITheme> };
}

const ThemeProvider = ({
  children,
  colorMode: colorModeFromProps,
  theme: themeFromProps = { light: defaultTheme, dark: darkTheme },
}: ThemeProviderProps) => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorModeFromProps) setColorMode(colorModeFromProps);
  }, [colorModeFromProps, setColorMode]);

  const colorModeToUse = colorModeFromProps ?? colorMode; // the outer one overrides inner state

  const themeToUse = R.mergeDeepLeft(
    themeFromProps[colorModeToUse],
    colorModeToUse === 'light' ? defaultTheme : darkTheme,
  );

  return (
    <EmotionThemeProvider theme={themeToUse}>{children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;
