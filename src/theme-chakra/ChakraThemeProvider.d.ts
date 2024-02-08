import { ChakraProviderProps, CreateStandaloneToastReturn } from '@chakra-ui/react';
export declare const createStandaloneToast: (themeExtends?: {}) => CreateStandaloneToastReturn;
export declare const ChakraThemeProvider: ({ children, toastOptions, themeExtends, ...restProps }: ChakraProviderProps & {
    themeExtends?: object | undefined;
}) => import("react/jsx-runtime").JSX.Element;
