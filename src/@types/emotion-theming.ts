import { ITheme } from '../theme/types'

declare module 'emotion-theming' {
  export interface Theme extends ITheme {}
  export function useTheme(): ITheme;
}