import React, { FC, memo } from 'react';
import { Box, BoxProps } from 'rebass';

// Styles
import styles, { reverse } from './list-item.styles';

export interface ListItemProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode;
  variant?: 'primary' | 'withDivider';
  hasDivider?: boolean;
  isRightAlignment?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  children,
  variant = 'primary',
  hasDivider,
  isRightAlignment,
  ...props
}: ListItemProps) => (
  <Box
    p="10px"
    as="li"
    tx="variants.list.item"
    variant={hasDivider ? 'withDivider' : variant}
    {...props}
    sx={{
      ...styles,
      ...(isRightAlignment && reverse),
    }}
  >
    {children}
  </Box>
);

export default memo(ListItem);
