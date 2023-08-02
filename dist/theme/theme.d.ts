import { ITheme } from './types';
export declare const colors: {
    primary: string;
    primaryShade1: string;
    primaryShade2: string;
    gray: string;
    grayShade1: string;
    grayShade2: string;
    grayShade3: string;
    black: string;
    white: string;
    labels: {
        red: string;
        orange: string;
        purple: string;
        purpleShade2: string;
        yellow: string;
        yellowShade2: string;
        green: string;
        blueShade1: string;
        blueShade2: string;
        blue: string;
        orangeShade2: string;
        redShade2: string;
    };
};
declare const defaultTheme: ITheme;
export declare const darkThemeColors: ITheme['colors'];
export declare const useTheme: () => ITheme;
export declare const darkTheme: ITheme;
export default defaultTheme;
