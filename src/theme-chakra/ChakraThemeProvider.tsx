import {
  ChakraProvider,
  createStandaloneToast,
  extendTheme,
} from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const theme = extendTheme({
  config: {
    cssVarPrefix: 'quartz',
    initialColorMode: 'system',
    useSystemColorMode: true,
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
