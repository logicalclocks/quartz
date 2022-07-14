import { ITheme } from '../../../theme/types';
import { BadgeVariant } from '../types';

// this is a workaround because styled-system does not support theme colors for `linear-gradient`
export const getBorderColor = (theme: ITheme, variant: BadgeVariant) => {
  switch (variant) {
    case 'light':
      return theme.colors.grayShade1;
    case 'default':
      return theme.colors.black;
    case 'label':
      return theme.colors.black;
    case 'success':
      return theme.colors.labels.green;
    case 'warning':
      return theme.colors.labels.orange;
    case 'notice':
      return theme.colors.labels.yellow;
    case 'fail':
      return theme.colors.labels.red;
    default:
      return theme.colors.black;
  }
};
