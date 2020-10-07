import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

export interface DotProps extends Omit<BoxProps, 'css'> {
  variant?: 'green' | 'black';
}

const Dot: FC<DotProps> = ({ variant = 'black', ...props }: DotProps) => (
  <Box
    {...props}
    as="span"
    tx="variants.badges.dot"
    variant={variant}
    width="12px"
    height="12px"
    display="block"
    sx={{
      borderRadius: '50%',
    }}
  />
);

export default Dot;
