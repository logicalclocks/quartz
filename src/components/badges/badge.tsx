import React, { FC } from 'react';
import { useTheme } from 'emotion-theming';
import { Flex, FlexProps } from 'rebass';
import { getIcon, IconName } from '../icon/list';
import Value from '../typography/value';
import getBorderAnimation from './animation';
import { ITheme } from '../../theme/types';

type Mode = 'default' | 'bordered';
type Variant =
  | 'light'
  | 'default'
  | 'label'
  | 'success'
  | 'warning'
  | 'notice'
  | 'fail';

export interface BadgeProps extends Omit<FlexProps, 'css'> {
  value: string | number;
  variant?: Variant;
  mode?: Mode;
  loading?: boolean;
  icon?: IconName;
}

// this is a workaround because styled-system does not support theme colors for `linear-gradient`
const getBorderColor = (theme: ITheme, variant: Variant) => {
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

const THEME_PATH: Record<Mode, string> = {
  default: 'variants.badges.primary',
  bordered: 'variants.badges.bordered',
};

const Badge: FC<BadgeProps> = ({
  value,
  variant = 'light',
  mode = 'default',
  loading = false,
  icon,
  ...props
}: BadgeProps) => {
  const theme = useTheme();

  const borderColor = getBorderColor(theme, variant);
  const borderStyle = loading
    ? getBorderAnimation(borderColor)
    : { borderRadius: '1px' };

  return (
    <Flex
      as="span"
      alignItems="center"
      justifyContent="center"
      px="6px"
      height="19px"
      sx={borderStyle}
      variant={variant}
      tx={loading ? THEME_PATH.bordered : THEME_PATH[mode]}
      {...props}
    >
      <Value
        as="span"
        display="flex"
        alignItems="center"
        lineHeight="13px"
        fontFamily="IBM Plex Mono"
        fontWeight="normal"
        sx={{
          svg: {
            height: '13px',
            width: 'auto',
            marginLeft: '5px',
          },
        }}
      >
        {value}
        {icon && getIcon(icon, 'currentColor')}
      </Value>
    </Flex>
  );
};

export default Badge;
