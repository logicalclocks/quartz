import { useContext } from 'react';
import { ColorModeContext, ThemeVariant } from './ThemeProvider';

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  const toggleColorMode = () => {
    const nextColor = colorMode === 'light' ? 'dark' : 'light';
    changeColorMode(nextColor);
  };

  const changeColorMode = (colorMode: ThemeVariant) => {
    setColorMode(colorMode);
    localStorage.setItem('user-color', colorMode);
  };

  return { colorMode, changeColorMode, toggleColorMode };
};
