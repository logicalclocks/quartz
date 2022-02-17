import { ITheme } from '../../theme/types';

export const expandViewButtonStyle = (theme: ITheme, isHovered: boolean) => ({
  padding: '4px 12px',
  borderRadius: '50px',
  borderWidth: '1px',
  borderStyle: 'solid',
  /**
   * since it's not possible to use :hover selector in inline React style I had to handle it manually,
   * there could be added a css style which avoided since there is no css files in the project
   */
  backgroundColor: isHovered ? theme.colors.white : theme.colors.primaryShade2,
  borderColor: theme.colors.primary,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});
