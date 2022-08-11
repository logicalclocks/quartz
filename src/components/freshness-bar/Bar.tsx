import React from 'react';
import { Box, BoxProps, SxStyleProp } from 'rebass';

interface Props extends Omit<BoxProps, 'css'> {
  variant?: 'progress' | 'freshness';
  width?: string;
  value: number;
}

export const Bar = ({
  variant = 'progress',
  value,
  width = '100px',
  ...props
}: Props) => (
  <Box {...props} tx="variants.bar" variant={variant} sx={styles} width={width}>
    <Box as="span" sx={overflowStyles(value)} />
  </Box>
);

const styles = {
  overflow: 'hidden',

  height: '7px',
  borderRadius: '3.5px',
};

export const overflowStyles = (translate: number): SxStyleProp => ({
  width: '101%',
  height: '100%',

  display: 'block',
  pointerEvents: 'none',

  background: '#EBEBEB',
  transform: `translateX(${100 * translate}%)`,
});
