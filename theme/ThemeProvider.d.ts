import React, { FC } from 'react';
export type ThemeVariant = 'dark' | 'light';
export interface ThemeProviderProps {
    children: React.ReactNode;
    colorMode?: ThemeVariant;
}
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
