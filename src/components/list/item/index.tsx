import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass';

// Styles
import styles from './list-item.styles';

export interface ListItemProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
  variant?: 'primary' | 'withDivider';
  hasDivider?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  children,
  variant = 'primary',
  hasDivider,
  ...props
}: ListItemProps) => (
  <Box
    p="10px"
    sx={styles}
    {...props}
    as="li"
    tx="variants.list.item"
    variant={hasDivider ? 'withDivider' : variant}
  >
    {children}
  </Box>
);

export default ListItem;
