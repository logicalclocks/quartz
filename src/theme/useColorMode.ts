import {
  ColorModeContextType,
  useColorMode as useChakraColorMode,
} from '@chakra-ui/react';

export const useColorMode = (): Omit<ColorModeContextType, 'setColorMode'> & {
  changeColorMode: (value: any) => void;
} => {
  const { colorMode, setColorMode, toggleColorMode } = useChakraColorMode();

  return { colorMode, changeColorMode: setColorMode, toggleColorMode };
};
