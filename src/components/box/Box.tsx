import { PropsWithChildren, forwardRef } from 'react';
import { Box as RebassBox, BoxProps } from 'rebass';

export interface Props extends Omit<BoxProps, 'css'> {}

export const Box = forwardRef(
  ({ children, ...rest }: PropsWithChildren<Props>, ref) => (
    <RebassBox ref={ref} {...rest}>
      {children}
    </RebassBox>
  ),
);
