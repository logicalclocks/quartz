import {
  ChakraProvider,
  CreateStandaloneToastReturn,
  createStandaloneToast as createStandaloneToastC,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { chakraTheme as theme } from './theme';

export const createStandaloneToast = (): CreateStandaloneToastReturn =>
  createStandaloneToastC({
    theme,
  });

export const ChakraThemeProvider = ({ children }: PropsWithChildren) => (
  <ChakraProvider
    toastOptions={{ defaultOptions: { position: 'top-right' } }}
    theme={theme}
  >
    {children}
  </ChakraProvider>
);
