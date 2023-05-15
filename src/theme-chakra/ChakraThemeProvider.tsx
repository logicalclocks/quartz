import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme,
} from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { colors } from '../theme/theme';

const theme = extendTheme({
  config: {
    cssVarPrefix: 'quartz',
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors,
  },
});

const { ToastContainer, toast } = createStandaloneToast({
  theme,
});

export const ChakraThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ChakraProvider
        toastOptions={{ defaultOptions: { position: 'top-right' } }}
        theme={theme}
      >
        {children}
      </ChakraProvider>
      <ToastContainer />
    </>
  );
};

export const standaloneToast = toast;
