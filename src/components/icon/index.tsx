import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import { IThemeColors, theme } from '../..';
import { getIcon, IconName, IconSize } from './list';

type Colors = keyof IThemeColors;

export interface IconProps extends Omit<BoxProps, 'css'> {
  icon: IconName;
  size?: IconSize;
  color?: Colors;
}

export enum IconColors {
  default,
  primary
}


const Icon: FC<IconProps> = ({
  icon,
  size = IconSize.lg,
  color = "black",
  ...props
}: IconProps) => (
  <Box as="span" {...props} tx="icon">
    { getIcon(icon, theme.colors[color.toString()], size) }
  </Box>
);

export default Icon;
