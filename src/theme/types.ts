import { SystemStyleObject } from '@styled-system/css';

export interface IThemeColors {
  primary: string;
  primaryShade1: string;
  primaryShade2: string;
  primaryShade3: string;
  primaryGray: string;
  primaryGrayShade1: string;
  primaryGrayShade2: string;
  darkGray: string;
  white: string;

  labels: {
    red: string;
    orange: string;
    purple: string;
    skyblue: string;
  };
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
  navigation: string;
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

export type Variants = IThemeVariants | INestedThemeVariants;

export interface ITheme {
  colors: IThemeColors;
  fonts: IThemeFonts;
  shadows: IThemeShadows;
  transitions: IThemeTransitions;
  variants: Variants;
  text: Variants;
  buttons: Variants;
  inputs: Variants;
  inputIntents: IInputIntent;
  navigation: Variants;
}
