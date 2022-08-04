import { useState } from "react";

export const useColorMode = () => {
  const theme = localStorage.getItem('user-theme') ?? 'light';
  const [colorMode, setColorMode] = useState(theme);

  const changeColorMode = () => {
    const nextColor = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(nextColor);
    localStorage.setItem('user-color', nextColor);
  };

  return { colorMode, changeColorMode };
};
