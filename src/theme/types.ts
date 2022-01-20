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
    orange: string;
    purple: string;
    yellow: string;
    yellowLight: string;
    green: string;
    skyblue: string;
    darkblue: string;
    lightblue: string;
    blue: string;
    redShade3: string;
    orangeShade3: string;
  };
}

type NestedKeyOf<ObjectType extends object> = 
{[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object 
? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
: `${Key}`
}[keyof ObjectType & (string | number)];

export type Colors = NestedKeyOf<IThemeColors>;

export type Fonts =
  | 'text'
  | 'title'
  | 'subtitle'
  | 'label'
  | 'microlabel'
  | 'value';

export type IThemeFonts = {
  [key in Fonts]: string;
};

export type IThemeFontSizes = {
  [key in Fonts]: string;
};

export type IThemeFontWeights = {
  [key in Fonts]: number;
};

export type IconSizes = keyof IThemeIconSizes;

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

interface IThemeIconSizes {
  xxs: string,
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string
}

export type Variants = IThemeVariants | INestedThemeVariants;

export interface ITheme {
  colors: IThemeColors;
  fonts: IThemeFonts;
  fontSizes: IThemeFontSizes;
  fontWeights: IThemeFontWeights;
  shadows: IThemeShadows;
  transitions: IThemeTransitions;
  variants: Variants;
  text: Variants;
  buttons: Variants;
  inputs: Variants;
  pagination: Variants;
  inputIntents: IInputIntent;
  iconSizes: IThemeIconSizes;
  navigation: Variants;
  notification: Variants;
  zIndices: IZIndeces;
}
