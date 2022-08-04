import { useContext } from 'react';
import { ColorModeContext } from './ThemeProvider';

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  const changeColorMode = () => {
    const nextColor = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(nextColor);
    localStorage.setItem('user-color', nextColor);
  };

  return { colorMode, changeColorMode };
};
