import React, { FC, forwardRef } from 'react';
import { Box as RebassBox, BoxProps } from 'rebass';

export interface Props extends Omit<BoxProps, 'css'> {}

export const Box: FC<Props> = forwardRef(({ children, ...rest }, ref) => (
  <RebassBox ref={ref} {...rest}>
    {children}
  </RebassBox>
));
