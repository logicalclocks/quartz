import { SystemStyleObject } from '@styled-system/css';
export interface IThemeColors {
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
        redShade2: string;
        orange: string;
        orangeShade2: string;
        purple: string;
        purpleShade2: string;
        yellow: string;
        yellowShade2: string;
        green: string;
        blue: string;
        blueShade1: string;
        blueShade2: string;
    };
}
type LabelColor = keyof IThemeColors['labels'];
export type Color = keyof IThemeColors | `labels.${LabelColor}`;
export type IconSizes = keyof IThemeIconSizes;
export type Fonts = 'text' | 'title' | 'subtitle' | 'label' | 'microlabel' | 'value';
export type IThemeFonts = {
    [key in Fonts]: string;
};
export type IThemeFontSizes = {
    [key in Fonts]: string;
};
export type IThemeFontWeights = {
    [key in Fonts]: number;
};
export interface IThemeTransitions {
    button: string;
}
export interface IThemeShadows {
    alert: string;
    primary: string;
    secondary: string;
    explorer: string;
    disabled: string;
    cardInsetShadow: string;
    navigation: string;
    list: string;
    popup: string;
    notification: string;
    focused: string;
}
export interface IThemeVariants {
    [key: string]: SystemStyleObject;
}
interface INestedThemeVariants {
    [key: string]: IThemeVariants;
}
interface IInputIntent {
    [key: string]: string;
}
interface IZIndeces {
    default: number;
    tooltips: number;
    popups: number;
    modals: number;
    notifications: number;
}
export type Variants = IThemeVariants | INestedThemeVariants;
export interface IThemeIconSizes {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}
export interface ITheme {
    buttons: Variants;
    colors: IThemeColors;
    fonts: IThemeFonts;
    fontSizes: IThemeFontSizes;
    fontWeights: IThemeFontWeights;
    iconSizes: IThemeIconSizes;
    inputIntents: IInputIntent;
    inputs: Variants;
    navigation: Variants;
    notification: Variants;
    pagination: Variants;
    shadows: IThemeShadows;
    text: Variants;
    transitions: IThemeTransitions;
    variants: Variants;
    zIndices: IZIndeces;
}
export {};
