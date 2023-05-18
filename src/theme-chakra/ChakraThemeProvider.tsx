import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { chakraTheme as theme } from './chakra-theme';

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
