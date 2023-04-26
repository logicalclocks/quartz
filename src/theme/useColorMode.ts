import { useColorMode as useChakraColorMode } from '@chakra-ui/react';

export const useColorMode = () => {
  const { colorMode, setColorMode, toggleColorMode } = useChakraColorMode();

  return { colorMode, changeColorMode: setColorMode, toggleColorMode };
};
