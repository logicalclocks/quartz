import React, { FC } from 'react';

import { Box, BoxProps } from 'rebass';

// Styles
import styles from './avatar.styles';
// Default Image
import defaultImage from './default.svg';

export interface AvatarProps extends Omit<BoxProps, 'css'> {
  borderColor?: string;
  src?: string;
  size?: string;
}

const Avatar: FC<AvatarProps> = ({
  src = defaultImage,
  size = '33px',
  borderColor = '#EB5757',
  ...props
}: AvatarProps) => (
  <Box
    {...props}
    as="img"
    src={src}
    sx={{ ...styles, borderColor }}
    minWidth={size}
    height={size}
    alt="User avatar"
  />
);

export default Avatar;
