import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
import { theme } from '../..';
import { Colors, IconSizes } from '../../theme/types';
import { getIcon, IconName } from './list';
import _ from 'lodash';


export interface IconProps extends Omit<BoxProps, 'css'> {
  icon: IconName;
  size?: IconSizes;
  color?: Colors;
}


const Icon: FC<IconProps> = ({
  icon,
  size = "lg",
  color = "black",
  ...props
}: IconProps) => (
  <Box as="span" {...props} tx="icon">
    { getIcon(icon, _.get(theme.colors, color), theme.iconSizes[size]) }
  </Box>
);

export default Icon;
