import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'rebass';

export interface ListProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
}

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, ...props }: ListProps, ref: React.Ref<HTMLUListElement>) => (
    <Box
      ref={ref}
      as="ul"
      m="0"
      p="0"
      width="max-content"
      overflowY="auto"
      {...props}
      tx="variants.list"
      variant="container"
    >
      {children}
    </Box>
  ),
);

export default List;
