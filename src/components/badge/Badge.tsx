import React from 'react';
import { Flex, FlexProps, SxStyleProp } from 'rebass';
import { useTheme } from '../../theme/theme';
import { getIcon, IconName } from '../icon/list';
import Value from '../typography/value';
import { BadgeVariant } from './types';
import { getBorderColor, getBorderAnimation } from './utils';

type Mode = 'default' | 'bordered';
export interface Props extends Omit<FlexProps, 'css'> {
  /** Value for the badge. E.g. 'pending' or 18 */
  value: string | number;
  /** One of badge variants. Defined by `BadgeVariant` type. E.g. `light` or `warning`... */
  variant?: BadgeVariant;
  /** Badge mode: `default` or `bordered` */
  mode?: Mode;
  /** Whether to show loading spinner */
  loading?: boolean;
  /** Icon, used as `IconName.nameOfTheIcon` e.g. `IconName.download` */
  icon?: IconName;
}

const THEME_PATH: Record<Mode, string> = {
  default: 'variants.badges.primary',
  bordered: 'variants.badges.bordered',
};

export const Badge = ({
  value,
  variant = 'light',
  mode = 'default',
  loading = false,
  icon,
  sx,
  ...props
}: Props) => {
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
      sx={{ ...borderStyle, ...sx } as SxStyleProp}
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
