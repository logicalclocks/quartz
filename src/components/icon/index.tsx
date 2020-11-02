import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

export interface IconProps extends Omit<BoxProps, 'css'> {
  size?: SizeProp;
  icon: IconProp;
  variant?: 'primary';
}

const Icon: FC<IconProps> = ({
  size,
  icon,
  variant = 'primary',
  ...props
}: IconProps) => (
  <Box as="span" {...props} tx="icon" variant={variant}>
    <FontAwesomeIcon icon={icon} size={size} />
  </Box>
);

export default Icon;
