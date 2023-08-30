import { ColorModeContextType } from '@chakra-ui/react';
export declare const useColorMode: () => Omit<ColorModeContextType, "setColorMode"> & {
    changeColorMode: (value: any) => void;
};
