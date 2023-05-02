import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const theme = extendTheme({
  config: {
    cssVarPrefix: 'quartz',
  },
  styles: {
    global: {
      '*, *::before, &::after': {
        wordWrap: 'normal',
      },
    },
  },
});

export const ChakraThemeProvider = ({ children }: PropsWithChildren) => {
  // @ts-expect-error for some reason it says it doesn't accept children
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
