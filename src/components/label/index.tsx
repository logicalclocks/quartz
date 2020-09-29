import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

import styles from './label.styles';

export interface LabelProps extends Omit<BoxProps, 'css'> {
  text: string;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ text, children, ...props }: LabelProps) => (
  <Box as="label" variant="label" sx={styles} {...props}>
    <span>{text}</span>
    {children}
  </Box>
);

export default Label;
