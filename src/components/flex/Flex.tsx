import React, { FC, forwardRef } from 'react';
import { Flex as RebassFlex, FlexProps } from 'rebass';

export interface Props extends Omit<FlexProps, 'css'> {
  gap?: string;
}

export const Flex: FC<Props> = forwardRef(
  ({ children, gap, sx, ...rest }, ref) => (
    <RebassFlex ref={ref} sx={{ ...sx, gap }} {...rest}>
      {children}
    </RebassFlex>
  ),
);
