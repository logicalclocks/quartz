import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Components
import ListItem, { ListItemProps } from '../item';

type IList<P> = FC<P> & {
  Item: FC<ListItemProps>;
};

export interface ListProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
}

const List: IList<ListProps> = ({ children, ...props }: ListProps) => (
  <Box
    as="ul"
    m="0"
    p="0"
    overflowY="auto"
    width="max-content"
    {...props}
    tx="variants.list"
    variant="container"
  >
    {children}
  </Box>
);

List.Item = ListItem;

export default List;
