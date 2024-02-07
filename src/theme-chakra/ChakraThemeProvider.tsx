import * as R from 'ramda';
import {
  ChakraProvider,
  ChakraProviderProps,
  CreateStandaloneToastReturn,
  createStandaloneToast as createStandaloneToastC,
} from '@chakra-ui/react';
import { chakraTheme as theme } from './theme';

export const createStandaloneToast = (
  themeExtends = {},
): CreateStandaloneToastReturn =>
  createStandaloneToastC({
    theme: theme(themeExtends),
  });

export const ChakraThemeProvider = ({
  children,
  toastOptions = {},
  themeExtends = {},
  ...restProps
}: ChakraProviderProps & { themeExtends?: object }) => (
  <ChakraProvider
    toastOptions={R.mergeDeepLeft(toastOptions, {
      defaultOptions: { position: 'top-right' as any },
    })}
    theme={theme(themeExtends)}
    {...restProps}
  >
    {children}
  </ChakraProvider>
);
