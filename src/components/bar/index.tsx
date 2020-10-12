import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Styles
import styles, { overflowStyles } from './bar.styles';

export interface BarProps extends Omit<BoxProps, 'css'> {
  variant?: 'progress' | 'freshness';
  width?: string;
  value: number;
}

const Bar: FC<BarProps> = ({
  variant = 'progress',
  value,
  width = '100px',
  ...props
}: BarProps) => (
  <Box {...props} tx="variants.bar" variant={variant} sx={styles} width={width}>
    <Box as="span" sx={overflowStyles(value)} />
  </Box>
);
export default Bar;
