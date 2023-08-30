import * as R from 'ramda';
import {
  ChakraProvider,
  ChakraProviderProps,
  CreateStandaloneToastReturn,
  createStandaloneToast as createStandaloneToastC,
} from '@chakra-ui/react';
import { chakraTheme as theme } from './theme';

export const createStandaloneToast = (): CreateStandaloneToastReturn =>
  createStandaloneToastC({
    theme,
  });

export const ChakraThemeProvider = ({
  children,
  toastOptions = {},
  ...restProps
}: ChakraProviderProps) => (
  <ChakraProvider
    toastOptions={R.mergeDeepLeft(toastOptions, {
      defaultOptions: { position: 'top-right' as any },
    })}
    theme={theme}
    {...restProps}
  >
    {children}
  </ChakraProvider>
);
