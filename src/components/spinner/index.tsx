import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';
// Styles
import styles from './spinner-styles';

export interface SpinnerProps extends Omit<BoxProps, 'css'> {
  size?: number;
  color?: string;
}

const Spinner: FC<SpinnerProps> = ({
  size = 20,
  color = 'primary',
  ...props
}: SpinnerProps) => (
  <Box sx={{ ...styles(size, color) }} {...props}>
    <div />
    <div />
    <div />
    <div />
  </Box>
);

export default Spinner;
