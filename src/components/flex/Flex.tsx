import React, { FC, forwardRef } from 'react';
import { Flex as RebassFlex, FlexProps } from 'rebass';

export interface Props extends Omit<FlexProps, 'css'> {}

export const Flex: FC<Props> = forwardRef(({ children, ...rest }, ref) => (
  <RebassFlex ref={ref}  {...rest}>
    {children}
  </RebassFlex>
));
