import { useContext } from 'react';
import { ColorModeContext } from './ThemeProvider';

export const useColorMode = () => {
  const { colorMode, setColorMode: setColorModeInContext } =
    useContext(ColorModeContext);

  const toggleColorMode = () => {
    const nextColor = colorMode === 'light' ? 'dark' : 'light';
    setColorModeInContext(nextColor);
  };

  return { colorMode, changeColorMode: setColorModeInContext, toggleColorMode };
};
