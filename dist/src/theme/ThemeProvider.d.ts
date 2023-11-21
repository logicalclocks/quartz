/// <reference types="react" />
export type ThemeVariant = 'dark' | 'light';
export interface ThemeProviderProps {
    children: React.ReactNode;
    colorMode?: ThemeVariant;
}
declare const ThemeProvider: ({ children, colorMode: colorModeFromProps, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export default ThemeProvider;
