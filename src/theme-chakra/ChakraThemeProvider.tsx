import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { chakraTheme as theme } from './theme';

const { ToastContainer, toast } = createStandaloneToast({
  theme,
});

export const ChakraThemeProvider = ({ children }: PropsWithChildren) => (
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
export const standaloneToast: any = toast;
