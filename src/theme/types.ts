import { SystemStyleObject } from '@styled-system/css';

export interface IThemeColors {
  primary: string;
  primaryShade1: string;
  primaryShade2: string;
  primaryShade3: string;
  primaryGray: string;
  primaryGrayShade1: string;
  primaryGrayShade2: string;
  dark: string;
  darkGray: string;
  white: string;
}

export interface IThemeFonts {
  buttons: string;
  inputs: string;
}

export interface IThemeTransitions {
  button: string;
}

export interface IThemeShadows {
  primary: string;
  disabled: string;
  cardInsetShadow: string;
}

export interface IThemeVariants {
  [key: string]: SystemStyleObject;
}

export interface ITheme {
  colors: IThemeColors;
  fonts: IThemeFonts;
  shadows: IThemeShadows;
  transitions: IThemeTransitions;
  variants: IThemeVariants;
  text: IThemeVariants;
  buttons: IThemeVariants;
}
