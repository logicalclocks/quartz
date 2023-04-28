import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme,
} from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { colors, darkThemeColors } from '../theme/theme';

const theme = extendTheme({
  config: {
    cssVarPrefix: 'quartz',
  },
  colors: {
    ...colors,
    dark: darkThemeColors,
  },
});

const { ToastContainer, toast } = createStandaloneToast({
  theme,
});

export const ChakraThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <ToastContainer />
    </>
  );
};

export const standaloneToast = toast;
